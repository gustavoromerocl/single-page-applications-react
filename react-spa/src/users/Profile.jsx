import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { loadVideosForUser } from '../store/videos';
import Player from '../videos/Player';

export const Profile = () => {
    let user = useSelector(state => state.user.user);
    let videos = useSelector(state => state.videos.data.videos);
    let dispatch = useDispatch();

    
    useEffect(() => {
        dispatch(
            loadVideosForUser()
        )
    }, [])

    console.log("hola mundo");


    return (
        <div>
            <h1>Vídeos de {user.username}</h1>
            {
                videos.map((video, index) => (
                    <div key={index}>
                        <h2>{video.title}</h2>
                        <Player video={video}/>
                    </div>
                ))
            }
        </div>
    )
}
