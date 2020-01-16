// ==========================================================================
// Stripes
// If scroller adjusts body height breaks stripes height.
// backgroundColor="#3732a1" borderColor="#121212"
// ==========================================================================
import React, {Component} from 'react';

class Stripes extends Component {

    constructor(props) {
        super(props);
        this.backgroundColor = (props.backgroundColor) ? props.backgroundColor : false;
        this.borderColor = (props.borderColor) ? props.borderColor : false;
    }

    componentDidMount() {
        this.createChildren();
        this.onEnable();
    }

    createChildren() {
        this.$el = document.querySelector('.stripes');
        this.$stripes = document.querySelectorAll('.stripe');
    }

    onEnable() {
        if (this.backgroundColor) {
            this.$el.style.backgroundColor = this.backgroundColor;
        }
        if (this.borderColor) {
            for (let i = 0, total = this.$stripes.length; i < total; i++) {
                this.$stripes[i].style.borderLeft = '1px solid ' + this.borderColor;
            }
        }
    }
      
    render() {
      return (
          <div className="container-fluid stripes">
            <div className="row">
              <div className="col-10 offset-1">
                <div className="row">
                  <div className="col-6 col-md-2 stripe">
                    <div className="session-line gray"></div>
                  </div>
                  <div className="col-md-2 stripe hidden-sm-down">
                    <div className="session-line"></div>
                  </div>
                  <div className="col-md-2 stripe hidden-sm-down">
                    <div className="session-line gray"></div>
                  </div>
                  <div className="col-md-2 stripe hidden-sm-down">
                    <div className="session-line"></div>
                  </div>
                  <div className="col-md-2 stripe hidden-sm-down">
                    <div className="session-line gray"></div>
                  </div>
                  <div className="col-6 col-md-2 stripe">
                    <div className="session-line"></div>
                    <div className="session-line gray"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      );
    }
}

export default Stripes;