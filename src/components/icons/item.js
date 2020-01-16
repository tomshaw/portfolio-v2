// ==========================================================================
// NavItem
// ==========================================================================
import React from 'react';
import PropTypes from 'prop-types';
//import {Link} from 'react-router-dom';
import styled from 'styled-components';

//const StyledLink = styled(Link)`
const StyledLink = styled.a`
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 30px;
  height: 30px;
  margin: 15px 4px 5px 4px;
  cursor: pointer;
  font-size: .6rem;
  text-decoration: none;
  text-shadow: 0 1px 0 rgba(0, 0, 0, 0.2);
  -webkit-transition: all 0.15s ease;
  transition: all 0.15s ease;
  i {
    position: relative;
    top: 1px;
  }
  &:hover {
    color: #fff;
  }
`

const Item = ({active, styles, href, title, type, ...rest}) => (
  <StyledLink href={href} className={styles.outer} title={title} type={type}>
    {type === "normal" && <i className={styles.inner}></i>}
    {type === "email" && <i className={styles.inner}></i>}
    {type === "audio" && 
    <i className={styles.inner}>
      <div className="audio-icon-bg"></div>
      <div className="audio-icon-bg"></div>
      <div className="audio-icon-bg"></div>
      <div className="audio-icon-bg"></div>
      <div className="audio-icon-bg"></div>
      <div className="audio-icon-bg"></div>
      <div className="audio-icon-bg"></div>
      <div className="audio-icon-bg"></div>
      <div className="audio-icon-bg"></div>
    </i>
    }
  </StyledLink>
);

Item.propTypes = {
  active: PropTypes.bool.isRequired,
  styles: PropTypes.object.isRequired,
  href: PropTypes.string.isRequired,
  title: PropTypes.string,
  type: PropTypes.string
};

Item.defaultProps = {
  active: false,
  styles: {
      outer: "",
      inner: ""
  },
  href: "/",
  title: "",
  type: "normal"
};

export default Item;
