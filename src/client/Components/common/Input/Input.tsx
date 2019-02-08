import * as React from 'react';
import { MyProps, MyState } from './IInput';
import { IDgen } from '../lib';

export default class Input extends React.PureComponent <MyProps, MyState> {
  constructor(props: {style: {}, label: string, initValue: string}) {
    super(props);

    const { initValue } = this.props;

    this.state = {
      value: initValue
    };
  }

  onChange = (e: {persist: any, target: {value: string}}) => {
    e.persist();
    this.setState(() => ({
      value: e.target.value
    }));
  };

  render() {
    const { value } = this.state;
    const { style, label } = this.props;
    const id: string = IDgen();

    return (
      <label htmlFor={id}>
        {label}
        <input id={id} value={value} style={style} onChange={this.onChange} />
      </label>
    );
  }
}
