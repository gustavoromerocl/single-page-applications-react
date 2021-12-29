import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadVideos } from '../store/videos';

let Videos = (props) => {
    let videosState = useSelector(state => state.videos);
    let dispatch = useDispatch();
    useEffect(() => {
        dispatch(
            loadVideos()
        )
    },[])

    return (
        <div>
            {videosState.data.videos.map(video => (
                <div key={video.id}>
                    <h2>{video.title}</h2>
                </div>
            ))
            }
        </div>
    )
}

export default Videos;