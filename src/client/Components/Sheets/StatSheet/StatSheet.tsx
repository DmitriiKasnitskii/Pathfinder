import * as React from 'react';
import './assets/statsheet.scss';
import { connect } from 'react-redux';
import TopPart from '../TopPart/TopPart';
import SkillsTable from './SkillsTable/SkillsTable';
import MainStats from './MainStats/MainStats';
import SavingThrows from './SavingThrows/SavingThrows';
import { MyProps, MyState } from './IStatSheet';
import homePageActions from '../../../_actions/homePage.actions';

class StatSheet extends React.PureComponent<MyProps, MyState> {
  componentDidMount(): void {
    const { fetchMainData } = this.props;

    fetchMainData();
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
  fetchMainData: () => dispatch(homePageActions.loadData())
});

const mapStateToProps = (state: any) => ({
  loading: state.homePageReducer.loading
});

export default connect(mapStateToProps, mapDispatchToProps)(StatSheet);
