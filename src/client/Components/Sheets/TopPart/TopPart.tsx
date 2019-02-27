import * as React from 'react';
import './assets/toppart.scss';
import { connect } from 'react-redux';
import Cell from './Cell/Cell';
import { MyProps, MyState } from './ITopPart';

class TopPart extends React.PureComponent<MyProps, MyState> {
  render() {
    const cells:any[] = [];
    const { mainData } = this.props;

    Object.keys(mainData).forEach((key) => {
      cells.push(<Cell key={key} value={mainData[key]} placeholder={key} />);
    });

    return (
      <div className="topPart">
        {cells}
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({
  mainData: state.homePageReducer.data.data.mainData
});

export default connect(mapStateToProps, null)(TopPart);
