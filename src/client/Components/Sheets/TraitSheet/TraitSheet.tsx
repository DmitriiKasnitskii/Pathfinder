import * as React from 'react';
import './assets/traitsheet.scss';
import { connect } from 'react-redux';
import TopPart from '../TopPart/TopPart';
import { MyProps, MyState } from './ITraitSheet';
import requestActions from '../../../_actions/requests.actions';

class TraitSheet extends React.PureComponent<MyProps, MyState> {
  componentDidMount(): void {
    const { fetchMainData, data } = this.props;
    const reqParam = {
      sheetType: 'TraitsSheet'
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
  loading: state.traitsSheetReducer.loading,
  data: Boolean(state.traitsSheetReducer.data)
});

export default connect(mapStateToProps, mapDispatchToProps)(TraitSheet);
