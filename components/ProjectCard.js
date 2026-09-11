import Link from 'next/link'
import styles from '../styles/layout.module.css'
import { sitePath } from '../lib/site'

export default function ProjectCard({ project }) {
  return (
	<article className={styles.card}>
	  <img src={sitePath(project.image || 'placeholder.svg')} alt={project.title} className={styles.cardImage} />
	  <div className={styles.cardContent}>
		<h3>{project.title}</h3>
		<p>{project.description}</p>
		<Link href={`/projects/${project.slug}`}>Read more</Link>
	  </div>
	</article>
  )
}
