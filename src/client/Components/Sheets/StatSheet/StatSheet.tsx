import * as React from 'react';
import { MyProps } from './IStatSheet';
import './assets/statsheet.scss';
import TopPart from '../TopPart/TopPart';
import SkillsTable from './SkillsTable/SkillsTable';

const StatSheet = (props: MyProps) => (
  props.visible && (
    <div className="sheet">
      <TopPart />
      <SkillsTable />
    </div>
  )
);

export default StatSheet;
