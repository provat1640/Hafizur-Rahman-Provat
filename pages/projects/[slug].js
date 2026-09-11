import Layout from '../../components/Layout'
import projects from '../../data/projects.json'

export async function getStaticPaths() {
  const paths = projects.map((p) => ({ params: { slug: p.slug } }))
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const project = projects.find((p) => p.slug === params.slug) || null
  return { props: { project } }
}

export default function ProjectPage({ project }) {
  if (!project) return <Layout><p>Project not found</p></Layout>

  return (
	<Layout title={`${project.title} - Project`}>
	  <h2>{project.title}</h2>
	  <img src={project.image || '/placeholder.svg'} alt={project.title} style={{ maxWidth: '100%', height: 'auto' }} />
	  <p>{project.description}</p>
	  {project.link && (
		<p>
		  <a href={project.link} target="_blank" rel="noreferrer">Visit project</a>
		</p>
	  )}
	</Layout>
  )
}
