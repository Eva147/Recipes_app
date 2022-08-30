import { useState, useEffect } from 'react';
// firestore db
import {db} from '../firebase/config';
import {collection, onSnapshot} from 'firebase/firestore';

// use 'c' for collection
export const useCollection = (c) => {
    const [documents, setDocuments] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState(false)

    useEffect(() => {
        setIsPending(true)
        let ref = collection(db, c)
        const unsub = onSnapshot(ref, (snapshot) => {
            let results = []
            snapshot.docs.forEach(doc => {
                results.push({...doc.data(), id: doc.id})
            })
            setDocuments(results)
            setIsPending(false)
        }, (error) => {
            setError(error.message)
            setIsPending(false)
        })

        return () => unsub()
    }, [c])
    return {documents, isPending, error}
}