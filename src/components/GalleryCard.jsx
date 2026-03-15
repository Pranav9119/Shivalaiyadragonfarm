import { useState } from 'react'

export default function GalleryCard({ image, title, description }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      data-cursor-text="Details"
      className="group relative overflow-hidden rounded-xl aspect-square cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-dragon-green/30 to-dragon-pink/30 group-hover:scale-110 transition-transform duration-700" />
      {image && (
        <img
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          width={600}
          height={600}
          loading="lazy"
          decoding="async"
        />
      )}
      <div
        className={`absolute inset-0 bg-dragon-green-dark/80 flex flex-col justify-end p-6 transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'
          }`}
      >
        <h3 className="font-serif text-xl font-semibold text-white">{title}</h3>
        {description && (
          <p className="text-cream-dark/90 text-sm mt-1 line-clamp-2">{description}</p>
        )}
      </div>
    </div>
  )
}
