import { sitePath } from '../lib/site'

export default function CertificationList({ certs = [] }) {
  return (
	<ul>
	  {certs.map((c, i) => (
		<li key={i}>
		  <a href={sitePath(c.file)} target="_blank" rel="noreferrer">{c.title}</a> — {c.issuer}
		</li>
	  ))}
	</ul>
  )
}
