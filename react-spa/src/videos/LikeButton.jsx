import React from 'react'
import { useDispatch } from 'react-redux';
import { likeVideo } from '../store/likes';
import { ClearButton, SvgButton } from '../theme'

export const LikeButton = ({video}) => {
    let dispatch = useDispatch();

    let doLike = (videoId) => {
        dispatch(
            likeVideo(videoId)
        )
    }
    
    return (
        <ClearButton onClick={() => doLike(video.id)} >
            <SvgButton src="./heart.svg" active={video.isLikedByCurrentUser}/>
        </ClearButton>
    )
}
