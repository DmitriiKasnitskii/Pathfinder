import * as React from 'react';
import { connect } from 'react-redux';
import setVisibilityPopup from '../../../../actions/popup.actions';
import { calcMod } from '../../../common/lib';
import { skills, mainStats } from '../../sheet.mock';
import { MyProps, MyState } from './ISkillsTable';
import './assets/skilltable.scss';

class SkillsTable extends React.PureComponent<MyProps, MyState> {
  render() {
    const { openPopup } = this.props;
    const rows: any = [];

    Object.keys(skills).forEach((key) => {
      const { rank } = skills[key];

      if (skills[key].untrained || rank > 0) {
        const { locale } = this.props;
        const { abilityScore } = mainStats[skills[key].keyAbility];
        const abilityMod = calcMod((abilityScore - 10), 2);
        const misc = skills[key].class && rank > 0 ? 3 + (rank - 1) : rank;
        const sum = rank + abilityMod + misc;
        const skillName = skills[key][locale];

        rows.push(
          <tr key={key}>
            <td>{skills[key].untrained ? '☑' : ''}</td>
            <td
              className="skillName"
              onKeyPress={() => { openPopup('3', key); }}
              onClick={() => { openPopup('3', key); }}
            >
              {skillName}
            </td>
            <td>{skills[key].keyAbility}</td>
            <td>{sum}</td>
            <td>{abilityMod}</td>
            <td>{rank}</td>
            <td>{misc}</td>
          </tr>
        );
      }
    });

    return (
      <table className="skills">
        <thead>
          <tr>
            <td />
            <td>Skill name</td>
            <td>Key ability</td>
            <td>Skill modifier</td>
            <td>Ability modifier</td>
            <td>Ranks</td>
            <td>Misc modifier</td>
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
  openPopup: (value: string, skill: string) => dispatch(
    {
      type: setVisibilityPopup.OPEN,
      payload: { initValue: value, skillName: skill }
    }
  )
});

export default connect(mapStateToProps, mapDispatchToProps)(SkillsTable);
