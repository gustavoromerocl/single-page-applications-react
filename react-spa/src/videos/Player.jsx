/* npm install @api.video/player-sdk */
/* https://docs.api.video/ */
import React from 'react';
import { PlayerSdk } from '@api.video/player-sdk';
import { useEffect } from 'react';
import { useRef } from 'react';


let Player = ({video}) => {
    let player = useRef(null);
    useEffect(() => {
        if(!player.current){
            player.current = new PlayerSdk(`#app-player-${video.id}`);
            console.log(player.current);
            player.current.mute();
            player.current.play();
            player.current.setLoop(true);
        }
    },[])
    return (
        <div>
            <iframe 
                title={video.title}
                src={`https://embed.api.video/vod/${video.remoteVideoId}#autoplay;loop;hideControls`}
                frameBorder={0}
                width={'100%'}
                height={'100%'}
                scrolling='none'
                allowFullScreen={true}
                id={`app-player-${video.id}`}
            >
            </iframe>
        </div>
    )
}

export default Player;