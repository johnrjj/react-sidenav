import React, { Component } from 'react';
import styled from 'styled-components';
import { ArrowLeft, ArrowRight } from 'react-feather';
import { SideNavPage, SideMenuShadowboxContainer, SideMenu } from './components/SideNav';

const AppContainer = styled.div``;

class App extends Component {
  constructor() {
    super();
    this.state = {
      stack: [this.generateNewSideNavPage()],
    };
  }

  navigateForward = () =>
    this.setState(state => {
      return { stack: [this.generateNewSideNavPage(), ...state.stack] };
    });

  navigateBackward = () =>
    this.setState(state => {
      const [, ...xs] = this.state.stack;
      return { stack: [...xs] };
    });

  render() {
    return (
      <AppContainer>
        <SideMenuShadowboxContainer visible>
          <SideMenu>{[...this.state.stack].reverse()}</SideMenu>
        </SideMenuShadowboxContainer>
      </AppContainer>
    );
  }

  // util fn
  sideNavCount = 0;
  generateNewSideNavPage = () => (
    <SideNavPage style={{ background: gradients[this.sideNavCount % 4] }} key={++this.sideNavCount}>
      <ArrowLeft onClick={() => this.navigateBackward()} />
      <ArrowRight onClick={() => this.navigateForward()} />
    </SideNavPage>
  );
}

const gradients = [
  'linear-gradient(#ed6153, #ed6153 50%, #f9b16d)',
  'linear-gradient(#ad5389, #ad5389 50%, #3c1053)',
  'linear-gradient(#108dc7, #108dc7 50%, #ef32d9)',
  'linear-gradient(#1c92d2, #ed6153 50%, #f2fcfe)',
];

export default App;