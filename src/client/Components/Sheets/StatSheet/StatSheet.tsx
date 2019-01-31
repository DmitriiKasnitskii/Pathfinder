import * as React from 'react';
import { MyProps } from './IStatSheet';
import './assets/statsheet.scss';
import TopPart from '../TopPart/TopPart';
import SkillsTable from './SkillsTable/SkillsTable';
import MainStats from './MainStats/MainStats';
import SavingThrows from './SavingThrows/SavingThrows';

const StatSheet = (props: MyProps) => (
  props.visible && (
    <div className="sheet">
      <TopPart />
      <SavingThrows />
      <MainStats />
      <SkillsTable />
    </div>
  )
);

export default StatSheet;
