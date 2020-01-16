// ==========================================================================
// Header
// ==========================================================================
import React from 'react';
import PropTypes from 'prop-types';

import {
  compose,
  pure,
  lifecycle,
  withHandlers,
  withState,
  withProps,
} from 'recompose';

import {withRouter} from 'react-router';

// components
import HorizontalRule from '../rule';
import Logo from '../logo';
import Nav from '../navigation';

const hoc = compose(
    withRouter,
    withState('scrolled', 'setScrolled', false),
    withProps(({location}) => ({
      isHome: location.pathname === '/',
    })),
    withHandlers({
      handleScroll: ({setScrolled, scrolled}) => () => {
        const scrollY = typeof window.scrollY === 'undefined' ? window.pageYOffset : window.scrollY;
        const newScrolled = scrollY > 150;
        if (scrolled !== newScrolled) {
          setScrolled(newScrolled);
        }
      },
    }),
    lifecycle({
      componentDidMount() {
        const { handleScroll } = this.props;
        window.addEventListener('scroll', handleScroll);
      },
      componentWillUnmount() {
        const { handleScroll } = this.props;
        window.removeEventListener('scroll', handleScroll);
      },
    }),
    pure,
);
  
const Header = ({title, navigation, typography, isHome, scrolled}) => (
  <header className="header">
    <div className="contains">
      <div className="row">
        <div className="col-lg-6">
          <Logo isHome={!isHome} scrolled={scrolled} color="#111111" />
        </div>
        <div className="col-lg-6">
          <Nav />
        </div>
        {typography && <div className="col-md-12 text-overflow">
          <HorizontalRule />
          <h1 className="creative"> 
            <span className="bold">{title[0]}</span> 
            <span className="lite">{title[1]}</span> 
          </h1>
          <HorizontalRule />
        </div>}
      </div>
    </div>
  </header>
);

Header.propTypes = {
    title: PropTypes.array.isRequired,
    navigation: PropTypes.bool,
    typography: PropTypes.bool,
    isHome: PropTypes.bool,
    scrolled: PropTypes.bool
};
  
Header.defaultProps = {
    title: '',
    navigation: true,
    typography: true,
    isHome: true,
    scrolled: false
};
  
export default hoc(Header);
