// ==========================================================================
// Header
// ==========================================================================
import React, {Component} from 'react';

// components
import Nav from './nav';
import NavItem from './navitem';

class Menu extends Component {

    // eslint-disable-next-line
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.createChildren();
        this.setupHandlers();
        this.onEnable();
    }

    createChildren() {
        this.$el = document.querySelector(".menu");
        this.$links = this.$el.querySelectorAll('li a');
    }

    setupHandlers() {
        this._handleLinkClick = this.onLinkClickHandler.bind(this);
    }

    onEnable() {
        for (let i = 0, total = this.$links.length; i < total; i++) {
            this.$links[i].addEventListener('click', this._handleLinkClick, false);
        }
        this.handleActive();
    }

    onLinkClickHandler(event) {
        let target = event.target;
        if (!target.classList.contains('is-active')) {
            this.clearActive();
            target.classList.add('is-active');
        }
    }

    handleActive() {
        let path = window.location.pathname;
        let parts = path.split('/');

        if (parts.length >= 3) {
            path = '/' + parts[1];
        }

        this.clearActive();

        this.setActive(path);
    }

    setActive(url) {
      for (let i = 0, total = this.$links.length; i < total; i++) {
        let href = this.$links[i].href.replace(/^.*\/\/[^\/]+/, ''); // eslint-disable-line
        if (href === url) {
          this.$links[i].classList.add('is-active');
        }
      }
    }

    clearActive() {
        for (let i = 0, total = this.$links.length; i < total; i++) {
            this.$links[i].classList.remove('is-active');
        }
    }

    render() {
      return (
        <Nav>
          <NavItem data-index="01" id="about" href="/about">About</NavItem>
          <NavItem data-index="02" id="work" href="/work">Work</NavItem>
          <NavItem data-index="03" id="play" href="/play">Play</NavItem>
          <NavItem data-index="04" id="gallery" href="/gallery">Gallery</NavItem>
          <NavItem data-index="05" id="playlist" href="/playlist">Playlist</NavItem>
        </Nav>
      );
    }
}

export default Menu;
