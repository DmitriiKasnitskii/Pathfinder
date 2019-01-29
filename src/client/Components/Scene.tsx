import * as React from 'react';
import { MyProps, MyState } from './IScene';
import LeftPanel from './LeftPanel/LeftPanel';
import RightPanel from './RightPanel/RightPanel';
import StatSheet from './Sheets/StatSheet/StatSheet';

const { PureComponent } = React;

export default class Scene extends PureComponent <MyProps, MyState> {
  // constructor(props: object) {
  //   super(props);
  // }

  componentDidMount() {
    // fetch('/api/getUsername')
    //   .then(res => res.json())
    //   .then(user => this.setState({ username: user.username }));
  }

  render() {
    return (
      <React.Fragment>
        <LeftPanel />
        <RightPanel />
        <StatSheet visible />
      </React.Fragment>
    );
  }
}
