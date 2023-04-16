import {useState} from 'react';
import { auth } from '../firebase/config'
import { useAuthContext } from "./useAuthContext";
import { createUserWithEmailAndPassword } from 'firebase/auth';

export const useSignup = () => {
	const [error, setError] = useState(null)
	const { dispatch } = useAuthContext()

	const signup = async (email, password) => {
		setError(null)

		createUserWithEmailAndPassword(auth, email, password)
			.then((res) => {
				dispatch({ type: 'LOGIN', payload: res.user })
			})
			.catch((err) => {
				setError(err.message)
			})
	}

	return {signup, error}
}

