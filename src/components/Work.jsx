import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import './Work.css'

const PROJECT_COLORS = ['#EDE9FF', '#E8F4FF', '#E8FFF0']
const PROJECT_ICONS = ['🔍', '🛒', '💳']

export default function Work() {
  const { t } = useTranslation()
  const [activeFilter, setActiveFilter] = useState('all')

  const projects = t('work.projects', { returnObjects: true })
  const filtered = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter)

  const filters = [
    { key: 'all', label: t('work.categories.all') },
    { key: 'research', label: t('work.categories.research') },
    { key: 'interaction', label: t('work.categories.interaction') },
  ]

  return (
    <section className="work section" id="work">
      <div className="container">
        <h2 className="section-title">{t('work.title')}</h2>
        <p className="section-subtitle">{t('work.subtitle')}</p>

        <div className="work-filters">
          {filters.map(f => (
            <button
              key={f.key}
              className={`filter-btn ${activeFilter === f.key ? 'active' : ''}`}
              onClick={() => setActiveFilter(f.key)}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="work-grid">
          {filtered.map((project, idx) => {
            const originalIdx = projects.findIndex(p => p.id === project.id)
            return (
              <Link
                to={`/work/${project.id}`}
                key={project.id}
                className="project-card"
              >
                <div
                  className="project-card-visual"
                  style={{ background: PROJECT_COLORS[originalIdx % PROJECT_COLORS.length] }}
                >
                  <span className="project-icon">{PROJECT_ICONS[originalIdx % PROJECT_ICONS.length]}</span>
                  <span className="project-year">{project.year}</span>
                </div>
                <div className="project-card-body">
                  <div className="project-category-tag">
                    {project.category === 'research'
                      ? t('work.categories.research')
                      : t('work.categories.interaction')}
                  </div>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-desc">{project.description}</p>
                  <div className="project-tags">
                    {project.tags.map(tag => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>
                  <div className="project-cta">{t('work.view_case')} →</div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
