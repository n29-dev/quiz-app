import { useEffect, useState } from "react";
import {getDatabase, get, query, ref} from 'firebase/database';

export default function useAnswers(videoId) {

    const [answers, setAnswers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        const db = getDatabase();
        const answersRef = ref(db, `answers/${videoId}/questions`);
        const answersQuery = query(answersRef);

        async function getAnswers () {
            
            setLoading(true)
            try{
                const snapshot = await get(answersQuery);
                if(snapshot.exists()){
                    setAnswers((preState) => {
                        return [...preState, ...Object.values(snapshot.val())]
                    })
                }
                setLoading(false);

            } catch (err) {
                setLoading(false)
                setError(true)
                console.log(err)
            }
        }

        getAnswers();
        
    }, [videoId])
    
    return {
        answers,
        loading,
        error,
    }

};