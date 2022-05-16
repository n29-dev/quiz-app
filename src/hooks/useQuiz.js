import { useEffect, useState } from "react";
import {getDatabase, get, query, orderByKey, ref,} from 'firebase/database';

export default function useQuiz(videoId) {

    const [questions, setQuestions] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        const db = getDatabase();
        const quizRef = ref(db, `quiz/${videoId}/questions`);
        const quizQuery = query(quizRef, orderByKey());

        async function getVideos () {
            try{
                setLoading(true);
                const snapshot = await get(quizQuery);
                if(snapshot.exists()){
                    setQuestions((preState) => {
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

        getVideos();
        
    }, [videoId])
    
    return {
        questions,
        loading,
        error,
    }

};