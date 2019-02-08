import * as React from 'react';
import { connect } from 'react-redux';
import { calcMod } from '../../../common/lib';
import { mainStats } from '../../sheet.mock';
import './assets/mainstats.scss';
import Input from '../../../common/Input/Input';
import { MyProps, MyState } from './IMainStats';

class MainStats extends React.PureComponent <MyProps, MyState> {
  render() {
    const rows: any = [];
    const { locale } = this.props;
    const inputStyle = {
      background: 'transparent',
      border: '1px dashed black',
      width: '30px',
      textAlign: 'center',
    };

    Object.keys(mainStats).forEach((key) => {
      const { abilityScore, tempAdj } = mainStats[key];
      const abilityMod = calcMod((abilityScore - 10), 2);
      const tempMod = calcMod((tempAdj - 10), 2);
      const fullName = mainStats[key][locale];

      rows.push(
        <tr key={key}>
          <td className="mainColumn">
            <span className="abbr">{key}</span>
            <span>{ fullName }</span>
          </td>
          <td className="cell ability disabled">{abilityScore}</td>
          <td className="cell ability disabled">{abilityMod}</td>
          <td className="cell temp">
            <Input style={inputStyle} initValue="0" />
          </td>
          <td className="cell temp disabled">{tempMod}</td>
        </tr>
      );
    });

    return (
      <table className="mainStats">
        <thead>
          <tr>
            <td>Ability name</td>
            <td>Ability score</td>
            <td>Ability mod</td>
            <td>Temp score</td>
            <td>Temp mod</td>
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

export default connect(mapStateToProps)(MainStats);
