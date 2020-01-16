// ==========================================================================
// Nav
// ==========================================================================
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const NavOuter = styled.nav`
    display: block;
    background-color: transparent;
    position: relative;
    margin: 15px 0 0 0;
    padding: 0;
    cursor: pointer;
    overflow: hidden;
    z-index: 10;
    @media (min-width: 992px) {
      min-height: 70px;
      margin: 0;
	  }
`;

const NavInner = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 20px 0 10px 0;
    overflow: hidden;
    @media (min-width: 992px) {
		  text-align: right;
	  }
`;

const Nav = ({children}) => (
  <NavOuter className="menu">
    <NavInner>
      {children}
    </NavInner>
  </NavOuter>
);

Nav.propTypes = {
    children: PropTypes.node
};

Nav.defaultProps = {
    children: null
};

export default Nav;
