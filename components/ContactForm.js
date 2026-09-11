export default function ContactForm() {
  return (
	<div>
	  <p>Phone: <a href="tel:+8801763676326">01763676326</a></p>
	  <p>Email: <a href="mailto:vatpro8@gmail.com">vatpro8@gmail.com</a></p>
	  <form action="https://formspree.io/f/yourFormId" method="POST" className="contact-form">
		<label>
		  Name
		  <input type="text" name="name" required />
		</label>
		<label>
		  Email
		  <input type="email" name="email" required />
		</label>
		<label>
		  Message
		  <textarea name="message" rows="6" required />
		</label>
		<button type="submit">Send</button>
	  </form>
		<p>If you prefer, email me at <a href="mailto:vatpro8@gmail.com">vatpro8@gmail.com</a></p>
	  <p>LinkedIn: <a href="https://www.linkedin.com/in/hafizur" target="_blank" rel="noreferrer">/in/hafizur</a></p>
	  <p>GitHub: <a href="https://github.com/provat1640" target="_blank" rel="noreferrer">github.com/provat1640</a></p>
	</div>
  )
}
