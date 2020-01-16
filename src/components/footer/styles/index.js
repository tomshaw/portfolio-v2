// ==========================================================================
// Styles
// ==========================================================================
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const StyledList = styled.ul`
  padding-left: 0;
  margin-top: 20px;
`;

const StyledItem = styled.li`
  list-style-type: none;
  color: #231f20 !important; 
  font-family: "Open Sans","sans-serif";
  font-size: .8rem;
  margin: 0.3rem 0;
`;

const StyledLink = styled.a`
  color: #231f20 !important; 
  font-family: "Roboto","sans-serif";
  font-weight: 900;
  font-size: .8rem;
`;

const StyledRouterLink = styled(Link)`
  color: #231f20 !important; 
  font-family: "Roboto","sans-serif";
  font-weight: 900;
  font-size: .8rem;
`;

export {
  StyledList, 
  StyledItem, 
  StyledLink,
  StyledRouterLink
}