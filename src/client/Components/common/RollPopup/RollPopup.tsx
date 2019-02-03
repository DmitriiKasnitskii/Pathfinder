import * as React from 'react';
import { connect } from 'react-redux';
import { MyProps, MyState } from './IRollPopup';
import setVisibilityPopup from '../../../actions/popup.actions';
import './assets/rollpopup.scss';

class RollPopup extends React.PureComponent<MyProps, MyState> {
  render() {
    const { closePopup } = this.props;

    return (
      <div className="rollPopup">
        <div>1</div>
        <div>2</div>
        <div tabIndex={0} role="button" onKeyPress={closePopup} onClick={closePopup}>close</div>
      </div>
    );
  }
}


const mapDispatchToProps = (dispatch: any) => ({
  closePopup: () => dispatch({ type: setVisibilityPopup.CLOSE })
});

export default connect(null, mapDispatchToProps)(RollPopup);
