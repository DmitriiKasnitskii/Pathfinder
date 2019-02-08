import * as React from 'react';
import { MyProps, MyState } from './IRightPanel';
import './assets/rightpanel.scss';
import Input from '../common/Input/Input';

const { PureComponent } = React;

export default class RightPanel extends PureComponent <MyProps, MyState> {
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
      const style = {
        position: 'absolute',
        display: 'flex',
        alignSelf: 'center',
        width: '240px',
        height: '50px',
        bottom: '0',
        marginBottom: '2px',
      };

      return (
        <div className={`rightPanel ${isOpened ? 'opened' : 'closed'}`}>
          <div tabIndex={0} role="button" onKeyDown={this.togglePanel} onClick={this.togglePanel} className={`${isOpened ? 'closeBtn' : 'openBtn'}`} />
          <Input style={style} label="Message" />
        </div>
      );
    }
}
