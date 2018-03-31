import React from 'react';
import { Component } from 'react';
import styled from 'styled-components';
import posed, { PoseGroup } from 'react-pose';

const SideNavContainerPose = posed.div({
  open: { x: '0%', staggerChildren: 100 },
  closed: { x: '-100%' }
});

const SlideableMenuContainer = styled(SideNavContainerPose)`
  position: absolute;
  left: -40px;
  top: 0;
  max-width: 340px;
  /* width: 100%; */
  width: 90%;
  height: 100%;
  display: flex;
  contain: strict;
  overflow: visible;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.5);
  flex-direction: column;
  will-change: transform;
  z-index: 160;
  pointer-events: auto;
`;

const SideMenuShadowbox = styled.aside`
  color: #fff;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 150;
  pointer-events: ${props => (props.visible ? 'auto' : 'none')};
  :after {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
    opacity: ${props => (props.visible ? 1 : 0)};
    will-change: opacity;
    pointer-events: ${props => (props.visible ? 'auto' : 'none')};
    transition: opacity 0.3s cubic-bezier(0, 0, 0.3, 1);
  }
`;

const SideNavPagePose = posed.div({
  enter: { x: '0%', staggerChildren: 1000 },
  exit: { x: '110%' },
});

const SideNavPage = styled(SideNavPagePose)`
  position: absolute;
  top: 0;
  left: 0px;
  display: flex;
  flex-direction: column;
  width: 400px;
  overflow: visible;
  /* width: 100%; */
  height: 100%;
  background: linear-gradient(#ed6153, #ed6153 50%, #f9b16d);
  line-height: 3;
  contain: strict;
  will-change: transform;
  z-index: 160;
  pointer-events: auto;
  padding-left: 40px;
  padding-right: 60px;
  /* box-shadow: 0 2px 6px rgba(0, 0, 0, 0.5); */
  /* width: 90%; for box-shadow (due to display: hidden) */
`;

const SideMenu = ({ open, children, onClick, ...rest }) => (
  <SlideableMenuContainer pose={open ? 'open' : 'closed'} onClick={(e) => e.stopPropagation()} {...rest}>
    <PoseGroup>{children}</PoseGroup>
  </SlideableMenuContainer>
);

export { SideMenu, SideNavPage, SideMenuShadowbox };
