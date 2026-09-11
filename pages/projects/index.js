import Layout from '../../components/Layout'
import projects from '../../data/projects.json'
import ProjectCard from '../../components/ProjectCard'

export default function Projects() {
  return (
	<Layout title="Projects - Portfolio">
	  <h2>Projects</h2>
	  <div className="grid">
		{projects.map((p) => (
		  <ProjectCard key={p.slug} project={p} />
		))}
	  </div>
	</Layout>
  )
}
