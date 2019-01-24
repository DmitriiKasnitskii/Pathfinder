import * as React from 'react';
import { MyProps, MyState } from './ILeftPanel';
import './assets/leftpanel.scss';

const { PureComponent } = React;

export default class LeftPanel extends PureComponent <MyProps, MyState> {
  constructor(props: object) {
    super(props);

    this.state = {
      isOpened: false
    };

    this.togglePanel = this.togglePanel.bind(this);
  }

  componentDidMount() {
    // fetch('/api/getUsername')
    //   .then(res => res.json())
    //   .then(user => this.setState({ username: user.username }));
  }

    togglePanel = () => {
      this.setState(prevState => ({
        isOpened: !prevState.isOpened
      }));
    };

    render() {
      const { isOpened } = this.state;

      return (
        <div>
          <div className={`leftPanel ${isOpened ? 'opened' : 'closed'}`}>
            <a href="/">Sheet 1</a>
            <a href="/">Sheet 1</a>
            <a href="/">Sheet 1</a>
            <div onClick={this.togglePanel} className={`${isOpened ? 'closeBtn' : 'openBtn'}`} />
          </div>
        </div>
      );
    }
}
