import * as React from 'react';
import './app.scss';
import * as ReactImage from './react.png';
import {MyProps, MyState} from "./IApp";

const { PureComponent } = React;

export default class App extends PureComponent <MyProps, MyState> {
  constructor(props: object) {
    super(props);

    this.state = {
      username: null
    };
  }

  componentDidMount() {
    fetch('/api/getUsername')
      .then(res => res.json())
      .then(user => this.setState({ username: user.username }));
  }

  render() {
    const { username } = this.state;
    return (
      <div>
        {username ? <h1>{`Hello ${username}`}</h1> : <h1>Loading.. please wait!</h1>}
        <img src={ReactImage} alt="react" />
      </div>
    );
  }
}
