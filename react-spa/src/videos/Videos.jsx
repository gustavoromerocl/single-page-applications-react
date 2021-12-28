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
            {videosState.status}
        </div>
    )
}

export default Videos;