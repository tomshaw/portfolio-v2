// ==========================================================================
// IconList
// ==========================================================================
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const IconList = styled.div`
  display: flex;
  justify-content: flex-end;
  @media (max-width: 768px) {
    justify-content: flex-start;
	}
`;

const List = ({children}) => (
  <IconList>
    {children}
  </IconList>
);

List.propTypes = {
    children: PropTypes.node
};

List.defaultProps = {
    children: null
};

export default List;
