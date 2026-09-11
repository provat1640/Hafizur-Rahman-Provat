import Layout from '../components/Layout'
import CertificationList from '../components/CertificationList'

const certs = [
  { title: 'Netcom Learning AgentX Certification', issuer: 'Netcom Learning', file: '/certs/netcom-agentx.pdf' },
  { title: 'Software Architecture & System Design Foundations', issuer: 'Unknown', file: '/certs/software-architecture.pdf' },
  { title: 'Developing Your Employability Skills for Sustainable Career', issuer: 'Go Edu', file: '/certs/goedu-employability.pdf' },
  { title: 'Arabic Language Course', issuer: 'Unknown', file: '/certs/arabic-course.pdf' },
  { title: 'Introduction to Modern Database Systems', issuer: 'Unknown', file: '/certs/db-systems.pdf' }
]

export default function About() {
  return (
	<Layout title="About - Portfolio">
	  <h2>About Me</h2>
	  <p>
		Hafizur Rahman — Software Engineering student at Daffodil International University (B.Sc, Software Engineering, 2023027).
		I am focused on building reliable software systems and improving my skills in software architecture, version control and build tools.
	  </p>

	  <h3>Top Skills</h3>
	  <ul>
		<li>GitHub</li>
		<li>Maven</li>
		<li>Git</li>
	  </ul>

		<h3>Strengths</h3>
	  <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
		<div style={{ flex: 1 }}>
		  <img src="/images/skills.jpg" alt="Strengths" style={{ width: '100%', height: 'auto', borderRadius: 6 }} />
		</div>
		<div style={{ flex: 1 }}>
		  <h4>Highlights</h4>
		  <ul>
			<li>HTML, CSS, JavaScript (ES6+) based web development</li>
			<li>Human-Machine Interaction and cloud infrastructure basics</li>
			<li>Software architecture and system design foundations</li>
		  </ul>
		</div>
	  </div>

	  <h3>Education</h3>
	  <ul>
		<li>Daffodil International University 023-027 — B.Sc, Software Engineering</li>
		<li>British Council 024 — Professional English course (Communication and Media Studies)</li>
	  </ul>

	  <h3>Certifications</h3>
	  <CertificationList certs={certs} />
	</Layout>
  )
}
