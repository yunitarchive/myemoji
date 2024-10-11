import { Emoji } from '../types/emoji'

export async function fetchEmojis(): Promise<Emoji[]> {
  try {
    const response = await fetch('https://emojihub-1001447344924.asia-southeast2.run.app/api/all')
    if (!response.ok) {
      throw new Error('Failed to fetch emojis')
    }
    return response.json()
  } catch (error) {
    console.error('Error fetching emojis:', error)
    throw error
  }
}