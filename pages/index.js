import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard'
import projects from '../data/projects.json'
import { sitePath } from '../lib/site'

export default function Home() {
  return (
	<Layout title="Home - Portfolio">
	  <section style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
		<img src={sitePath('images/profile.jpg')} alt="Profile" style={{ width: 180, height: 240, objectFit: 'cover', borderRadius: 6 }} />
		<div>
		  <h2>Hafizur Rahman</h2>
		  <p>Software Engineering student at Daffodil International University. Passionate about software architecture, backend systems, and professional development.</p>
		  <p>
			<strong>Contact:</strong> <a href="mailto:vatpro8@gmail.com">vatpro8@gmail.com</a> • <a href="tel:+8801763676326">01763676326</a>
		  </p>
		  <p>
			<a href="https://www.linkedin.com/in/hafizur" target="_blank" rel="noreferrer">LinkedIn</a>
		  </p>
		</div>
	  </section>

	  <section>
		<h2>Projects</h2>
		<div className="grid">
		  {projects.map((p) => (
			<ProjectCard key={p.slug} project={p} />
		  ))}
		</div>
	  </section>
	</Layout>
  )
}
