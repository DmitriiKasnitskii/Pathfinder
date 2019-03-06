import * as React from 'react';
import './assets/statsheet.scss';
import { connect } from 'react-redux';
import TopPart from '../TopPart/TopPart';
import SkillsTable from './SkillsTable/SkillsTable';
import MainStats from './MainStats/MainStats';
import SavingThrows from './SavingThrows/SavingThrows';
import { MyProps, MyState } from './IStatSheet';
import requestActions from '../../../_actions/requests.actions';

class StatSheet extends React.PureComponent<MyProps, MyState> {
  componentDidMount(): void {
    const { fetchMainData, data } = this.props;
    const reqParam = {
      sheetType: 'MainSheet'
    };


    if (!data) {
      fetchMainData(reqParam);
    }
  }

  render(): React.ReactNode {
    const { loading } = this.props;

    return (
      !loading ? (
        <div className="sheet">
          <TopPart />
          <SavingThrows />
          <MainStats />
          <SkillsTable />
        </div>
      ) : <div>Loading...</div>
    );
  }
}

const mapDispatchToProps = (dispatch: any) => ({
  fetchMainData: (reqParam: {sheetType: string}) => dispatch(requestActions.loadData(reqParam))
});

const mapStateToProps = (state: any) => ({
  loading: state.homePageReducer.loading,
  data: Boolean(state.homePageReducer.data)
});

export default connect(mapStateToProps, mapDispatchToProps)(StatSheet);
