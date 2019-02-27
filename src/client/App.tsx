import * as React from 'react';
import { connect } from 'react-redux';
import Scene from './Components/Scene';
import LeftPanel from './Components/LeftPanel/LeftPanel';
import Header from './Components/Header/Header';
import { MyProps, MyState } from './IApp';
import './app.scss';
import homePageActions from './_actions/homePage.actions';

class App extends React.PureComponent<MyProps, MyState> {
  componentDidMount(): void {
    const { fetchMainData } = this.props;

    fetchMainData();
  }

  render() {
    const { loading } = this.props;

    return (
      <div className="scene">
        <Header />
        <LeftPanel />
        {!loading ? <Scene /> : <div>Loading...</div>}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: any) => ({
  fetchMainData: () => dispatch(homePageActions.loadData())
});

const mapStateToProps = (state: any) => ({
  loading: state.homePageReducer.loading
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
