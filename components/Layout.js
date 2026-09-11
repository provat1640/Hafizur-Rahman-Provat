import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/layout.module.css'

export default function Layout({ children, title = 'Portfolio' }) {
	return (
	<>
	  <Head>
		<title>{title}</title>
		<meta name="description" content="Professional portfolio of Hafizur Rahman" />
	  </Head>

	  <header className={styles.header}>
		<div className={styles.container}>
		  <h1 className={styles.logo}><Link href="/"><a>Hafizur Rahman</a></Link></h1>
		  <nav className={styles.nav}>
			<Link href="/"><a>Home</a></Link>
			<Link href="/about"><a>About</a></Link>
			<Link href="/projects"><a>Projects</a></Link>
			<Link href="/resume"><a>Resume</a></Link>
			<Link href="/contact"><a>Contact</a></Link>
		  </nav>
		</div>
	  </header>

	  <main className={styles.main}>
		<div className={styles.container}>{children}</div>
	  </main>

	  <footer className={styles.footer}>
		<div className={styles.container}>
		  © {new Date().getFullYear()} Hafizur Rahman — Built with Next.js
		</div>
	  </footer>
	</>
  )
}
