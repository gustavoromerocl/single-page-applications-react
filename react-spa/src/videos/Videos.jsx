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



    return (
        <div>
            <SmallContainer>
                    {videosState.data.videos.map((video, index) => (
                        <Video video={video} index={index}/>
                    ))
                    }
            </SmallContainer>
        </div>
    )
}

export default Videos;