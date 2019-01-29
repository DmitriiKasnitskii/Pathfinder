import * as React from 'react';
import { MyProps } from './ITraitSheet';
import './assets/traitsheet.scss';

const TraitSheet = (props: MyProps) => (
  props.visible && (
    <div>
      <div>1</div>
      <div>2</div>
      <div>3</div>
    </div>
  )
);

export default TraitSheet;
