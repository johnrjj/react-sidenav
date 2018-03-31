import React, { Component } from 'react';
import styled from 'styled-components';
import { ArrowLeft, ArrowRight, Menu, X } from 'react-feather';
import { SideNavPage, SideMenuShadowbox, SideMenu } from './components/SideNav';
import posed, {PoseGroup} from 'react-pose';

const AppContainer = styled.div``;
const MainContainer = styled.div``;

const FadeIn = posed.li({
  enter: { opacity: 1 },
  exit: { opacity: 0.1 }
})

// const FadeIn = posed.div({
//   enter: { x: '50%' },
//   exit: { x: '120%' },
// });

class App extends Component {
  constructor() {
    super();
    this.state = {
      sideNavOpen: true,
      sideNavStack: [this.generateNewSideNavPage({ hideBack: true })],
    };
    // setTimeout(() => this.setState({ sideNavOpen: false}), 1000)
  }

  navigateForward = () =>
    this.setState(state => ({
      sideNavStack: [...state.sideNavStack, this.generateNewSideNavPage()],
    }));

  navigateBackward = () =>
    this.setState(state => ({ sideNavStack: this.state.sideNavStack.slice(0, -1) }));

  render() {
    const { sideNavOpen, sideNavStack } = this.state;
    return (
      <AppContainer>
        <SideMenuShadowbox onClick={() => this.closeSideNav()} visible={sideNavOpen}>
          <SideMenu open={sideNavOpen}>
            {sideNavStack}
          </SideMenu>
        </SideMenuShadowbox>
        <MainContainer><Menu onClick={() => this.openSideNav()}/></MainContainer>
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
  generateNewSideNavPage = ({ hideBack, pose } = { hideBack: false }) => (
    <SideNavPage
      style={{ background: gradients[this.sideNavCount % 4] }}
      key={++this.sideNavCount}
    >
      <PoseGroup animateOnMount={true}>
      {<FadeIn>hellllloooooodgkjhdjkhgdkjhdkgjhjk<ArrowLeft onClick={() => this.navigateBackward()} /></FadeIn>}
      <FadeIn key={'x'}>mmmmmmsdfsfsfsfksjfhskfjhjkh<ArrowRight onClick={() => this.navigateForward()} /></FadeIn>
      <FadeIn key={'y'}>mmmmmmsdfkhsfkjshfksjfhskfjhjkh<ArrowRight onClick={() => this.navigateForward()} /></FadeIn>
      <FadeIn key={'z'}>mmmmmmsdfkhsfkjshfksjfhskfjhjkh<ArrowRight onClick={() => this.navigateForward()} /></FadeIn>

      </PoseGroup>
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
