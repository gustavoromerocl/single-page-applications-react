import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components';
import { loadVideosForUser } from '../store/videos';
import { AppButton as AppButtonTemplate, SmallContainer } from '../theme';
import Player from '../videos/Player';
import VideoThumbnail from './Thumbnail';

let ProfileHeader = styled.header`
    display: grid;
    grid-template-columns: repeat(6, minmax(auto,1fr));
    grid-template-rows: 100px;
    grid-template-areas: "imageContainer imageContainer imageContainer imageContainer imageContainer imageContainer"
                        "userInfo userInfo userInfo userInfo userInfo userInfo"
                        "following following followers followers likes likes"
                        "edit edit edit logOut logOut logOut";
    text-align: center;

    padding: ${({theme}) => theme.dims.padding.largePadding };
    & .image-container{
    grid-area: imageContainer;
    }
    & .info-container{
    grid-area: userInfo;
    }
`;

let ProfileImage = styled.img`
    max-height: 100%;
    border-radius: 50%;
    border: 0.5em double ${({theme}) => theme.colors.gray }
`;

let Pill = styled.span`
    background-color: ${({ theme }) => theme.colors.gray};
    border-radius: ${({ theme }) => theme.dims.borderRadius.normal};
    font-size: ${({ theme }) => theme.dims.fonts.small};
    padding: ${({ theme }) => theme.dims.padding.largePadding };
    display:inline-block;
`;

//el área se pasa mediante los props para poder asignar distintos nombres al mismo componente
let Counter = styled.div`
  grid-area: ${ ({area}) => area }; 
  & .number{
    font-size: ${({theme}) => theme.dims.fonts.medium };
    display:block;
  }
  & .description{
    color: ${({theme}) => theme.colors.silver }
  }
`;

let AppButton = styled(AppButtonTemplate)`
  grid-area: edit;
  display:block;
  width:100%;
`;

let VideosContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3,minmax(auto,1fr));
`;

export const Profile = () => {
    let user = useSelector(state => state.user.user);
    let videos = useSelector(state => state.videos.data.videos);
    let dispatch = useDispatch();

    useEffect(() => {
        dispatch(
            loadVideosForUser()
        )
    }, [])

    return (
        <SmallContainer>
            <ProfileHeader>
                <div className='image-container'>
                    <ProfileImage src="/avatar.jpg"/>
                </div>
                <div className='info-container'>
                    <p><strong>@{user.username}</strong></p>
                    <Pill>{ videos.length } videos </Pill>
                </div>
                <Counter area="following">
                    <p className="number">0</p>
                    <p className="description">Siguiendo</p>
                </Counter>
                <Counter area="followers">
                    <p className="number">0</p>
                    <p className="description">Seguidores</p>
                </Counter>
                <Counter area="likes">
                    <p className="number">0</p>
                    <p className="description">Likes</p>
                </Counter>
                <AppButton className='button'>Editar</AppButton>
                <AppButton className='button'>Cerrar sesión</AppButton>
            </ProfileHeader>
            <VideosContainer>
                {
                    videos && videos.map((video, index) => <VideoThumbnail video={video} key={index} />)
                }
            </VideosContainer>
        </SmallContainer>
    )
}
