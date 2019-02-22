import * as React from 'react';
import { connect } from 'react-redux';
import Input from '../../../common/Input/Input';
import { calcMod } from '../../../common/lib';
import { mainStats, savingThrows } from '../../sheet.mock';
import popupActions from '../../../../_actions/popup.actions';
import { MyProps, MyState } from './ISavingThrows';
import './assets/savingthrows.scss';

class SavingThrows extends React.PureComponent <MyProps, MyState> {
  constructor(props: {openPopup: () => any, locale: string}) {
    super(props);

    this.state = {
      temp: {
        FORT: '0',
        REFLEX: '0',
        WILL: '0'
      }
    };
  }

  changeRollValue = (e: any) => {
    const { temp } = this.state;
    const newState = {
      ...temp,
      [e.target.className]: e.target.value
    };
    this.setState(() => ({
      temp: newState
    }));
  };

  render() {
    const rows:any = [];
    const { locale, openPopup } = this.props;
    const { temp } = this.state;
    const inputStyle = {
      background: 'transparent',
      border: '1px dashed black',
      width: '30px',
      textAlign: 'center',
    };

    Object.keys(savingThrows).forEach((key) => {
      const { abilityScore } = mainStats[savingThrows[key].keyAbility];
      const base = savingThrows[key].Base; // From character class
      const abilityMod = calcMod((abilityScore - 10), 2);
      const magic = savingThrows[key].Magic;
      const misc = savingThrows[key].Misc;
      const epic = savingThrows[key].Epic;
      const TOTAL = base + abilityMod + magic + misc + epic + +temp[key];

      rows.push(
        <tr key={key}>
          <td
            className="mainColumn"
            onKeyPress={() => { openPopup(TOTAL, key); }}
            onClick={() => { openPopup(TOTAL, key); }}
          >
            <span className="abbr">{key}</span>
            <span>{savingThrows[key][locale]}</span>
          </td>
          <td className="cell total">{TOTAL}</td>
          <td className="cell">{base}</td>
          <td className="cell">{abilityMod}</td>
          <td className="cell">{magic}</td>
          <td className="cell">{misc}</td>
          <td className="cell">{epic}</td>
          <td className="cell temp">
            <Input
              className={key}
              style={inputStyle}
              callback={this.changeRollValue}
              val={temp[key]}
            />
          </td>
          <td />
        </tr>
      );
    });

    return (
      <table className="savingThrows">
        <thead>
          <tr>
            <td>Saving throws</td>
            <td>Total</td>
            <td>Base save</td>
            <td>Ability</td>
            <td>Magic</td>
            <td>Misc</td>
            <td>Epic</td>
            <td>Temp</td>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state: any) => ({
  locale: state.localeReducer.locale
});

const mapDispatchToProps = (dispatch: any) => ({
  openPopup: (value: string, throwName: string) => dispatch(
    popupActions.openPopup({
      initValue: value,
      skillName: throwName
    })
  )
});

export default connect(mapStateToProps, mapDispatchToProps)(SavingThrows);
