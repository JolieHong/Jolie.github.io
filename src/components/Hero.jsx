import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import './Hero.css'

export default function Hero() {
  const { t } = useTranslation()

  return (
    <section className="hero">
      <div className="container hero-inner">
        <div className="hero-badge">{t('hero.role')}</div>
        <h1 className="hero-title">
          {t('hero.greeting')}
          <span className="hero-dot">.</span>
        </h1>
        <p className="hero-tagline">{t('hero.tagline')}</p>
        <div className="hero-actions">
          <a href="#work" className="btn btn-primary">{t('hero.cta_work')}</a>
          <Link to="/contact" className="btn btn-secondary">{t('hero.cta_contact')}</Link>
        </div>
        <div className="hero-scroll-hint">
          <span />
        </div>
      </div>
    </section>
  )
}
