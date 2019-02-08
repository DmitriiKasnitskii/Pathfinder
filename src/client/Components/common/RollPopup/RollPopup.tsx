import * as React from 'react';
import { connect } from 'react-redux';
import { MyProps, MyState } from './IRollPopup';
import setVisibilityPopup from '../../../actions/popup.actions';
import './assets/rollpopup.scss';
import Input from '../Input/Input';

class RollPopup extends React.PureComponent<MyProps, MyState> {
  render() {
    const { closePopup, initValue } = this.props;
    const modText = 'Modifier';

    return (
      <div className="rollPopup">
        <div>1</div>
        <Input style={{}} initValue={initValue} label={modText} />
        <div className="closeButton" tabIndex={0} role="button" onKeyPress={closePopup} onClick={closePopup}>close</div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: any) => ({
  closePopup: () => dispatch({ type: setVisibilityPopup.CLOSE })
});

const mapStateToProps = (state: any) => ({
  initValue: state.popupReducer.initValue
});

export default connect(mapStateToProps, mapDispatchToProps)(RollPopup);
