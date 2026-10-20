import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '')
      const timer = window.setTimeout(() => {
        const element = document.getElementById(id)
        if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }, 120)
      return () => window.clearTimeout(timer)
    }

    const root = document.documentElement
    const previous = root.style.scrollBehavior
    root.style.scrollBehavior = 'auto'
    window.scrollTo(0, 0)
    root.style.scrollBehavior = previous
    return undefined
  }, [pathname, hash])

  return null
}

export default function Layout() {
  const location = useLocation()

  return (
    <div className="flex min-h-screen flex-col overflow-x-clip">
      <a
        href="#main-content"
        className="sr-only z-[100] rounded-full bg-navy-950 px-5 py-3 text-sm font-semibold text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to main content
      </a>
      <ScrollManager />
      <Header />
      <main id="main-content" className="flex-1">
        <div key={location.pathname} className="animate-fade-in">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  )
}
