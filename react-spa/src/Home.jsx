import React from 'react'
import styled from 'styled-components'

//string templates o tagged templates
let Example = styled.div` 
    height: 200px;
    transition: all 2s;
`;

let Button = styled.button`
    border: solid 1px red;
    background-color: ${({primary}) => primary ? 'red' : 'transparent'};
`;

let InpuText = styled.input`
    border: solid 1px;
    border-color: ${({ withError }) => withError ? 'red' : 'green' };
`;

export const Home = () => {
    return (
        <div>
            <Example>
                <h1>Hola mundo</h1>
                <InpuText ></InpuText>
                <Button primary>click me</Button>
                
            </Example>
        </div>
    )
}
