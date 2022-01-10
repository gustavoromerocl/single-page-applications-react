import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams} from 'react-router-dom'
import { getVideo } from '../store/videos';
import { Video } from './Video';
import { SmallContainer } from '../theme';

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
            <SmallContainer>
                {   
                    video && <Video video={video}></Video>
                }
            </SmallContainer>
        </div>
    )
}
