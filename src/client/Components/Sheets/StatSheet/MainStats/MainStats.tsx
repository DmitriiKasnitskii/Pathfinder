import * as React from 'react';
import { connect } from 'react-redux';
import { calcMod } from '../../../common/lib';
import './assets/mainstats.scss';
import Input from '../../../common/Input/Input';
import { MyProps, MyState } from './IMainStats';

class MainStats extends React.PureComponent <MyProps, MyState> {
  constructor(props: MyProps) {
    super(props);

    const { mainStats } = this.props;

    this.state = {
      tempAdj: {
        STR: mainStats.STR.tempAdj.toString(),
        DEX: mainStats.DEX.tempAdj.toString(),
        CON: mainStats.CON.tempAdj.toString(),
        INT: mainStats.INT.tempAdj.toString(),
        WIS: mainStats.WIS.tempAdj.toString(),
        CHA: mainStats.CHA.tempAdj.toString()
      }
    };
  }

  changeRollValue = (e: any) => {
    const { tempAdj } = this.state;
    const newState = {
      ...tempAdj,
      [e.target.className]: e.target.value
    };
    this.setState(() => ({
      tempAdj: newState
    }));
  };

  render() {
    const rows: any = [];
    const { locale, mainStats } = this.props;
    const inputStyle = {
      background: 'transparent',
      border: '1px dashed black',
      width: '30px',
      textAlign: 'center',
    };

    Object.keys(mainStats).forEach((key) => {
      const { abilityScore } = mainStats[key];
      const { tempAdj } = this.state;
      const abilityMod = calcMod((abilityScore - 10), 2);
      const tempMod = calcMod((tempAdj[key] - 10), 2);
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
            <Input
              className={key}
              style={inputStyle}
              callback={this.changeRollValue}
              val={tempAdj[key]}
            />
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
  locale: state.localeReducer.locale,
  mainStats: state.homePageReducer.data.response.mainStats
});

export default connect(mapStateToProps)(MainStats);
