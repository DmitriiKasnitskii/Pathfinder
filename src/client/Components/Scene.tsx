import * as React from 'react';
import { connect } from 'react-redux';
import { MyProps, MyState } from './IScene';
import LeftPanel from './LeftPanel/LeftPanel';
import StatSheet from './Sheets/StatSheet/StatSheet';
import RollPopup from './common/RollPopup/RollPopup';

const { PureComponent } = React;

class Scene extends PureComponent <MyProps, MyState> {
  // constructor(props: object) {
  //   super(props);
  // }

  componentDidMount() {
    // fetch('/api/getUsername')
    //   .then(res => res.json())
    //   .then(user => this.setState({ username: user.username }));
  }

  render() {
    const { popupVisible } = this.props;

    return (
      <React.Fragment>
        {popupVisible
        && <RollPopup />}
        <LeftPanel />
        <StatSheet visible />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state: { popupReducer: { isVisible: any; }; }) => ({
  popupVisible: state.popupReducer.isVisible
});

export default connect(mapStateToProps, null)(Scene);
