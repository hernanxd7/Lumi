import { useState } from 'react'

export default function ImageWithFallback({ src, fallback, alt, className = '', style = {}, ...props }) {
  const [currentSrc, setCurrentSrc] = useState(src)
  return (
    <img
      src={currentSrc}
      alt={alt}
      className={className}
      style={style}
      onError={() => setCurrentSrc(fallback)}
      loading="lazy"
      {...props}
    />
  )
}
