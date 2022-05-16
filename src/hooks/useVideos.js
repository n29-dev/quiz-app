import { useEffect, useState } from "react";
import {getDatabase, get, query, orderByKey, ref, startAt, limitToFirst} from 'firebase/database';

export default function useVideos(startPoint = 0) {

    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false)
    const [hasMore, setHasMore] = useState(true);

    useEffect(() => {

        const db = getDatabase();
        const videosRef = ref(db, 'videos');
        const videosQuery = query(videosRef, orderByKey(), startAt('' + startPoint), limitToFirst(8));

        async function getVideos () {

            try{
                setLoading(true);
                const snapshot = await get(videosQuery);
                setLoading(false);
                if(snapshot.exists()){
                    setVideos((preState) => {
                        return [...preState, ...Object.values(snapshot.val())]
                    })
                }else{
                    setHasMore(false)
                }

            } catch (err) {
                setLoading(false)
                setError(true)
                console.log(err)
            }
        }

        getVideos();
    }, [startPoint])
    
    return {
        videos,
        loading,
        error,
        hasMore
    }

};