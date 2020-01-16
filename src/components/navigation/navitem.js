// ==========================================================================
// NavItem
// ==========================================================================
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import {Link} from 'react-router-dom';

const active = 'is-active';

const NavItemWrapper = styled.li`
  display: inline-block;
  padding-right: 1rem;
  &:last-child {
		padding-right: 0;
	}
`;

const StyledNavLink = styled(Link).attrs({active})`
  font-family: 'Roboto', 'san-serif';
  font-weight: 500;
  font-size: 24px;
  &.${active} {
    text-decoration: underline;
  }
  @media (max-width: 992px) {
    font-size: 18px;
  }
`

const NavItem = ({children, href, ...rest}) => (
  <NavItemWrapper>
    <StyledNavLink exact="true" to={href}>{children}</StyledNavLink>
  </NavItemWrapper>
);

NavItem.propTypes = {
  children: PropTypes.node,
  href: PropTypes.string.isRequired
};

NavItem.defaultProps = {
  children: null
};

export default NavItem;
