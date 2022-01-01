import React from 'react'
import styled from 'styled-components'

//string templates o tagged templates
let Example = styled.div` 
    background-color: red;
    height: 200px;
    transition: all 2s;
`;

export const Home = () => {
    return (
        <div>
            <Example>
                <h1>Hola mundo</h1>
            </Example>
        </div>
    )
}
