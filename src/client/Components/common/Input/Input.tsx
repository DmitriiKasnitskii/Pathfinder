import * as React from 'react';
import { MyProps, MyState } from './IInput';
import { IDgen } from '../lib';
import './assets/input.scss';

export default class Input extends React.PureComponent <MyProps, MyState> {
  constructor(props: { style: {}, label: string, initValue: string, val: string,
    callback: (value: string) => void }) {
    super(props);

    const { initValue } = this.props;

    this.state = {
      value: initValue
    };
  }

  onChange = (e: { persist: any, target: { value: string } }) => {
    e.persist();
    const { callback } = this.props;
    if (callback) {
      callback(e);
    }
    this.setState(() => ({
      value: e.target.value
    }));
  };

  render() {
    const { value } = this.state;
    const {
      style, label, val, className
    } = this.props;
    const id: string = IDgen();

    return (
      <label htmlFor={id}>
        <span style={{ marginRight: '10px' }}>
          {label}
        </span>
        <input
          id={id}
          className={className}
          value={val || value}
          style={style}
          onChange={this.onChange}
        />
      </label>
    );
  }
}
