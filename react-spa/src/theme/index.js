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
      widths: {
        small: '30em',
        forms: '17.5em'
      },
      padding: {
        largePadding: '0.8em 1.2em',
        mediumPadding: '2em',
        tallPadding: '3em 1.5em'
      },
      margin: {
        small: '0.5em',
        intersection: '1em',
        normal: '2em',
        inline: '0.5ch'
      },
      borderRadius: {
        small: '0.4em',
        normal: '0.8em'
      },
      fonts: {
        small: "0.8em",
        medium: "1.5em",
        title: '3em'
      },
      circle: {
        small: '1em',
        medium: '3em',
        big: '6em'
      },
    },
    shadows: {
      depth1: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      depth2: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      depth3: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
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

export let SmallContainer = styled.div`
    width: ${({theme}) => theme.dims.widths.small };
    max-width: 100vw;
    margin: 0 auto;
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