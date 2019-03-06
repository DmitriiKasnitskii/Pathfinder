import * as React from 'react';
import './assets/biosheet.scss';
import { connect } from 'react-redux';
import TopPart from '../TopPart/TopPart';
import { MyProps, MyState } from './IBioSheet';
import requestActions from '../../../_actions/requests.actions';

class BioSheet extends React.PureComponent <MyProps, MyState> {
  componentDidMount(): void {
    const { fetchMainData, data } = this.props;
    const reqParam = {
      sheetType: 'BioSheet'
    };

    if (!data) {
      fetchMainData(reqParam);
    }
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

const mapDispatchToProps = (dispatch: any) => ({
  fetchMainData: (reqParam: {sheetType: string}) => dispatch(requestActions.loadData(reqParam))
});

const mapStateToProps = (state: any) => ({
  loading: state.bioSheetReducer.loading,
  data: Boolean(state.bioSheetReducer.data)
});

export default connect(mapStateToProps, mapDispatchToProps)(BioSheet);
