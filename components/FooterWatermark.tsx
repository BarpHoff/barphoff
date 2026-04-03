'use client'

import { useEffect } from 'react'

export function FooterWatermark() {
  useEffect(() => {
    const footer = document.querySelector('footer')
    if (!footer) return

    const overlay = document.createElement('div')
    overlay.style.cssText = `
      position: absolute;
      inset: 0;
      pointer-events: none;
      background-image: url(/assets/images/icon2.png);
      background-size: 60px;
      background-repeat: repeat;
      opacity: 0.04;
      z-index: 0;
    `
    overlay.setAttribute('data-watermark', 'true')

    footer.style.position = 'relative'
    footer.insertBefore(overlay, footer.firstChild)

    return () => {
      overlay.remove()
    }
  }, [])

  return null
}
