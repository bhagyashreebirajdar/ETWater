import React from 'react';
import logo from './logo.svg';
import styled, { keyframes } from 'styled-components'

const AppWrapper = styled.div`
  text-align: center;
`
const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`
const AppHeader = styled.div`
  background-color: #222;
  height: 150px;
  padding: 20px;
  color: white;
`
const AppTitle = styled.h1`
  font-size: 1.3em;
`
const AppLogo = styled.img`
  animation: ${rotate360} infinite 120s linear;
  height: 80px;
  &:hover {
    animation: ${rotate360} infinite 1.5s linear;
  }
`
const CodeWrapper = styled.code`
  font-size: 1.3rem;
`
//Can nest selectors within the component
const AppIntro = styled.p`
  color: ${props => props.theme.dark};
  font-size: large;
  code {
    font-size: 1.3rem;
  }
`
function AppStyledComponent() {
  return (
    <AppWrapper>
      <AppHeader>
         <AppLogo src={logo} alt="logo" />
         <AppTitle>Welcome to React</AppTitle>
      </AppHeader>
      <AppIntro>
        Bootstrapped with <code>create-react-app</code>.
      </AppIntro>
      <AppIntro>
        Components styled with <code>styled-components</code>{' '}
      </AppIntro>
    </AppWrapper>
  );
}

export default AppStyledComponent;
