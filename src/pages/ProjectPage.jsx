import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { projects } from '../data/projects'
import './ProjectPage.css'

function ProjectPage() {
  const [lightboxImage, setLightboxImage] = useState(null)
  const project = useMemo(() => {
    const slug = window.location.pathname.split('/').filter(Boolean).pop()
    return projects.find((item) => item.slug === slug) || projects[0]
  }, [])

  useEffect(() => {
    if (!lightboxImage) return undefined

    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setLightboxImage(null)
      if (event.key === 'ArrowLeft') {
        setLightboxImage((current) => current ? { ...current, index: (current.index - 1 + current.total) % current.total } : current)
      }
      if (event.key === 'ArrowRight') {
        setLightboxImage((current) => current ? { ...current, index: (current.index + 1) % current.total } : current)
      }
    }

    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', closeOnEscape)

    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', closeOnEscape)
    }
  }, [lightboxImage])

  if (!project) return null
  const lightboxProjectSlugs = ['wedding', 'analog', 'street', 'mato', 'ashapuri', 'culture', 'sanish-weds-shahista']
  const isWeddingProject = project.slug === 'wedding'
  const isLightboxProject = lightboxProjectSlugs.includes(project.slug)
  const projectImages = [project.image, ...project.gallery, ...(project.landscapeGallery || [])]

  const renderImage = (image, alt, imageIndex, className = '') => {
    if (!isLightboxProject) {
      return <img className={className} src={image} alt={alt} loading={imageIndex === 0 ? 'eager' : 'lazy'} decoding="async" />
    }

    return (
      <button
        className={`project-image-button ${className}`}
        type="button"
        onClick={() => setLightboxImage({ index: imageIndex, total: projectImages.length })}
        aria-label={`View ${alt} in full screen`}
      >
        <img src={image} alt={alt} loading={imageIndex === 0 ? 'eager' : 'lazy'} decoding="async" />
      </button>
    )
  }

  return (
    <article className={`project-page section-pad ${isWeddingProject ? 'wedding-project-page' : ''}`}>
      <div className="container">
        <header className="project-header">
          <p className="eyebrow">{project.category}</p>
          <h1 className="page-title">{project.title}</h1>
          <div className="project-meta-row">
            <span>{project.discipline}</span>
            <span>{project.year}</span>
            <span>{project.summary}</span>
          </div>
        </header>

        <div className={`hero-shot ${isLightboxProject ? 'hero-shot-clickable' : ''}`}>
          {renderImage(project.image, project.title, 0)}
        </div>

        <div className="project-body">
          <div className="project-description">
            <p>{project.description}</p>
            {project.externalUrl ? (
              <a className="project-external-link" href={project.externalUrl} target="_blank" rel="noreferrer">
                Open live website <span aria-hidden="true">↗</span>
              </a>
            ) : null}
          </div>

          <dl className="project-details">
            {project.credits.map((credit) => (
              <div key={credit.label}>
                <dt>{credit.label}</dt>
                <dd>{credit.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="project-gallery">
          {project.gallery.map((image, index) => (
            <div key={`${project.slug}-${index}`}>
              {renderImage(image, `${project.title} gallery ${index + 1}`, index + 1)}
            </div>
          ))}
        </div>

        {project.landscapeGallery?.length ? (
          <div className="project-gallery project-gallery-landscape">
            {project.landscapeGallery.map((image, index) => (
                <div key={`${project.slug}-landscape-${index}`}>
                  {renderImage(image, `${project.title} landscape gallery ${index + 1}`, project.gallery.length + index + 1)}
                </div>
              ))}
          </div>
        ) : null}

        {project.video ? (
          <div className="project-video">
            <video controls poster={project.image}>
              <source src={project.video} type="video/mp4" />
            </video>
          </div>
        ) : null}

        <div className="project-tech">
          {project.technologies.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>

        <nav className="project-footer-nav">
          <Link to="/" className="nav-prev"><span>Previous</span><strong>Home</strong></Link>
          <Link to="/" className="nav-next"><span>Next</span><strong>Selected Works</strong></Link>
        </nav>
      </div>
      {lightboxImage ? (
        <div
          className="project-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Full-size wedding photograph"
          onClick={() => setLightboxImage(null)}
        >
          <button
            className="project-lightbox-close"
            type="button"
            onClick={() => setLightboxImage(null)}
            aria-label="Close full-size image"
          >
            <span aria-hidden="true">×</span>
          </button>
          <button
            className="project-lightbox-control project-lightbox-prev"
            type="button"
            onClick={(event) => {
              event.stopPropagation()
              setLightboxImage((current) => ({ ...current, index: (current.index - 1 + current.total) % current.total }))
            }}
            aria-label="Previous wedding photograph"
          >
            <span aria-hidden="true">←</span>
          </button>
          <img
            src={projectImages[lightboxImage.index]}
            alt={`${project.title} photograph ${lightboxImage.index + 1}`}
            decoding="async"
            onClick={(event) => event.stopPropagation()}
          />
          <button
            className="project-lightbox-control project-lightbox-next"
            type="button"
            onClick={(event) => {
              event.stopPropagation()
              setLightboxImage((current) => ({ ...current, index: (current.index + 1) % current.total }))
            }}
            aria-label="Next wedding photograph"
          >
            <span aria-hidden="true">→</span>
          </button>
          <span className="project-lightbox-count" aria-live="polite">
            {lightboxImage.index + 1} / {lightboxImage.total}
          </span>
        </div>
      ) : null}
    </article>
  )
}

export default ProjectPage
