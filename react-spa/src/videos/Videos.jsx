import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { likeVideo } from '../store/likes';
import { loadVideos } from '../store/videos';
import { SmallContainer } from '../theme';
import { Video } from './Video';

let Videos = (props) => {
    let videosState = useSelector(state => state.videos);
    let dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(
            loadVideos()
        )
    },[]);

    let doLike = (videoId) => {
        dispatch(
            likeVideo(videoId)
        )
    }

    return (
        <div>
            <SmallContainer>
                    {videosState.data.videos.map(video => (
                        <Video video={video} doLike={doLike}/>
                    ))
                    }
            </SmallContainer>
        </div>
    )
}

export default Videos;