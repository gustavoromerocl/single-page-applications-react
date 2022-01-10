import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

let Thumbnail = styled.div`
    padding-bottom:177%;
    margin-bottom:${({ theme }) => theme.dims.margin.normal};
    background-image: ${({ video }) => `url(${video.thumbnail})` };
    background-size: cover;
    background-position: center;
`;

const VideoThumbnail = ({video}) => {
    return (
        <Link to={`/videos/${video.id}`}>
            <Thumbnail video={video} ></Thumbnail>
        </Link>
    )
}

export default VideoThumbnail
