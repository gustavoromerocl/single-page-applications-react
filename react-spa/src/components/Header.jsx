import React from 'react'
import styled from 'styled-components'
import { Title } from '../theme';


//Cuando se exporta un componente con styled-components, es necesario pasarle la clase generada al contenedor mediante las props
const Header = (props) => {
    return (
        <header className={props.className}>
            <img src='logo.svg' height={45}></img>
            <Title>TikTak</Title>
        </header>
    )
}

export default styled(Header)`
    text-align: center;
    padding: 1em 0;
    & img{
        vertical-align: middle;
    }
`;
