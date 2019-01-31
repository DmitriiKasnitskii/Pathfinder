import * as React from 'react';
import { savingThrows } from '../../sheet.mock';
import './assets/savingthrows.scss';

const SavingThrows = () => {
  const rows = [];

  for (const key in savingThrows) {
    rows.push(
      <tr key={key}>
        <td className="mainColumn">
          <span className="abbr">FORTITUDE</span>
          <span>(constitution)</span>
        </td>
        <td className="cell total">+2</td>
        <td className="cell">+1</td>
        <td className="cell">0</td>
        <td className="cell">0</td>
        <td className="cell">0</td>
        <td />
      </tr>
    );
  }

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
};

export default SavingThrows;
