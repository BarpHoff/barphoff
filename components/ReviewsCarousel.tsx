'use client'

import { useRef, useState, useEffect } from 'react'

interface Review {
  initials: string
  name: string
  date: string
  text: string
}

const reviews: Review[] = [
  {
    initials: 'MC',
    name: 'Maria C.',
    date: 'há 2 meses',
    text: 'Atendimento excelente, muito atenciosos e resolveram meu caso rapidamente. Recomendo demais!',
  },
  {
    initials: 'RS',
    name: 'Roberto S.',
    date: 'há 3 meses',
    text: 'Profissionais dedicados que realmente se importam com o paciente. Conseguiram a liminar em poucos dias.',
  },
  {
    initials: 'AF',
    name: 'Ana F.',
    date: 'há 1 mês',
    text: 'Consegui meu medicamento graças ao trabalho incrível do escritório. Sou muito grata por toda a ajuda.',
  },
  {
    initials: 'JL',
    name: 'José L.',
    date: 'há 4 meses',
    text: 'Recomendo de olhos fechados! Equipe competente e humana. Resolveram tudo sem eu precisar sair de casa.',
  },
  {
    initials: 'PO',
    name: 'Patricia O.',
    date: 'há 2 meses',
    text: 'Meu plano negou a cirurgia e eles reverteram rapidamente. Atendimento humanizado do início ao fim.',
  },
]

export function ReviewsCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScroll = () => {
    const el = scrollRef.current
    if (!el) return
    setCanScrollLeft(el.scrollLeft > 0)
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 2)
  }

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    checkScroll()
    el.addEventListener('scroll', checkScroll, { passive: true })
    window.addEventListener('resize', checkScroll)
    return () => {
      el.removeEventListener('scroll', checkScroll)
      window.removeEventListener('resize', checkScroll)
    }
  }, [])

  const scroll = (direction: 'left' | 'right') => {
    const el = scrollRef.current
    if (!el) return
    const amount = el.clientWidth * 0.8
    el.scrollBy({ left: direction === 'left' ? -amount : amount, behavior: 'smooth' })
  }

  return (
    <div className="relative">
      {/* Scroll buttons */}
      {canScrollLeft && (
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 z-10 -translate-y-1/2 -translate-x-3 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-lg text-brand hover:bg-brand hover:text-white transition-colors"
          aria-label="Anterior"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>
        </button>
      )}
      {canScrollRight && (
        <button
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 z-10 -translate-y-1/2 translate-x-3 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-lg text-brand hover:bg-brand hover:text-white transition-colors"
          aria-label="Próximo"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      )}

      {/* Cards container */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scroll-smooth pb-4 scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {reviews.map((review, i) => (
          <div
            key={i}
            className="min-w-[300px] max-w-[340px] flex-shrink-0 rounded-xl border border-gray-100 bg-white p-6 shadow-sm"
          >
            {/* Header: avatar + name + Google icon */}
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand text-sm font-bold text-white">
                {review.initials}
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-gray-900">{review.name}</p>
                <p className="text-xs text-gray-400">{review.date}</p>
              </div>
              {/* Google G icon */}
              <svg className="h-5 w-5 flex-shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18A11.96 11.96 0 0 0 1 12c0 1.94.46 3.77 1.18 5.09l3.66-2.84z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
            </div>

            {/* Stars */}
            <div className="mb-3 flex gap-0.5">
              {[...Array(5)].map((_, j) => (
                <svg
                  key={j}
                  className="h-4 w-4 text-yellow-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 0 0-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 0 0 .951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            {/* Review text */}
            <p className="text-sm leading-relaxed text-gray-600">{review.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
