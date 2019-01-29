import * as React from 'react';
import { MyProps } from './IStatSheet';
import './assets/statsheet.scss';
import TopPart from '../TopPart/TopPart';

const StatSheet = (props: MyProps) => (
  props.visible && (
    <div>
      <TopPart />
    </div>
  )
);

export default StatSheet;
