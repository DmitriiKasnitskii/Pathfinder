import * as React from 'react';
import { MyProps, MyState } from './IScene';

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
    return <h1>Hello</h1>;
  }
}
