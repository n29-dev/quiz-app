import classes from '../Styles/Videos.module.css';
import Video from './Video';
import useVideos from '../hooks/useVideos';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useState } from 'react';

export default function Videos () {

    const [itemCount, setItemCount] = useState(1);

    const {videos, loading, error, hasMore} = useVideos(itemCount);

    return (
        <div className={classes.videos}>
            <InfiniteScroll dataLength={videos.length} hasMore={hasMore} next={() =>  setItemCount((prev) => prev + 8)}>
                {videos.map(item => <Video key={item.youtubeID} title={item.title} noq={item.noq} videoId={item.youtubeID}/>)}
                {error && <div>There was an error!</div>}
                {loading && <div>Loading...</div>}
                {!loading && videos.length === 0 && <div>No data found!</div>}
            </InfiniteScroll>
        </div>
    );
};