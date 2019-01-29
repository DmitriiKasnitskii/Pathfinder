import * as React from 'react';
import './assets/toppart.scss';
import { mainData } from '../sheet.mock';
import Cell from './Cell/Cell';

const TopPart = () => {
  const cells = [];
  for (const key in mainData) {
    cells.push(<Cell key={key} value={mainData[key]} placeholder={key} />);
  }

  return (
    <div className="topPart">
      {cells}
    </div>
  );
};

export default TopPart;
