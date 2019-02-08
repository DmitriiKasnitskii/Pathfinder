import * as React from 'react';
import { connect } from 'react-redux';
import { skills } from '../../sheet.mock';
import './assets/skilltable.scss';
import setVisibilityPopup from '../../../../actions/popup.actions';
import { MyProps, MyState } from './ISkillsTable';

class SkillsTable extends React.PureComponent<MyProps, MyState> {
  render() {
    const { openPopup } = this.props;
    const rows: any = [];

    Object.keys(skills).forEach((key) => {
      if (skills[key].Untrained) {
        rows.push(
          <tr key={key}>
            <td>1</td>
            <td className="skillName" onKeyPress={openPopup} onClick={() => { openPopup(3); }}>{key}</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
            <td>6</td>
            <td>7</td>
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


const mapDispatchToProps = (dispatch: any) => ({
  openPopup: (value: string) => dispatch(
    {
      type: setVisibilityPopup.OPEN,
      payload: { initValue: value }
    }
  )
});

export default connect(null, mapDispatchToProps)(SkillsTable);
