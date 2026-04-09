'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const navLinks = [
  { label: 'INÍCIO', href: '/' },
  { label: 'QUEM SOMOS', href: '/sobre' },
  {
    label: 'ÁREAS DE ATUAÇÃO',
    href: '/areas-de-atuacao',
    dropdown: [
      { label: 'Negativa do SUS', href: '/negativa-do-sus' },
      { label: 'Negativa de Planos de Saúde', href: '/negativa-plano-de-saude' },
      { label: 'Tratamentos Home Care', href: '/home-care' },
      { label: 'Tratamento de Câncer', href: '/tratamento-oncologico' },
      { label: 'Cirurgias Reparadoras', href: '/negativa-cirurgia' },
      { label: 'Medicamentos de Alto Custo', href: '/medicamento-alto-custo' },
    ],
  },
  { label: 'BLOG', href: '/blog' },
  { label: 'CONTATO', href: '/contato' },
]

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false)
  const [isSticky, setIsSticky] = useState(false)
  const dropdownRef = useRef<HTMLLIElement>(null)
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout> | null>(null)

  // Sticky detection
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileOpen(false)
        setMobileDropdownOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  const handleDropdownEnter = () => {
    if (dropdownTimeout.current) {
      clearTimeout(dropdownTimeout.current)
      dropdownTimeout.current = null
    }
    setDropdownOpen(true)
  }

  const handleDropdownLeave = () => {
    dropdownTimeout.current = setTimeout(() => {
      setDropdownOpen(false)
    }, 150)
  }

  return (
    <header className="w-full z-50">
      {/* ── Top Contact Bar ── */}
      <div className="w-full bg-brand">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-center gap-x-6 md:gap-x-8 py-2 text-white text-[13px] leading-snug">
          {/* Email */}
          <a
            href="mailto:advogados.bhc@gmail.com"
            className="flex items-center gap-1.5 hover:opacity-80 transition-opacity"
          >
            <svg
              className="w-3.5 h-3.5 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
              />
            </svg>
            <span className="hidden sm:inline">advogados.bhc@gmail.com</span>
            <span className="sm:hidden">Email</span>
          </a>

          {/* Phone */}
          <a
            href="tel:+554530273100"
            className="flex items-center gap-1.5 hover:opacity-80 transition-opacity"
          >
            <svg
              className="w-3.5 h-3.5 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
              />
            </svg>
            <span>(45) 3027-3100</span>
          </a>

          {/* Address - hidden on mobile */}
          <span className="hidden md:flex items-center gap-1.5">
            <svg
              className="w-3.5 h-3.5 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
              />
            </svg>
            <span>Rua Marechal Floriano Peixoto, 1756 - Sala 02, Foz do Iguaçu - PR</span>
          </span>
        </div>
      </div>

      {/* ── Sticky Navigation Header ── */}
      <nav
        className={`w-full bg-white sticky top-0 z-50 transition-shadow duration-300 ${
          isSticky ? 'shadow-[0_5px_10px_rgba(0,0,0,0.12)]' : ''
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-[70px] lg:h-[80px]">
          {/* Logo */}
          <Link href="/" className="relative w-[160px] lg:w-[200px] h-[45px] lg:h-[55px] flex-shrink-0">
            <Image
              src="/assets/images/logo-bordo.png"
              alt="Barp.Hoff. Advogados"
              fill
              className="object-contain object-left"
              priority
              sizes="200px"
            />
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) =>
              link.dropdown ? (
                <li
                  key={link.href}
                  ref={dropdownRef}
                  className="relative"
                  onMouseEnter={handleDropdownEnter}
                  onMouseLeave={handleDropdownLeave}
                >
                  <Link
                    href={link.href}
                    className="inline-flex items-center gap-1 px-3 xl:px-4 py-2 text-[14px] font-semibold uppercase tracking-[0.05em] text-[#000000] hover:text-brand transition-colors"
                  >
                    {link.label}
                    <svg
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        dropdownOpen ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2.5}
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                  </Link>

                  {/* Dropdown */}
                  <div
                    className={`absolute left-0 top-full pt-1 transition-all duration-200 ${
                      dropdownOpen
                        ? 'opacity-100 visible translate-y-0'
                        : 'opacity-0 invisible -translate-y-1'
                    }`}
                  >
                    <ul className="min-w-[280px] bg-white border border-brand/[0.12] rounded-b-[10px] shadow-lg overflow-hidden">
                      {link.dropdown.map((sub) => (
                        <li key={sub.href}>
                          <Link
                            href={sub.href}
                            className="block px-5 py-3 text-[13.5px] font-medium text-[#000000] hover:bg-brand hover:text-white transition-colors"
                            onClick={() => setDropdownOpen(false)}
                          >
                            {sub.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ) : (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-block px-3 xl:px-4 py-2 text-[14px] font-semibold uppercase tracking-[0.05em] text-[#000000] hover:text-brand transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              )
            )}
          </ul>

          {/* Mobile Hamburger */}
          <button
            type="button"
            aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={mobileOpen}
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-md bg-brand text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-brand/50"
            onClick={() => {
              setMobileOpen((prev) => !prev)
              if (mobileOpen) setMobileDropdownOpen(false)
            }}
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </div>

        {/* ── Mobile Menu ── */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            mobileOpen ? 'max-h-[calc(100vh-70px)] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <ul className="bg-white border-t border-gray-100 px-4 py-3 space-y-1">
            {navLinks.map((link) =>
              link.dropdown ? (
                <li key={link.href}>
                  <button
                    type="button"
                    className="w-full flex items-center justify-between px-3 py-3 text-[14px] font-semibold uppercase tracking-[0.05em] text-[#000000] hover:text-brand transition-colors rounded-md"
                    onClick={() => setMobileDropdownOpen((prev) => !prev)}
                  >
                    {link.label}
                    <svg
                      className={`w-4 h-4 transition-transform duration-200 ${
                        mobileDropdownOpen ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2.5}
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-200 ${
                      mobileDropdownOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <ul className="pl-4 pb-2 space-y-1">
                      <li>
                        <Link
                          href={link.href}
                          className="block px-3 py-2.5 text-[13.5px] font-medium text-[#000000] hover:bg-brand hover:text-white rounded-md transition-colors"
                          onClick={() => {
                            setMobileOpen(false)
                            setMobileDropdownOpen(false)
                          }}
                        >
                          Ver Todas as Áreas
                        </Link>
                      </li>
                      {link.dropdown.map((sub) => (
                        <li key={sub.href}>
                          <Link
                            href={sub.href}
                            className="block px-3 py-2.5 text-[13.5px] font-medium text-[#000000] hover:bg-brand hover:text-white rounded-md transition-colors"
                            onClick={() => {
                              setMobileOpen(false)
                              setMobileDropdownOpen(false)
                            }}
                          >
                            {sub.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ) : (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block px-3 py-3 text-[14px] font-semibold uppercase tracking-[0.05em] text-[#000000] hover:text-brand transition-colors rounded-md"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>
      </nav>
    </header>
  )
}
