import * as React from 'react';
import { connect } from 'react-redux';
import { savingThrows } from '../../sheet.mock';
import './assets/savingthrows.scss';
import { MyProps, MyState } from './ISavingThrows';
import Input from '../../../common/Input/Input';

class SavingThrows extends React.PureComponent <MyProps, MyState> {
  constructor(props: {locale: string}) {
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
    const { locale } = this.props;
    const { temp } = this.state;
    const inputStyle = {
      background: 'transparent',
      border: '1px dashed black',
      width: '30px',
      textAlign: 'center',
    };

    Object.keys(savingThrows).forEach((key) => {
      const base = savingThrows[key].Base;
      const ability = savingThrows[key].Ability;
      const magic = savingThrows[key].Magic;
      const misc = savingThrows[key].Misc;
      const epic = savingThrows[key].Epic;
      const TOTAL = base + ability + magic + misc + epic + +temp[key];

      rows.push(
        <tr key={key}>
          <td className="mainColumn">
            <span className="abbr">{key}</span>
            <span>{savingThrows[key][locale]}</span>
          </td>
          <td className="cell total">{TOTAL}</td>
          <td className="cell">{base}</td>
          <td className="cell">{ability}</td>
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

export default connect(mapStateToProps)(SavingThrows);
