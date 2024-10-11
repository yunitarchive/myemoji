import { Emoji } from '../types/emoji'

interface EmojiDisplayProps {
  emoji: Emoji | null
  loading: boolean
}

export default function EmojiDisplay({ emoji, loading }: EmojiDisplayProps) {
  if (loading) {
    return <p className="text-xl">Loading...</p>
  }

  if (!emoji) {
    return <p className="text-xl">No emoji found</p>
  }

  return (
    <div className="text-center">
      <p className="text-8xl mb-4" dangerouslySetInnerHTML={{ __html: emoji.htmlCode[0] }} />
      <p className="text-xl mb-2">{emoji.name}</p>
      <p className="text-gray-600">Category: {emoji.category}</p>
      <p className="text-gray-600">Group: {emoji.group}</p>
    </div>
  )
}