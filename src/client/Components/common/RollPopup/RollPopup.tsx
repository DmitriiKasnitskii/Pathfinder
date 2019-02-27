import * as React from 'react';
import { connect } from 'react-redux';
import { MyProps, MyState } from './IRollPopup';
import popupActions from '../../../_actions/popup.actions';
import './assets/rollpopup.scss';
import Input from '../Input/Input';
import { rand } from '../lib';

class RollPopup extends React.PureComponent<MyProps, MyState> {
  constructor(props: {closePopup: () => void, initValue: string, skillName: string}) {
    super(props);

    const { initValue } = this.props;

    this.state = {
      rollValue: '1',
      modValue: initValue
    };
  }

  getRandomNumber = () => (
    this.setState(() => ({
      rollValue: rand(1, 20).toString()
    }))
  );

  changeRollValue = (e: any) => (
    this.setState(() => ({
      rollValue: e.target.value
    }))
  );

  changeModValue = (e: any) => (
    this.setState(() => ({
      modValue: e.target.value
    }))
  );

  render() {
    const { closePopup, initValue, skillName } = this.props;
    const { rollValue, modValue } = this.state;
    const rollText = 'Roll';
    const modText = 'Modifier';

    return (
      <div className="rollPopup">
        <div className="rollHeader">
          <span>Roll your Destiny</span>
          <span>{`(${skillName})`}</span>
        </div>
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
  closePopup: () => dispatch(popupActions.closePopup())
});

const mapStateToProps = (state: any) => ({
  initValue: state.popupReducer.initValue,
  skillName: state.popupReducer.skillName
});

export default connect(mapStateToProps, mapDispatchToProps)(RollPopup);
