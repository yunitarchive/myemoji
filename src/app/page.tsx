'use client'

import { useEffect } from 'react'
import { useEmoji } from './hooks/useEmoji'
import EmojiDisplay from './components/EmojiDIsplay'


export default function Home() {
  const { emoji, loading, fetchRandomEmoji, error } = useEmoji()

  useEffect(() => {
    fetchRandomEmoji()
  }, [fetchRandomEmoji])

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4 bg-primary">
      <h3 className="text-4xl font-bold mb-8 text-secondary">Whats your 
      <span className="text-4xl font-bold mb-8 text-accent"> emoji</span> today?</h3>
      {error ? (
        <p className="text-grey-500">Error: {error.message}</p>
      ) : (
        <EmojiDisplay emoji={emoji} loading={loading} />
      )}
     
    </main>
  )
}