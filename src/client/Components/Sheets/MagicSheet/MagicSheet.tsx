import * as React from 'react';
import './assets/magicsheet.scss';
import TopPart from '../TopPart/TopPart';
import { MyProps, MyState } from './IMagicSheet';

class MagicSheet extends React.PureComponent<MyProps, MyState> {
  componentDidMount(): void {
    // console.log('updated');
  }

  render(): React.ReactNode {
    return (
      <div>
        <TopPart />
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </div>
    );
  }
}

export default MagicSheet;
