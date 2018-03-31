# React Sidenav

#### [Demo](https://react-sidenav.surge.sh/)

Built using [React](reactjs.org), [Pose](https://popmotion.io/pose/), [styled-components](https://www.styled-components.com/)

### Usage

```jsx
<SideNav open={sideNavOpen}>
  {/* 
      Declaratively add and remove SideNavPage children here. 
      Everything is automatically managed, including transitions and coordinated unmounting.
  */}
  <SideNavPage key={'uniqueId1'}>Content here!</SideNavPage>
  <SideNavPage key={'uniqueId2'}>More content here!</SideNavPage>
</SideNav>
```

Note: Only requirement is that each `<SideNavPage>` must have a unique key.
