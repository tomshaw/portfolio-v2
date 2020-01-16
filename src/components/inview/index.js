// ==========================================================================
// WaypointInView
// ==========================================================================
import React, { Component } from 'react';
import Waypoint from 'react-waypoint';

class WaypointInView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isInView: false
    }
    this.onEnter = this.onEnter.bind(this);
  }

  onEnter({ previousPosition }) {
    console.log(previousPosition, 'previousPosition');
    if (previousPosition === Waypoint.inside) {
      this.setState({
          isInView: true
      });
    }
  }

  render() {
    return (
      <div {...this.props}>
        <Waypoint onEnter={this.onEnter}></Waypoint>
        {this.props.children({ isInView: this.state.isInView })}
      </div>
    );
  }
}

export default WaypointInView;
