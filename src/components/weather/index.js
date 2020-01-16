// ==========================================================================
// Weather Logic
// ==========================================================================
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import WeatherLayout from './layout';

class OpenWeatherMap extends Component {

  constructor() {
    super();
    this.state = {
      city: null,
      state: null,
      country: null,
      temp: null,
      scale: "fahrenheit" // celsius or fahrenheit
    };
  }

  componentDidMount() {

    const { city, state, country, appid, units } = this.props;

    axios.get('http://api.openweathermap.org/data/2.5/weather', {
      params: {
        q: `${city},${country}`,
        APPID: appid,
        units,
      },
    }).then((response) => {
      const { data } = response;
      this.setState({ 
          city: data.name,
          state: state,
          country: country, 
          temp: this.convertTemperature(data.main.temp) 
        });
    });
  }

  render() {
    const { city, state, country, temp } = this.state;
    return <WeatherLayout city={city} state={state} country={country} temp={temp} />;
  }

  convertTemperature(kelvin) {
    return Math.round(this.state.scale === 'celsius' ? (kelvin - 273.15) : (kelvin * 9 / 5 - 459.67));
  }
}

OpenWeatherMap.propTypes = {
  city: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  country: PropTypes.string,
  appid: PropTypes.string.isRequired,
  units: PropTypes.string,
};

OpenWeatherMap.defaultProps = {
  city: 'Dallas',
  state: 'TX',
  country: 'US',
  appid: '',
  units: 'kelvin',
};

export default OpenWeatherMap;
