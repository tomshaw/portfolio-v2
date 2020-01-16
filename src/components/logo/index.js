// ==========================================================================
// MainLogo SVG
// ==========================================================================
import React, {Component} from 'react';
import {Link} from 'react-router-dom';

// utilities
import emitter from '../../base/emitter';

class MainLogo extends Component {

    componentDidMount() {
        this.createChildren();
        this.setupHandlers();
        this.onEnable();
    }

    createChildren() {
        this.$el = document.querySelector('.js-main-logo');
    }

    setupHandlers() {
        this.handleOnHover = this.onLogoHover.bind(this);
        this.handleOnClick = this.onLogoClick.bind(this);
    }

    onEnable() {
        this.$el.addEventListener('click', this.handleOnClick, false);
        this.$el.addEventListener('mouseenter', this.handleOnHover, false);
        this.$el.addEventListener('mouseleave', this.handleOnHover, false);
    }

    onLogoClick(event) {
        let path = window.location.pathname;
        if (path !== '/') {
            emitter.emit("page:ready", false);
        }
    }

    onLogoHover() {
        this.$el.classList.toggle('rotate');
    }

    render() {
      const {color} = this.props; // scrolled
      return (
        <Link to="/" className="logo js-main-logo" title="Tom Shaw Creative Portfolio">
          <svg id="svg-main-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 60">
            <g>
	          <path className="t" style={{fill: color}} d="M16.2,17.9H1.6V4.6h45.1v13.3H32.2v38.6h-16V17.9z"/>
	          <path className="o" style={{fill: color}} d="M77.4,3.4c15.8,0,26.3,11.3,26.3,27.2c0,15.9-10.5,27.2-26.3,27.2c-15.8,0-26.3-11.3-26.3-27.2C51.1,14.7,61.6,3.4,77.4,3.4z M77.4,44.8c4.1,0,10.3-2.7,10.3-14.3c0-11.6-6.3-14.3-10.3-14.3c-4.1,0-10.3,2.7-10.3,14.3C67.1,42.1,73.3,44.8,77.4,44.8z"/>
	          <path className="m" style={{fill: color}} d="M110.4,4.6h22.8l7.4,30.5h0.1l7.4-30.5h22.8v51.9h-15.1V23.2h-0.1l-9,33.3h-11.9l-9-33.3h-0.1v33.3h-15.1V4.6z"/>
	          <path className="s" style={{fill: color}} d="M191.8,39.1c0,1.3,0.2,2.5,0.6,3.4c1.2,3.1,4.7,3.8,7.6,3.8c2.6,0,6.6-0.9,6.6-4.7c0-2.7-2.3-3.4-11.2-6c-8.2-2.3-17.6-4.6-17.6-15.1c0-12,10.3-17.2,20.9-17.2c11.3,0,21.2,4.3,21.7,16.9h-15.1c0.3-2-0.6-3.3-1.9-4.1c-1.3-0.9-3.1-1.3-4.7-1.3c-2.2,0-5.7,0.6-5.7,3.5c0.3,3.7,7.7,4.5,15.1,6.5c7.3,2,14.6,5.5,14.6,15c0,13.5-12.4,17.9-24,17.9c-5.9,0-22.7-2.1-22.8-18.7H191.8z"/>
	          <path className="h" style={{fill: color}} d="M227.6,4.6h16v18h15v-18h16v51.9h-16V36h-15v20.6h-16V4.6z"/>
	          <path className="a" style={{fill: color}} d="M297.2,4.6h15.6l18.9,51.9h-16.6l-2.2-7.4h-16.5l-2.3,7.4h-16.1L297.2,4.6z M309.8,38l-4.7-16H305l-5,16H309.8z"/>
	          <path className="w" style={{fill: color}} d="M384.4,56.5h-15.6l-5.6-31.6h-0.1l-5.5,31.6H342L327.9,4.6h15.7l6.3,32.1h0.1l6.3-32.1h14.1l6.1,32.5h0.1l6.5-32.5H399L384.4,56.5z"/>
            </g>
          </svg>
        </Link>
      );
    }
}

export default MainLogo;
