import * as React from 'react';
import { mainStats } from '../../sheet.mock';
import './assets/mainstats.scss';

const MainStats = () => {
  const rows = [];

  for (const key in mainStats) {
    rows.push(
      <tr key={key}>
        <td className="mainColumn">
          <span className="abbr">STR</span>
          <span>Strength</span>
        </td>
        <td className="cell base">+12</td>
        <td className="cell base">+1</td>
        <td className="cell ability">12</td>
        <td className="cell ability">+1</td>
        <td className="cell temp" />
        <td className="cell temp" />
      </tr>
    );
  }

  return (
    <table className="mainStats">
      <thead>
        <tr>
          <td>Ability name</td>
          <td>Base score</td>
          <td>Base mod</td>
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
};

export default MainStats;
