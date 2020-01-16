// ==========================================================================
// Introduction
// ==========================================================================
import React from 'react';
import PropTypes from 'prop-types';

const Intro = ({description}) => (
  <div className="section block-intro">
    <div className="contains">
      <div className="row">
        <div className="col-md-8 col-lg-7"> 
          <p>{description}</p>
        </div>
      </div>
    </div>
  </div>
);

Intro.propTypes = {
  description: PropTypes.string
};

Intro.defaultProps = {
  description: ''
};

export default Intro;
