import Layout from '../components/Layout'
import { sitePath } from '../lib/site'

export default function Resume() {
  return (
	<Layout title="Resume - Portfolio">
		<h2>Resume</h2>
		<p>The resume content is rendered below. You can also download a plain-text version:</p>
		<pre style={{ whiteSpace: 'pre-wrap', background: '#f7f7f7', padding: '1rem', borderRadius: 6 }}>
		{`Hafizur Rahman

Contact
01763676326 (Mobile)
vatpro8@gmail.com
https://www.linkedin.com/in/hafizur
https://github.com/provat1640

Top Skills
GitHub
Maven
Git

Certifications
Netcom Learning AgentX Certification
Software Architecture & System Design Foundations
Go Edu - Developing your employability skills for sustainable career
Arabic Language Course
Introduction to Modern Database Systems

Education
Daffodil International University-DIU
B.sc, Software Engineering · (July 2023 - July 2027)

British Council
Professional English course, Communication and Media Studies · (February 2024 - April 2024)

Daffodil International University-DIU
Bachelor of Science, Computer Software Engineering`}
	  </pre>

	  <p>
		<a href={sitePath('resume.txt')} download>Download resume (text)</a>
	  </p>
	  <h3>Education</h3>
	  <ul>
		<li>Daffodil International University - B.sc, Software Engineering (July 2023 - July 2027)</li>
		<li>British Council - Professional English course, Communication and Media Studies (Feb 2024 - Apr 2024)</li>
	  </ul>
	</Layout>
  )
}
