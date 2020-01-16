// ==========================================================================
// Layout
// ==========================================================================
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import classNames from 'classnames';

// utilities
import emitter from '../../base/emitter';
import { LoadByPropKey, getSlugFromPath } from '../../base/utils';

// actions
import { changeTheme } from '../../actions/themeActions';
import { setAppLoading } from '../../actions/loadingActions';

// components
import Routes from '../routes';
import Meta from '../meta';
import Header from '../header';
import Footer from '../footer';
import Loader from '../loader';
import Stripes from '../stripes';

// data
import manifest from '../../data/manifest';

class Layout extends Component {

  // eslint-disable-next-line
  constructor(props) {
    super(props);
    emitter.setMaxListeners(0);
    this.handleAppLoading = this.setAppLoading.bind(this);
  }

  componentDidMount() {
    this.$app = document.querySelector('.application');

    this.$themeList = document.querySelectorAll("ul.themes li");

    for (let i = 0, len = this.$themeList.length; i < len; i++) {
      this.$themeList[i].addEventListener('click', this.handleThemeClick.bind(this), false);
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    // && nextProps.theme !== 'lightplus'
    if (this.props.theme !== nextProps.theme) {
      return false;
    } else {
      return true;
    }
  }

  componentWillUnmount() {
    console.log('unmounting.');
  }

  setAppLoading(val) {
    // must come first for loading animations.
    this.setPageReady(true);
    setTimeout(() => {
      this.props.actions.setAppLoading(val);
    }, 1e3)
  }

  setPageReady(val) {
    if (val === true) {
      this.$app.classList.remove('is-loading');
    } else {
      this.$app.classList.add('is-loading');
    }
  }

  handleThemeClick(event) {
    event.preventDefault();
    let target = event.target;
    let theme = target.getAttribute('data-theme');
    this.$app.classList.remove(this.props.theme);
    this.$app.classList.add(theme);
    this.props.actions.changeTheme(theme);
  }

  handleTheme(config) {
    const stateTheme = this.props.theme;
    if (stateTheme !== 'config') {
      return stateTheme;
    }
    return config;
  }

  render() {

    let { page, loading } = this.props;

    const title = (typeof page.title !== 'undefined') ? page.title : '';
    const header = (typeof page.header !== 'undefined') ? page.header : false;
    const navigation = (typeof page.navigation !== 'undefined') ? page.navigation : false;
    const typography = (typeof page.typography !== 'undefined') ? page.typography : false;

    const theme = this.handleTheme(page.theme);
    //const stripes = page.stripes && theme === 'lightplus';
    const stripes = false;

    const selector = classNames('application', 'is-loading', theme);

    setTimeout(() => {
      this.setPageReady(true);
    }, 1e3 / 2);

    return (
      <main className={selector}>

        <Meta page={page} />

        {stripes && <Stripes />}

        {header && <Header title={title} navigation={navigation} typography={typography} />}

        <Routes authenticated={true} />

        <Footer />

        {loading && <Loader manifest={manifest} setAppLoading={this.handleAppLoading} />}

      </main>
    )
  }

}

function mapStateToProps(state, ownProps) {
  const slug = getSlugFromPath(window.location.pathname);
  const parts = window.location.pathname.split('/');
  let page;

  let sections = ["work", "play", "gallery"];
  if (sections.indexOf(slug) > 0) {
    page = (parts.length >= 3) ? LoadByPropKey(state[slug], 'slug', parts[2]) : LoadByPropKey(state.section, 'route', (slug === '/') ? 'home' : slug);
  } else {
    page = LoadByPropKey(state.section, 'route', (slug === '/') ? 'home' : slug);
  }

  return {
    loading: state.loading,
    theme: state.theme,
    page: page
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ setAppLoading, changeTheme }, dispatch)
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Layout));
