import * as React from 'react';
import { Link } from 'react-router-dom';
import { MyProps, MyState } from './ILeftPanel';
import './assets/leftpanel.scss';

const { Component } = React;

export default class LeftPanel extends Component <MyProps, MyState> {
  constructor(props: MyProps) {
    super(props);

    this.state = {
      isOpened: false
    };

    this.togglePanel = this.togglePanel.bind(this);
  }

    togglePanel = () => {
      this.setState(prevState => ({
        isOpened: !prevState.isOpened
      }));
    };

    render() {
      const { isOpened } = this.state;

      return (
        <div className={`leftPanel ${isOpened ? 'opened' : 'closed'}`}>
          <Link to="/">Stats</Link>
          <Link to="/Magic">Magic</Link>
          <Link to="/Bio">Bio</Link>
          <Link to="/Traits">Traits</Link>
          <div role="button" tabIndex={0} onKeyDown={this.togglePanel} onClick={this.togglePanel} className={`${isOpened ? 'closeBtn' : 'openBtn'}`} />
        </div>
      );
    }
}
