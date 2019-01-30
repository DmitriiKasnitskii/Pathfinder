import * as React from 'react';
import { skills } from '../../sheet.mock';
import './assets/skilltable.scss';

const SkillsTable = () => {
  const rows = [];

  for (const key in skills) {
    if (skills[key].Untrained) {
      rows.push(
        <tr key={key}>
          <td>1</td>
          <td className="skillName">{key}</td>
          <td>3</td>
          <td>4</td>
          <td>5</td>
          <td>6</td>
          <td>7</td>
        </tr>
      );
    }
  }

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
};

export default SkillsTable;
