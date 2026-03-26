'use client'

import { useState, FormEvent } from 'react'

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')

    // Placeholder: replace with real form submission (Formspree, API route, etc.)
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'sent') {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <svg
          className="mb-4 h-16 w-16 text-brand"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.5}
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
        <h3 className="font-heading text-2xl font-bold text-gray-900">
          Mensagem enviada!
        </h3>
        <p className="mt-2 text-gray-600">
          Entraremos em contato o mais breve poss&iacute;vel.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Nome completo */}
      <div>
        <label htmlFor="name" className="sr-only">
          Nome completo
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          placeholder="Nome completo"
          className="w-full border-0 border-b-2 border-gray-300 bg-transparent py-3 text-gray-900 placeholder-gray-400 transition-colors focus:border-brand focus:outline-none focus:ring-0"
        />
      </div>

      {/* E-mail */}
      <div>
        <label htmlFor="email" className="sr-only">
          E-mail
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="E-mail"
          className="w-full border-0 border-b-2 border-gray-300 bg-transparent py-3 text-gray-900 placeholder-gray-400 transition-colors focus:border-brand focus:outline-none focus:ring-0"
        />
      </div>

      {/* Telefone */}
      <div>
        <label htmlFor="phone" className="sr-only">
          Telefone
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          placeholder="Telefone"
          className="w-full border-0 border-b-2 border-gray-300 bg-transparent py-3 text-gray-900 placeholder-gray-400 transition-colors focus:border-brand focus:outline-none focus:ring-0"
        />
      </div>

      {/* Mensagem */}
      <div>
        <label htmlFor="message" className="sr-only">
          Mensagem
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Sua mensagem"
          className="w-full resize-none border-0 border-b-2 border-gray-300 bg-transparent py-3 text-gray-900 placeholder-gray-400 transition-colors focus:border-brand focus:outline-none focus:ring-0"
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={status === 'sending'}
        className="btn-brand w-full disabled:opacity-60"
      >
        {status === 'sending' ? 'ENVIANDO...' : 'ENVIAR'}
      </button>

      {status === 'error' && (
        <p className="text-center text-sm text-red-600">
          Ocorreu um erro. Por favor, tente novamente.
        </p>
      )}
    </form>
  )
}
