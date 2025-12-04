import { useState } from 'react'

export default function ImageWithFallback({ src, srcWebp, fallback, alt, className = '', style = {}, loading, fetchPriority, sizes, ...props }) {
  const [currentSrc, setCurrentSrc] = useState(src)
  if (srcWebp) {
    return (
      <picture>
        <source srcSet={srcWebp} type="image/webp" />
        <img
          src={currentSrc}
          alt={alt}
          className={className}
          style={style}
          onError={() => setCurrentSrc(fallback)}
          loading={loading ?? 'lazy'}
          decoding="async"
          fetchPriority={fetchPriority}
          sizes={sizes}
          {...props}
        />
      </picture>
    )
  }
  return (
    <img
      src={currentSrc}
      alt={alt}
      className={className}
      style={style}
      onError={() => setCurrentSrc(fallback)}
      loading={loading ?? 'lazy'}
      decoding="async"
      fetchPriority={fetchPriority}
      sizes={sizes}
      {...props}
    />
  )
}
