# React Sidenav

#### [Demo](https://react-sidenav.surge.sh/)

Built using React, [Pose](https://popmotion.io/pose/), and [styled-components](https://www.styled-components.com/).

### Usage

```jsx
<SideNav open={true}>
  {/* 
      Declaratively add and remove SideNavPage children here. 
      Everything is automatically managed, including transitions and coordinated unmounting.
  */}
  <SideNavPage key={'key1'}>Content here!</SideNavPage>
  <SideNavPage key={'key2'}>More content here!</SideNavPage>
</SideNav>
```

Consumer is in full control of how they wish to manage the children. I.e. you can use a stack and push/pop to it (see App.js in the /src for an example).

Note: Only requirement is that each `<SideNavPage>` must have a unique key.
