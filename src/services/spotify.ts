import type { SpotifyTrack } from '@/types'

// Note: For production, you'll need to set up Spotify Web API authentication
// This service provides the structure for Spotify integration
export class SpotifyService {
  private readonly CLIENT_ID = import.meta.env.VITE_SPOTIFY_CLIENT_ID
  private readonly CLIENT_SECRET = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET
  private readonly REFRESH_TOKEN = import.meta.env.VITE_SPOTIFY_REFRESH_TOKEN
  
  private accessToken: string | null = null
  private tokenExpiry: number = 0

  private async getAccessToken(): Promise<string> {
    if (this.accessToken && Date.now() < this.tokenExpiry) {
      return this.accessToken
    }

    try {
      const response = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': `Basic ${btoa(`${this.CLIENT_ID}:${this.CLIENT_SECRET}`)}`
        },
        body: new URLSearchParams({
          grant_type: 'refresh_token',
          refresh_token: this.REFRESH_TOKEN || ''
        })
      })

      if (!response.ok) {
        throw new Error(`Spotify token error: ${response.statusText}`)
      }

      const data = await response.json()
      this.accessToken = data.access_token
      this.tokenExpiry = Date.now() + (data.expires_in * 1000)
      
      return this.accessToken
    } catch (error) {
      console.error('Error getting Spotify access token:', error)
      throw error
    }
  }

  private async fetchSpotify(endpoint: string) {
    const token = await this.getAccessToken()
    const response = await fetch(`https://api.spotify.com/v1${endpoint}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })

    if (!response.ok) {
      throw new Error(`Spotify API error: ${response.statusText}`)
    }

    return response.json()
  }

  async getCurrentTrack(): Promise<SpotifyTrack | null> {
    try {
      const data = await this.fetchSpotify('/me/player/currently-playing')
      
      if (!data || !data.item) {
        // Try to get recently played tracks
        const recentData = await this.fetchSpotify('/me/player/recently-played?limit=1')
        
        if (recentData.items && recentData.items.length > 0) {
          const track = recentData.items[0].track
          return this.formatTrack(track, false, recentData.items[0].played_at)
        }
        
        return null
      }

      return this.formatTrack(data.item, data.is_playing, new Date().toISOString())
    } catch (error) {
      console.error('Error fetching current track:', error)
      
      // Return mock data as fallback
      return {
        name: 'Master of Puppets',
        artist: 'Metallica',
        album: 'Master of Puppets',
        imageUrl: 'https://via.placeholder.com/64x64/1DB954/FFFFFF?text=♪',
        externalUrl: 'https://open.spotify.com',
        isPlaying: Math.random() > 0.5, // Random playing status
        playedAt: new Date().toISOString()
      }
    }
  }

  private formatTrack(track: any, isPlaying: boolean, playedAt: string): SpotifyTrack {
    return {
      name: track.name,
      artist: track.artists.map((artist: any) => artist.name).join(', '),
      album: track.album.name,
      imageUrl: track.album.images[2]?.url || track.album.images[0]?.url || '',
      previewUrl: track.preview_url,
      externalUrl: track.external_urls.spotify,
      isPlaying,
      playedAt
    }
  }

  async getTopTracks(timeRange: 'short_term' | 'medium_term' | 'long_term' = 'medium_term') {
    try {
      return await this.fetchSpotify(`/me/top/tracks?time_range=${timeRange}&limit=10`)
    } catch (error) {
      console.error('Error fetching top tracks:', error)
      return { items: [] }
    }
  }

  async getTopArtists(timeRange: 'short_term' | 'medium_term' | 'long_term' = 'medium_term') {
    try {
      return await this.fetchSpotify(`/me/top/artists?time_range=${timeRange}&limit=10`)
    } catch (error) {
      console.error('Error fetching top artists:', error)
      return { items: [] }
    }
  }
}

export const spotifyService = new SpotifyService()