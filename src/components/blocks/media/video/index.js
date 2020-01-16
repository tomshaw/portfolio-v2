// ==========================================================================
// Single Block
// ==========================================================================
import React, {Component} from 'react';
//import PropTypes from "prop-types";
import classNames from 'classnames';

// components
import MediaVideo from '../../../media/video';

class Video extends Component {

    // eslint-disable-next-line
    constructor(props) {
        super(props);
    }

    render() {

      const props = this.props;

      const selectors = classNames('section block-video', props.styles.join(' '));

      return (
          <div className={selectors}>
            <div className="contains">
              <div className="row justify-content-md-start">
                <div className="col-md-12 column-media"> 
                  <MediaVideo {...props} />
                </div>
              </div>
            </div>
          </div>
      );
    }

}

export default Video;
