import type React from "react"

interface CompanyLogoProps {
  name: "SokoBeauty" | "MamaPesa" | "ShopOkoa"
  className?: string
}

export const CompanyLogo: React.FC<CompanyLogoProps> = ({ name, className = "" }) => {
  // This is a placeholder component for company logos
  // You would replace these with your actual SVG imports

  const getLogoColor = () => {
    switch (name) {
      case "SokoBeauty":
        return "text-purple-700"
      case "MamaPesa":
        return "text-orange-500"
      case "ShopOkoa":
        return "text-red-600"
      default:
        return "text-gray-800"
    }
  }

  return (
    <div className={`font-medium ${getLogoColor()} ${className}`}>
      {name}
      {/* When you have the actual SVGs, you would render them here instead of text */}
    </div>
  )
}
