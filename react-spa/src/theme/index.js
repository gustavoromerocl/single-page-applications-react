import styled from 'styled-components';

export default {
    colors: {
        white: "#ffffff",
        dark: "#27212e",
        black: "#373737",
        accent: "#E53251",
        gray: "#F2F2F2",
        blue: "#67E7E2",
        silver: "#716385",
    },
    dims: {

    }
}

let LayoutContainer = styled.div`
    display: grid;
    min-height: 100vh;
    grid-template-rows: auto minmax(0,1fr) auto;

    & nav{
        height: 100px;
        background-color: ${({theme}) => theme.colors.dark };
    }

    & footer{
        height: 100px;
        background-color: ${({theme}) => theme.colors.dark };
    }
`;

export let Layout = (props) => {
    return <LayoutContainer>
        <nav></nav>
        <main>
            {props.children}
        </main>
        <footer></footer>
    </LayoutContainer>
}