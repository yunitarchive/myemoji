interface RefreshButtonProps {
    onClick: () => void
  }
  
  export default function RefreshButton({ onClick }: RefreshButtonProps) {
    return (
      <button 
        onClick={onClick}
        className="mt-8 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
      >
        Get New Emoji
      </button>
    )
  }