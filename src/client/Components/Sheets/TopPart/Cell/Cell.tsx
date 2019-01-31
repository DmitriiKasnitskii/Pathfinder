import * as React from 'react';
import { MyProps } from './ICell';
import './assets/cell.scss';

const Cell = (props: MyProps) => {
  const { value, placeholder } = props;
  return (
    <div className="topPartCell">
      <div className="value">{value}</div>
      <div className="placeholder">{placeholder}</div>
    </div>
  );
};

export default Cell;
