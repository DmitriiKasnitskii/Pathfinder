import * as React from 'react';
import { MyProps, MyState } from './IInput';

export default class Input extends React.PureComponent <MyProps, MyState> {
  constructor(props: {style: {}}) {
    super(props);

    this.state = {
      value: ''
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
    const { style } = this.props;

    return (
      <input value={value} style={style} onChange={this.onChange} />
    );
  }
}
