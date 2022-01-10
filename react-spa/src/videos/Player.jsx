/* npm install @api.video/player-sdk */
/* https://docs.api.video/ */
import React from 'react';
import { PlayerSdk } from '@api.video/player-sdk';
import { useEffect } from 'react';
import { useRef } from 'react';
import styled from 'styled-components';

let Iframe = styled.iframe`
  position: absolute;
  width: 100%;
  height: 100%;
  top:0px;
  left:0px;
`;

let Player = ({video}) => {
    let player = useRef(null);
    useEffect(() => {
        if(!player.current){
            player.current = new PlayerSdk(`#app-player-${video.id}`);
            //console.log(player.current);
            player.current.mute();
            player.current.play();
            player.current.setLoop(true);
        }
    },[])
    return (
        <div>
            <Iframe 
                title={video.title}
                src={`https://embed.api.video/vod/${video.remoteVideoId}#autoplay;loop;hideControls`}
                frameBorder={0}
                width={'100%'}
                height={'100%'}
                scrolling='none'
                allowFullScreen={true}
                id={`app-player-${video.id}`}
            >
            </Iframe>
        </div>
    )
}

export default Player;