import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import './About.css'

export default function About() {
  const { t } = useTranslation()
  const skills = t('about.skills', { returnObjects: true })

  return (
    <main className="about-page">
      <div className="container">
        <div className="about-grid">
          <div className="about-photo-col">
            <div className="about-photo-placeholder">
              <span>J</span>
            </div>
          </div>
          <div className="about-content-col">
            <h1 className="section-title">{t('about.title')}</h1>
            <p className="about-bio">{t('about.bio_1')}</p>
            <p className="about-bio">{t('about.bio_2')}</p>

            <div className="about-skills">
              <h3 className="skills-title">{t('about.skills_title')}</h3>
              <div className="skills-grid">
                {skills.map(skill => (
                  <span key={skill} className="skill-item">{skill}</span>
                ))}
              </div>
            </div>

            <a href="#" className="btn btn-primary resume-btn">{t('about.resume')} ↓</a>
          </div>
        </div>
      </div>
    </main>
  )
}
