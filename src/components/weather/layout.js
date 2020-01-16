// ==========================================================================
// Weather Presentation
// ==========================================================================
import React from 'react';
import PropTypes from 'prop-types';

const WeatherLayout = ({city, state, country, temp, ...props}) => (
  <div className="open-weather" data-country={country}>
    <div className="open-weather-wrap"> 
      <span className="temperature">{temp}<i>°</i></span> 
      <span className="location">{city}, {state}</span> 
    </div>
  </div>
);

WeatherLayout.propTypes = {
  city: PropTypes.string,
  state: PropTypes.string,
  country: PropTypes.string,
  temp: PropTypes.number
};

WeatherLayout.defaultProps = {
  city: 'Dallas',
  state: 'TX',
  country: 'USA',
  temp: '0'
};

export default WeatherLayout;
