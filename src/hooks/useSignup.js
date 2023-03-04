import { useState, useEffect } from 'react'
import { auth, db } from '../firebase/config'
import { useAuthContext } from './useAuthContext'

export const useSignup = () => {
	const [isCancelled, setIsCancelled] = useState(false)
	const [error, setError] = useState(null)
	const [isPending, setIsPending] = useState(false)
	const { dispatch } = useAuthContext()

	const signup = async (email, password, displayName) => {
		setError(null)
		setIsPending(true)

		try {
			// signup
			const res = await auth.createUserWithEmailAndPassword(email, password)

			if (!res) {
				throw new Error('Could not complete signup')
			}

			// add display AND PHOTO_URL name to user
			await res.user.updateProfile({ displayName })

			// create a user document
			await db.collection('users').doc(res.user.uid).set({
				online: true,
				displayName,
			})

			// dispatch login action
			dispatch({ type: 'LOGIN', payload: res.user })

			if (!isCancelled) {
				setIsPending(false)
				setError(null)
			}
		}
		catch(err) {
			if (!isCancelled) {
				setError(err.message)
				setIsPending(false)
			}
		}
	}

	useEffect(() => {
		return () => setIsCancelled(true)
	}, [])

	return { signup, error, isPending }
}
