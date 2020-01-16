// ==========================================================================
// Clock Presentation
// ==========================================================================
import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

function rotationBuilder(degree) {
  const rotation = keyframes`
    to {
        -webkit-transform: rotate(${degree + 360}deg);
        -moz-transform: rotate(${degree + 360}deg);
        transform: rotate(${degree + 360}deg);
    }
  `;
  return rotation;
}

const ClockWrapper = styled.div`
width: 60px;
height: 60px;
position: absolute;
top: 10px;
left: 50%;
transform: scale(0) translateX(-50%);
opacity: 0;
margin-left: -30px;
`
const ClockBody = styled.div`
position: relative;
float: right;
width: 60px;
height: 60px;
border-radius: 50%;
&:before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 4px;
  height: 4px;
  margin: -2px 0 0 -2px;
  background: #fff;
  border-radius: 4px;
}
`
const Hands = styled.div`
position: absolute;
width: 1px;
left: 29px;
transform-origin: bottom center;
`
const SecondsDiv = Hands.extend`
top: 6px;
height: 22px;
background-color: rgba(255, 255, 255, .5);
animation: ${({seconds}) => `${rotationBuilder(seconds)} 60s steps(60, end) infinite;`};
`
const MinutesDiv = Hands.extend`
top: 6px;
height: 22px;
background-color: #fff;
animation: ${({minutes}) => `${rotationBuilder(minutes)} 3600s linear infinite`};
`
const HoursDiv = Hands.extend`
top: 14px;
height: 14px;
background-color: #fff;
animation: ${({hours}) => `${rotationBuilder(hours)} 43200s linear infinite`};
`
const SVG = styled.svg`
position: absolute;
top: -1px;
right: -1px;
width: 62px;
height: 62px;
`
const Circle = styled.circle`
fill: transparent;
stroke: #fff;
stroke-width: 5px;
`

const ClockLayout = ({seconds, minutes, hours, ...props}) => (
  <ClockWrapper className="wall-clock">
    <ClockBody>
      <HoursDiv className="hours" hours={hours} style={{transform: 'rotate(' + hours + 'deg)'}} />
      <MinutesDiv className="minutes" minutes={minutes} style={{transform: 'rotate(' + minutes + 'deg)'}} />
      <SecondsDiv className="seconds" seconds={seconds} style={{transform: 'rotate(' + seconds + 'deg)'}} />
    </ClockBody>
    <SVG viewBox="0 0 210 210" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <Circle cx="105" cy="105" r="100"/>
    </SVG> 
  </ClockWrapper>
);

ClockLayout.propTypes = {
  seconds: PropTypes.number.isRequired,
  minutes: PropTypes.number.isRequired,
  hours: PropTypes.number.isRequired
};

ClockLayout.defaultProps = {
  seconds: 0,
  minutes: 0,
  hours: 0
};

export default ClockLayout;
