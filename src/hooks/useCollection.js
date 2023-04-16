import { useState, useEffect, useRef } from 'react';
// firestore db
import {db} from '../firebase/config';
import {collection, onSnapshot, query, where} from 'firebase/firestore';

// use 'c' for collection
export const useCollection = (c, _q) => {
    const [documents, setDocuments] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState(false)
    // set up query
    const q = useRef(_q).current

    useEffect(() => {
        setIsPending(true)
        let ref = collection(db, c)

        if (q) {
            ref = query(ref, where(...q))
        }

        const unsub = onSnapshot(ref, (snapshot) => {
            let results = []
            snapshot.docs.forEach(doc => {
                results.push({ id: doc.id, ...doc.data(),})
            })
            console.log(`results`, results);
            setDocuments(results)
            setIsPending(false)
        }, (error) => {
            setError(error.message)
            setIsPending(false)
        })
        return () => unsub()

    }, [c, q])
    return {documents, isPending, error}
}
