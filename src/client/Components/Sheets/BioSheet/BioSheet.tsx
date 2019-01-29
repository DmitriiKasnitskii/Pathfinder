import * as React from 'react';
import { MyProps } from './IBioSheet';
import './assets/biosheet.scss';

const BioSheet = (props: MyProps) => (
  props.visible && (
    <div>
      <div>1</div>
      <div>2</div>
      <div>3</div>
    </div>
  )
);

export default BioSheet;
