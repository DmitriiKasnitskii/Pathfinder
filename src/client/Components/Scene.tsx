import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import RollPopup from './common/RollPopup/RollPopup';
import StatSheet from './Sheets/StatSheet/StatSheet';
import BioSheet from './Sheets/BioSheet/BioSheet';
import MagicSheet from './Sheets/MagicSheet/MagicSheet';
import TraitSheet from './Sheets/TraitSheet/TraitSheet';
import { MyProps } from './IScene';

function Scene(props: MyProps) {
  const { popupVisible } = props;

  return (
    <div>
      {popupVisible && <RollPopup />}
      <Switch>
        <Route exact path="/" component={StatSheet} />
        <Route path="/Magic" component={MagicSheet} />
        <Route path="/Bio" component={BioSheet} />
        <Route path="/Traits" component={TraitSheet} />
      </Switch>
    </div>
  );
}

const mapStateToProps = (state: { popupReducer: { isVisible: any; }; }) => ({
  popupVisible: state.popupReducer.isVisible
});

export default connect(mapStateToProps, null)(Scene);
