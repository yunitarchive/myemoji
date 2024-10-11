import { useState, useCallback } from 'react'
import { Emoji } from '../types/emoji'
import { fetchEmojis } from '../utils/api'

interface UseEmojiReturn {
  emoji: Emoji | null
  loading: boolean
  fetchRandomEmoji: () => Promise<void>
  error: Error | null
}

export function useEmoji(): UseEmojiReturn {
  const [emoji, setEmoji] = useState<Emoji | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<Error | null>(null)
  const [emojis, setEmojis] = useState<Emoji[]>([])

  const fetchRandomEmoji = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      if (emojis.length === 0) {
        const fetchedEmojis = await fetchEmojis()
        setEmojis(fetchedEmojis)
        const randomEmoji = fetchedEmojis[Math.floor(Math.random() * fetchedEmojis.length)]
        setEmoji(randomEmoji)
      } else {
        const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)]
        setEmoji(randomEmoji)
      }
    } catch (err) {
      setError(err instanceof Error ? err : new Error('An error occurred'))
    } finally {
      setLoading(false)
    }
  }, [emojis])

  return { emoji, loading, fetchRandomEmoji, error }
}