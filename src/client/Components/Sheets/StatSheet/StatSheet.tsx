import * as React from 'react';
import { MyProps } from './IStatSheet';
import './assets/statsheet.scss';

const StatSheet = (props: MyProps) => (
  props.visible && (
    <div>
      <div>1</div>
      <div>2</div>
      <div>3</div>
    </div>
  )
);
