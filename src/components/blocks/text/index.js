// ==========================================================================
// Text Block
// ==========================================================================
import React, {Component} from 'react';
import PropTypes from "prop-types";
import classNames from 'classnames';

class Text extends Component {

    // eslint-disable-next-line
    constructor(props) {
        super(props);
    }

    static defaultProps = {
        title: '',
        desc: '',
        align: 'left'
    }

    static propTypes = {
        title: PropTypes.string,
        desc: PropTypes.string,
        align: PropTypes.string
    }

    render() {
      const {title, desc, align} = this.props;

      let alignClass = (align === 'left') ? 
          classNames('row justify-content-md-start') : (align === 'right') ? 
          classNames('row justify-content-md-end') : 
          classNames('row justify-content-md-center');

      return (
          <section className="section block-text padding" data-block="text">
            <div className="contains">
              <div className={alignClass}>
                <div className="col-md-8 column-text" style={{textAlign: align}}>
                  <h2 className="h5" dangerouslySetInnerHTML={{__html: title}}/>
                  <p dangerouslySetInnerHTML={{__html: desc}}/>
                </div>
              </div>
            </div>
          </section>
      );
    }
}

export default Text;
