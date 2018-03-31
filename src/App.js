import React, { Component } from 'react';
import styled from 'styled-components';
import { ArrowLeft, ArrowRight, Menu } from 'react-feather';
import { SideNavPage, SideNavShadowbox, SideNav } from './components/SideNav';

const AppContainer = styled.div``;
const MainContainer = styled.div``;

class App extends Component {
  constructor() {
    super();
    this.generateNewSideNavPage = this.generateNewSideNavPage.bind(this);
    this.state = {
      sideNavOpen: true,
      sideNavStack: [this.generateNewSideNavPage({ disableBack: true })],
    };
  }

  navigateForward = () =>
    this.setState(state => ({
      sideNavStack: [...state.sideNavStack, this.generateNewSideNavPage()],
    }));

  navigateBackward = () =>
    this.setState(state => ({
      sideNavStack: this.state.sideNavStack.slice(0, -1),
    }));

  render() {
    const { sideNavOpen, sideNavStack } = this.state;
    return (
      <AppContainer>
        <SideNavShadowbox
          onClick={() => this.closeSideNav()}
          visible={sideNavOpen}
        >
          <SideNav open={sideNavOpen}>{sideNavStack}</SideNav>
        </SideNavShadowbox>
        <MainContainer>
          <Menu onClick={() => this.openSideNav()} />
        </MainContainer>
      </AppContainer>
    );
  }

  openSideNav() {
    this.setState({
      sideNavOpen: true,
    });
  }

  closeSideNav() {
    this.setState({
      sideNavOpen: false,
    });
  }

  // util fn
  sideNavCount = 0;
  generateNewSideNavPage = ({ disableBack } = { disableBack: false }) => (
    <SideNavPage
      style={{ background: gradients[this.sideNavCount % 4] }}
      key={++this.sideNavCount}
    >
      {!disableBack ? (
        <ArrowLeft onClick={() => this.navigateBackward()} />
      ) : null}
      <ArrowRight onClick={() => this.navigateForward()} />
    </SideNavPage>
  );
}

const gradients = [
  'linear-gradient(#ed6153, #ed6153 50%, #f9b16d)',
  'linear-gradient(#ad5389, #ad5389 50%, #3c1053)',
  'linear-gradient(#108dc7, #108dc7 50%, #ef32d9)',
  'linear-gradient(#1c92d2, #ed6153 50%, #ed6153)',
];

export default App;
