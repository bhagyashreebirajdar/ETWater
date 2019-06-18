import React from 'react';
import logo from './logo.svg';
import { AppWrapper, AppHeader, AppIntro, AppLogo, AppTitle, Button, RedButton, Input } from './StyledApp';

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
      <br/>
      <Input defaultValue="redFont" type="text" />
      <Input defaultValue="pupleFont" type="text" inputColor="rebeccapurple" />
    </AppWrapper>
  );
}

export default AppStyledComponent;
