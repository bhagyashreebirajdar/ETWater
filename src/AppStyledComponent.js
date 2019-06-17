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

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`

// A new component based on Button, but with some override styles
const RedButton = styled(Button)`
  color: tomato;
  border-color: tomato;
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
      <Button>Normal Button</Button>
      <RedButton>Red Button</RedButton>
      <Button primary>Primary</Button>
    </AppWrapper>
  );
}

export default AppStyledComponent;
