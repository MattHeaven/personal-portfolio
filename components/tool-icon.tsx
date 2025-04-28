import type React from "react"

interface ToolIconProps {
  name: string
  className?: string
}

export const ToolIcon: React.FC<ToolIconProps> = ({ name, className = "" }) => {
  // This is a placeholder component for tool icons
  // You would replace these with your actual SVG imports

  return (
    <div className={`w-6 h-6 bg-gray-100 rounded flex items-center justify-center ${className}`}>
      {/* This is where you would render the actual SVG */}
      <svg viewBox="0 0 24 24" className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="18" height="18" rx="2" />
      </svg>
    </div>
  )
}
