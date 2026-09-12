import { useEffect, useRef, useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'
import './App.css'
import LoadingScreen from './components/LoadingScreen'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
import SelectedWorkPage from './pages/SelectedWorkPage'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import ProjectPage from './pages/ProjectPage'
import LegalPage from './pages/LegalPage'
import NotFoundPage from './pages/NotFoundPage'

gsap.registerPlugin(ScrollTrigger)

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <PortfolioShell />
    </BrowserRouter>
  )
}

function PortfolioShell() {
  const location = useLocation()
  const rootRef = useRef(null)
  const [isLoading, setIsLoading] = useState(true)
  const [sidebarOpen, setSidebarOpen] = useState(false)

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), 1800)
    return () => window.clearTimeout(timer)
  }, [])

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      lerp: 0.08
    })

    let rafId
    const raf = (time) => {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }

    rafId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
    }
  }, [])

  useEffect(() => {
    if (isLoading) return undefined

    const ctx = gsap.context(() => {
      const revealTargets = gsap.utils.toArray('[data-reveal]')
      if (revealTargets.length) {
        gsap.fromTo(
          revealTargets,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 1.1,
            ease: 'power3.out',
            stagger: 0.08,
            scrollTrigger: {
              trigger: rootRef.current,
              start: 'top 80%'
            }
          }
        )
      }

      const projectCards = gsap.utils.toArray('.project-card')
      projectCards.forEach((card) => {
        gsap.fromTo(
          card,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%'
            }
          }
        )
      })
    }, rootRef)

    return () => ctx.revert()
  }, [location.pathname, isLoading])

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <div className={`portfolio-shell ${sidebarOpen ? 'sidebar-is-open' : ''}`} ref={rootRef}>
      <button
        className="sidebar-toggle"
        type="button"
        onClick={() => setSidebarOpen((open) => !open)}
        aria-expanded={sidebarOpen}
        aria-controls="portfolio-sidebar"
      >
        <span className="sidebar-toggle-icon" aria-hidden="true"><i /><i /></span>
        <span>{sidebarOpen ? 'Close' : 'Menu'}</span>
      </button>

      <button
        className="sidebar-scrim"
        type="button"
        onClick={() => setSidebarOpen(false)}
        aria-label="Close navigation"
      />

      <Sidebar onNavigate={() => setSidebarOpen(false)} />
      <main className="page-shell">
        <Routes>
          <Route path="/" element={<SelectedWorkPage />} />
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/work" element={<Navigate to="/homepage" replace />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects/:slug" element={<ProjectPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy-policy" element={<LegalPage />} />
          <Route path="/terms" element={<LegalPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      {location.pathname !== '/' ? <Footer /> : null}
    </div>
  )
}

export default App
