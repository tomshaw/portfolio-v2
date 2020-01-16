// ==========================================================================
// Pull Down Menu - Component Should be added to layout.
// ==========================================================================
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import $ from 'jquery';
import charming from 'charming';
import sniffer from '../../base/sniffer';

// components
//import Clock from '../clock';
import Weather from '../weather';

class Menu extends Component {
  
  // eslint-disable-next-line
  constructor(props) {
    super(props);
  }

  componentDidMount() {

    const menu = $(".pull-menu");
    const icon = $(".burger");

    //if (!sniffer.isDesktop) {
        menu.on("click", (e) => {
            if (menu.hasClass("show")) {
              menu.removeClass("show navopen");
              icon.removeClass("is-open");
            } else {
              menu.addClass("show navopen");
              icon.addClass("is-open");
            }
        });
        //return;
    //}

    let mouseDown = false;
    let startY;
    let amount = 100;
    let release = 40;
    let pull = amount + release;

    menu.on("mousedown touchstart", (e) => {
        mouseDown = true;
        startY = e.pageY;
    });

    $(document).on("mouseup touchend", (e) => {
        if (mouseDown) {
            mouseDown = false;
        }
        menu.height(release);
    });

    $(document).on("mousemove touchmove", (e) => {
        if (mouseDown) {

            let diff = Math.max(0, e.pageY - startY);

            if (diff>pull) {
                diff = pull + (diff-pull)/(diff*0.01);
            }

            if (diff>amount) {
                menu.addClass("show navopen");
                icon.addClass("is-open");
            } else {
                menu.height(40+diff);
            }

        }
    });

    icon.on("click", (e) => {
        menu.removeClass("show navopen");
        icon.removeClass("is-open");
    });

    const element = document.querySelector('.vertical-text')
    charming(element, {
      tagName: 'span',
      classPrefix: 'letter'
    });
    
  }

  render() {
    
    return (
      <div className="pull-menu">
        <div className="contains">
          <div className="pull-menu-inner">
            <a className="burger"> <span className="icon"></span> </a>
            <div className="vertical-text info" style={{display: 'block'}}><p>tomshaw</p></div>
            <ul className="menu">
              <li><Link to="/about">About</Link></li>
              <li><Link to="/work">Work</Link></li>
              <li><Link to="/play">Play</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/playlist">Playlist</Link></li>
            </ul>
            <Weather city="dallas" state="TX" country="US" appid="46009d273852b68e063766d20f93c6a7" units="kelvin" />
          </div>
        </div>
      </div>
    );
  }
}
  
export default Menu;
