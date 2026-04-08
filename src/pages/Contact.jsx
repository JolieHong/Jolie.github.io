import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import './Contact.css'

export default function Contact() {
  const { t } = useTranslation()
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = e => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = e => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <main className="contact-page">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-info">
            <h1 className="section-title">{t('contact.title')}</h1>
            <p className="contact-subtitle">{t('contact.subtitle')}</p>

            <div className="contact-links">
              <a href="mailto:jolie@example.com" className="contact-link">
                <span className="contact-link-label">{t('contact.email_label')}</span>
                <span className="contact-link-value">jolie@example.com</span>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                <span className="contact-link-label">{t('contact.linkedin_label')}</span>
                <span className="contact-link-value">linkedin.com/in/joliehong</span>
              </a>
            </div>
          </div>

          <div className="contact-form-col">
            {sent ? (
              <div className="form-success">
                <span className="success-icon">✓</span>
                <p>{t('contact.form.send')} !</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder={t('contact.form.name')}
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder={t('contact.form.email')}
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    placeholder={t('contact.form.message')}
                    value={form.message}
                    onChange={handleChange}
                    rows={6}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary submit-btn">
                  {t('contact.form.send')}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}
