import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams} from 'react-router-dom'
import { getVideo } from '../store/videos';
import Player from './Player';

export const VideoShow = () => {
    let { id } = useParams();
    let dispatch = useDispatch();
    let video = useSelector(state => state.videos.currentVideo);

    useEffect(() => {
        dispatch(
            getVideo(id)
        )
    }, [])
    return (
        <div>
            {   
                video &&         
                <div key={video.id}>
                    <h2>{video.title}</h2>
                    <Player video={video}/>
                </div>
            }
        </div>
    )
}
