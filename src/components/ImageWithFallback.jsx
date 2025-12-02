import { useState } from 'react'

export default function ImageWithFallback({ src, fallback, alt, className = '' }) {
  const [currentSrc, setCurrentSrc] = useState(src)
  return (
    <img
      src={currentSrc}
      alt={alt}
      className={className}
      onError={() => setCurrentSrc(fallback)}
      loading="lazy"
    />
  )
}
