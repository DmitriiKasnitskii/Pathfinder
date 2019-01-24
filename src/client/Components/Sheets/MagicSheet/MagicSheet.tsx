import * as React from 'react';
import { MyProps } from './IMagicSheet';
import './assets/magicsheet.scss';

const MagicSheet = (props: MyProps) => (
  props.visible && (
  <div>
    <div>1</div>
    <div>2</div>
    <div>3</div>
  </div>
  )
);
