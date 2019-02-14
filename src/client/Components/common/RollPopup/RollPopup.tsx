import * as React from 'react';
import { connect } from 'react-redux';
import { MyProps, MyState } from './IRollPopup';
import setVisibilityPopup from '../../../actions/popup.actions';
import './assets/rollpopup.scss';
import Input from '../Input/Input';
import { rand } from '../lib';

class RollPopup extends React.PureComponent<MyProps, MyState> {
  constructor(props: {closePopup: () => void, initValue: string}) {
    super(props);

    this.state = {
      rollValue: '0',
      modValue: '0'
    };
  }

  getRandomNumber = () => (
    this.setState(() => ({
      rollValue: rand(1, 20).toString()
    }))
  );

  changeRollValue = (value: string) => (
    this.setState(() => ({
      rollValue: value
    }))
  );

  changeModValue = (value: string) => (
    this.setState(() => ({
      modValue: value
    }))
  );

  render() {
    const { closePopup, initValue } = this.props;
    const { rollValue, modValue } = this.state;
    const rollText = 'Roll';
    const modText = 'Modifier';

    return (
      <div className="rollPopup">
        <div className="rollHeader">Roll your Destiny</div>
        <div className="rollRow">
          <Input callback={this.changeRollValue} val={rollValue} label={rollText} />
          <div className="diceBtn" tabIndex={0} role="button" onKeyPress={this.getRandomNumber} onClick={this.getRandomNumber} />
        </div>
        <div className="modRow">
          <Input
            callback={this.changeModValue}
            initValue={initValue}
            val={modValue}
            label={modText}
          />
        </div>
        <div className="resultRow">
          {`Result ${+rollValue + +modValue}`}
        </div>
        <div className="closeButton" tabIndex={0} role="button" onKeyPress={closePopup} onClick={closePopup}>Close</div>
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
