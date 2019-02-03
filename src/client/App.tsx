import * as React from 'react';
import './app.scss';
import { MyProps, MyState } from './IApp';
import Scene from './Components/Scene';

const { PureComponent } = React;

export default class App extends PureComponent <MyProps, MyState> {
  constructor(props: object) {
    super(props);

    this.state = {
      isLoaded: true
    };
  }

  componentDidMount() {
    // fetch('/api/getUsername')
    //   .then(res => res.json())
    //   .then(user => this.setState({ username: user.username }));
  }

  render() {
    const { isLoaded } = this.state;
    return (
      <div className="scene">
        {isLoaded ? <Scene /> : <h1>Loading.. please wait!</h1>}
      </div>
    );
  }
}
