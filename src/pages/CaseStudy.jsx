import { useParams, Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import './CaseStudy.css'

const PROJECT_COLORS = ['#EDE9FF', '#E8F4FF', '#E8FFF0']
const PROJECT_ICONS = ['🔍', '🛒', '💳']

export default function CaseStudy() {
  const { id } = useParams()
  const { t } = useTranslation()
  const projects = t('work.projects', { returnObjects: true })
  const idx = projects.findIndex(p => p.id === id)
  const project = projects[idx]

  if (!project) {
    return (
      <main className="case-not-found">
        <div className="container">
          <p>Project not found.</p>
          <Link to="/" className="btn btn-primary">← Back</Link>
        </div>
      </main>
    )
  }

  return (
    <main className="case-study">
      <div
        className="case-hero"
        style={{ background: PROJECT_COLORS[idx % PROJECT_COLORS.length] }}
      >
        <div className="container case-hero-inner">
          <Link to="/#work" className="back-link">← {t('nav.work')}</Link>
          <div className="case-icon">{PROJECT_ICONS[idx % PROJECT_ICONS.length]}</div>
          <div className="case-category">
            {project.category === 'research'
              ? t('work.categories.research')
              : t('work.categories.interaction')}
          </div>
          <h1 className="case-title">{project.title}</h1>
          <div className="case-tags">
            {project.tags.map(tag => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="container case-body">
        <div className="case-section">
          <h2>Overview</h2>
          <p>{project.description}</p>
        </div>
        <div className="case-placeholder">
          <p>📝 案例详情内容待填入 / Case study content coming soon</p>
        </div>
      </div>
    </main>
  )
}
