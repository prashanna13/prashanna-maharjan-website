import { Link } from 'react-router-dom'
import './ContentPage.css'

function NotFoundPage() {
  return (
    <section className="content-page section-pad">
      <div className="container narrow not-found-page">
        <p className="eyebrow">404 / Page not found</p>
        <h1 className="page-title">This frame is missing.</h1>
        <div className="text-block">
          <p>The page you requested does not exist or may have moved.</p>
        </div>
        <Link className="legal-back-link" to="/">Return to selected work</Link>
      </div>
    </section>
  )
}

export default NotFoundPage
