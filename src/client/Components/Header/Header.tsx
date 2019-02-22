import * as React from 'react';
import { connect } from 'react-redux';
import localeActions from '../../_actions/locale.actions';
import { MyProps, MyState } from './IHeader';

class Header extends React.PureComponent <MyProps, MyState> {
  render() {
    const { locale, changeLocale } = this.props;

    return (
      <div>
        <button onClick={changeLocale} type="button">{locale}</button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch: any) => ({
  changeLocale: () => dispatch(localeActions.changeLocale())
});

const mapStateToProps = (state: any) => {
  const { locale } = state.localeReducer;

  return {
    locale
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
