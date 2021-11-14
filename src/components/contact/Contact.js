import "./contact.scss"
import Button from '@mui/material/Button';
import { useState } from 'react'

export default function Contact() {

	const [message, setMessage] = useState(false)

	const handleSubmit = (e)=>{
		e.preventDefault();
		setMessage(true)
	}

	return (
		<div className="contact" id="contact">
			<div className="left">
			</div>
			<div className="right">
				<h2>Send me a message.</h2>
				<form onSubmit={handleSubmit}>
					<input type="text" placeholder="Email"/>
					<textarea placeholder="Message"></textarea>
					<Button variant="contained" type="submit">Send</Button>
					{message && <span>Thanks for reaching out!</span>}
				</form>
			</div>
		</div>
	)
}