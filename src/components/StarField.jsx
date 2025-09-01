import React, { useMemo } from 'react'

const Star = ({ top, left, size, delay, speed, opacity }) => (
  <span
    style={{
      top: `${top}%`,
      left: `${left}%`,
      width: size,
      height: size,
      animationDelay: `${delay}s`,
      animationDuration: `${speed}s`,
      opacity,
    }}
    className="absolute rounded-full bg-white/90 shadow-[0_0_6px_rgba(255,255,255,0.8)] animate-[star-flicker_var(--speed)_infinite]"
  />
)

const StarField = ({ count = 80 }) => {
  const stars = useMemo(() => {
    return Array.from({ length: count }).map((_, i) => ({
      id: i,
      top: Math.random() * 100,
      left: Math.random() * 100,
      size: `${Math.random() * 2 + 1}px`,
      delay: Math.random() * 3,
      speed: Math.random() * 3 + 2,
      opacity: Math.random() * 0.5 + 0.5,
    }))
  }, [count])

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {stars.map((s) => (
        <Star key={s.id} {...s} />
      ))}
    </div>
  )
}

export default StarField
