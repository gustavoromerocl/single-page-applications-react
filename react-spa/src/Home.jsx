import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'

//string templates o tagged templates
let Example = styled.div` 
    height: 200px;
    transition: all 2s;
    padding: 50px
`;

let Button = styled.button`
    border: solid 1px red;
    background-color: ${({primary}) => primary ? 'red' : 'transparent'};
    outline: 0;
    font-size: 1em;
    box-shadow: 2px 2px 2px rgba(0,0,0,0.9);
`;

let InpuText = styled.input`
    border: solid 1px;
    border-color: ${({ withError }) => withError ? 'red' : 'green' };
`;

let PrimaryButton = styled(Button)`
    background-color: blue;
    border: 0;
`;

let AppLink = styled(Link)`
    text-decoration: underline;
    font-weight: bold;
    text-transform: uppercase;
`;

export const Home = () => {
    return (
        <div>
            <Example>
                <h1>Hola mundo</h1>
                <InpuText ></InpuText>
                <Button >click me</Button>
                <PrimaryButton>Extended button</PrimaryButton>
                <AppLink to="/videos">ir a Videos</AppLink>
            </Example>
        </div>
    )
}
