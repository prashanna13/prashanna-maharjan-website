import { useState } from 'react'
import ColorBends from '../components/ColorBends'
import './ContentPage.css'
import './ContactPage.css'

function ContactPage() {
  const [result, setResult] = useState('')

  const onSubmit = async (event) => {
    event.preventDefault()
    setResult('Sending....')

    const form = event.currentTarget
    const formData = new FormData(form)
    formData.append('access_key', '75e2f172-f44f-4deb-a1dc-8b70bb013f46')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      })
      const data = await response.json()

      if (data.success) {
        setResult('Form Submitted Successfully')
        form.reset()
      } else {
        setResult('Error')
      }
    } catch {
      setResult('Error')
    }
  }

  return (
    <section className="content-page section-pad">
      <ColorBends
        className="contact-color-bends"
        colors={['#ff5c7a', '#8a5cff', '#00ffd1']}
        rotation={53}
        speed={0.2}
        scale={1}
        frequency={1}
        warpStrength={0.96}
        mouseInfluence={1}
        noise={0.38}
        parallax={1.4}
        iterations={1}
        intensity={1.5}
        bandWidth={3.5}
        transparent
        autoRotate={0}
      />
      <div className="container narrow">
        <p className="eyebrow">Contact</p>
        <h1 className="page-title">Let’s make something memorable.</h1>

        <form className="contact-form" onSubmit={onSubmit}>
          <label htmlFor="contact-name">Name</label>
          <input id="contact-name" type="text" name="name" autoComplete="name" required />

          <label htmlFor="contact-email">Email</label>
          <input id="contact-email" type="email" name="email" autoComplete="email" required />

          <label htmlFor="contact-service">What are you looking for?</label>
          <select id="contact-service" name="service" defaultValue="" required>
            <option value="" disabled>Select a service</option>
            <option value="frontend">Frontend</option>
            <option value="photography">Photography</option>
            <option value="videography">Videography</option>
          </select>

          <label htmlFor="contact-message">Message</label>
          <textarea id="contact-message" name="message" rows="6" required />

          <div className="contact-form-footer">
            <button type="submit" disabled={result === 'Sending....'}>
              {result === 'Sending....' ? 'Sending....' : 'Submit Form'}
            </button>
            <span className="contact-form-status" role="status" aria-live="polite">{result}</span>
          </div>
        </form>

        <div className="contact-links contact-page-links">
          <a href="mailto:prashanamahan13@gmail.com"><span>Email</span><span>prashanamahan13@gmail.com</span></a>
          <a href="https://www.instagram.com/_prashanna.maharjan/" target="_blank" rel="noreferrer"><span>Instagram</span><span>_prashanna.maharjan/</span></a>
          <a href="tel:+9779843958426"><span>Phone</span><span>9843958426</span></a>
          <a href="http://linkedin.com/in/prashanna-maharjan-32443b342" target="_blank" rel="noreferrer"><span>LinkedIn</span><span>LinkedIn profile</span></a>
          <a href="https://linktr.ee/Prashanna_Maharjan?utm_source=linktree_profile_share&ltsid=02e487d4-f569-411e-8860-dcb3ffe25c0d" target="_blank" rel="noreferrer"><span>More links</span><span>linktr.ee</span></a>
        </div>
      </div>
    </section>
  )
}

export default ContactPage
