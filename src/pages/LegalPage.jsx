import { Link, useLocation } from 'react-router-dom'
import './ContentPage.css'

const legalContent = {
  '/privacy-policy': {
    label: 'Privacy Policy',
    title: 'Your privacy matters.',
    paragraphs: [
      'This website collects only the information you choose to share through the contact form or direct communication.',
      'Information submitted through the contact form is used to respond to your enquiry and is not sold or shared for advertising purposes.',
      'If you have questions about how your information is handled, please get in touch at prashanamahan13@gmail.com.'
    ]
  },
  '/terms': {
    label: 'Terms',
    title: 'A clear agreement.',
    paragraphs: [
      'The content on this website is provided for portfolio and informational purposes.',
      'Project images, writing, and other creative work remain the property of their respective owners unless otherwise stated. Please ask before reproducing or using any work.',
      'By using this website, you agree to use its content lawfully and respectfully.'
    ]
  }
}

function LegalPage() {
  const { pathname } = useLocation()
  const content = legalContent[pathname] || legalContent['/privacy-policy']

  return (
    <section className="content-page section-pad">
      <div className="container narrow legal-page">
        <p className="eyebrow">{content.label}</p>
        <h1 className="page-title">{content.title}</h1>
        <div className="text-block">
          {content.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
        <Link className="legal-back-link" to="/homepage">Back to home</Link>
      </div>
    </section>
  )
}

export default LegalPage
