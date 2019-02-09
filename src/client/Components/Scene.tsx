import * as React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router';
import { MyProps, MyState } from './IScene';
import LeftPanel from './LeftPanel/LeftPanel';
import RollPopup from './common/RollPopup/RollPopup';
import StatSheet from './Sheets/StatSheet/StatSheet';
import BioSheet from './Sheets/BioSheet/BioSheet';
import MagicSheet from './Sheets/MagicSheet/MagicSheet';
import TraitSheet from './Sheets/TraitSheet/TraitSheet';

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
        {popupVisible && <RollPopup />}
        <LeftPanel />
        <Switch>
          <Route exact path="/" component={StatSheet} />
          <Route path="/Magic" component={MagicSheet} />
          <Route path="/Bio" component={BioSheet} />
          <Route path="/Traits" component={TraitSheet} />
        </Switch>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state: { popupReducer: { isVisible: any; }; }) => ({
  popupVisible: state.popupReducer.isVisible
});

export default connect(mapStateToProps, null)(Scene);
