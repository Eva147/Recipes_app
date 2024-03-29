import { useState } from 'react'
import { useSignup } from '../../hooks/useSignup'

// styles
import './signup.css'

export default function Signup() {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const { signup, isPending, error } = useSignup()

	const handleSubmit = (e) => {
		e.preventDefault()
		signup(email, password).then(() => {
			setEmail('')
			setPassword('')
		})
	}

	return (
		<form onSubmit={handleSubmit} className="auth-form">
			<div className='signup-header'>
				<h2>Sign up</h2>
			</div>
			<label>
				<span>email:</span>
				<input
					required
					type="email"
					onChange={(e) => setEmail(e.target.value)}
					value={email}
				/>
			</label>
			<label>
				<span>password:</span>
				<input
					required
					type="password"
					onChange={(e) => setPassword(e.target.value)}
					value={password}
				/>
			</label>
			{!isPending && <button className="btn">Sign up</button>}
			{isPending && <button className="btn" disabled>loading</button>}
			{error && <div className="error">{error}</div>}
		</form>
	)
}
