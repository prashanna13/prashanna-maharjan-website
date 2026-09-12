import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { projects } from '../data/projects'
import './SelectedWorkPage.css'

function SelectedWorkPage() {
  const movementSpeed = 0.5
  const canvasRef = useRef(null)
  const viewportRef = useRef(null)
  const positionRef = useRef({ x: 0, y: 0 })
  const dragRef = useRef({
    active: false,
    moved: false,
    suppressClick: false,
    captured: false,
    x: 0,
    y: 0
  })

  useEffect(() => {
    const canvas = canvasRef.current
    const viewport = viewportRef.current
    if (!canvas || !viewport) return undefined

    const mobileQuery = window.matchMedia('(max-width: 640px)')
    if (mobileQuery.matches) {
      gsap.set(canvas, { clearProps: 'transform' })
      return undefined
    }

    const context = gsap.context(() => {
      gsap.set(canvas, { x: 0, y: 0 })

      const moveCanvas = (x, y, duration = 0.45) => {
        const nextPosition = { x, y }
        positionRef.current = nextPosition
        gsap.to(canvas, { ...nextPosition, duration, ease: 'power3.out', overwrite: true })
      }

      let focusedCard = null

      const onPointerOver = (event) => {
        if (dragRef.current.active || dragRef.current.moved) return
        const card = event.target.closest('.project-card')
        if (!card || card === focusedCard || !viewport.contains(card)) return

        focusedCard = card
        const viewportBounds = viewport.getBoundingClientRect()
        const cardBounds = card.getBoundingClientRect()
        const deltaX = viewportBounds.left + viewportBounds.width / 2 - (cardBounds.left + cardBounds.width / 2)
        const deltaY = viewportBounds.top + viewportBounds.height / 2 - (cardBounds.top + cardBounds.height / 2)
        const safeDeltaX = gsap.utils.clamp(event.clientX - cardBounds.right, event.clientX - cardBounds.left, deltaX)
        const safeDeltaY = gsap.utils.clamp(event.clientY - cardBounds.bottom, event.clientY - cardBounds.top, deltaY)
        moveCanvas(
          positionRef.current.x + safeDeltaX * movementSpeed,
          positionRef.current.y + safeDeltaY * movementSpeed
        )
      }

      const onPointerDown = (event) => {
        if (event.button !== 0) return
        dragRef.current = {
          active: true,
          moved: false,
          suppressClick: false,
          captured: false,
          x: event.clientX,
          y: event.clientY
        }
        viewport.classList.add('is-panning')
      }

      const onPointerMove = (event) => {
        if (!dragRef.current.active) return
        const deltaX = event.clientX - dragRef.current.x
        const deltaY = event.clientY - dragRef.current.y
        if (Math.abs(deltaX) > 2 || Math.abs(deltaY) > 2) {
          dragRef.current.moved = true
          if (!dragRef.current.captured) {
            viewport.setPointerCapture(event.pointerId)
            dragRef.current.captured = true
          }
        }
        dragRef.current.x = event.clientX
        dragRef.current.y = event.clientY
        moveCanvas(
          positionRef.current.x + deltaX * movementSpeed,
          positionRef.current.y + deltaY * movementSpeed,
          0
        )
      }

      const onPointerUp = (event) => {
        if (!dragRef.current.active) return
        dragRef.current.active = false
        dragRef.current.suppressClick = dragRef.current.moved
        dragRef.current.moved = false
        if (dragRef.current.captured && viewport.hasPointerCapture(event.pointerId)) {
          viewport.releasePointerCapture(event.pointerId)
        }
        dragRef.current.captured = false
        viewport.classList.remove('is-panning')
      }

      const onClick = (event) => {
        if (!dragRef.current.suppressClick) return
        event.preventDefault()
        event.stopPropagation()
        dragRef.current.suppressClick = false
      }

      const onWheel = (event) => {
        event.preventDefault()
        moveCanvas(positionRef.current.x - event.deltaX, positionRef.current.y - event.deltaY, 0)
      }

      viewport.addEventListener('pointerover', onPointerOver)
      viewport.addEventListener('pointerdown', onPointerDown)
      viewport.addEventListener('pointermove', onPointerMove)
      viewport.addEventListener('pointerup', onPointerUp)
      viewport.addEventListener('pointercancel', onPointerUp)
      viewport.addEventListener('wheel', onWheel, { passive: false })
      viewport.addEventListener('click', onClick, true)

      return () => {
        viewport.removeEventListener('pointerover', onPointerOver)
        viewport.removeEventListener('pointerdown', onPointerDown)
        viewport.removeEventListener('pointermove', onPointerMove)
        viewport.removeEventListener('pointerup', onPointerUp)
        viewport.removeEventListener('pointercancel', onPointerUp)
        viewport.removeEventListener('wheel', onWheel)
        viewport.removeEventListener('click', onClick, true)
      }
    }, viewportRef)

    return () => context.revert()
  }, [])

  return (
    <section className="selected-work-page" ref={viewportRef} aria-label="Selected work canvas">
      <div className="selected-work-intro" data-reveal>
        <p className="eyebrow">Selected work</p>
        <h1>Move through<br />the work.</h1>
        <p className="canvas-instructions">Point to a folder to focus the work<br />Open a folder to view the work</p>
      </div>
      <div className="canvas-status" aria-hidden="true"><span />Point to folder / Open folder</div>
      <div className="project-canvas" ref={canvasRef} data-reveal>
        {projects.map((project, index) => {
          return (
            <Link
              key={project.slug}
              to={`/projects/${project.slug}`}
              className={`project-card project-${index + 1}`}
            >
              <span className="project-folder-tab" aria-hidden="true" />
              <img src={project.image} alt={project.title} loading="lazy" decoding="async" />
              <div className="project-meta">
                <span>{project.category}</span>
                <strong>{project.title}</strong>
                <span>{project.year}</span>
              </div>
            </Link>
          )
        })}
      </div>
    </section>
  )
}

export default SelectedWorkPage
