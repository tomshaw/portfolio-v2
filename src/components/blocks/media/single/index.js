// ==========================================================================
// Single Block
// ==========================================================================
import React, {Component} from 'react';
import PropTypes from "prop-types";
import classNames from 'classnames';

// components
import MediaImage from '../../../media/image';
import MediaPicture from '../../../media/picture';

class Single extends Component {

    // eslint-disable-next-line
    constructor(props) {
        super(props);
    }

    static defaultProps = {
        title: '',
        media: '',
        srcset: []
    }

    static propTypes = {
        title: PropTypes.string,
        media: PropTypes.string,
        srcset: PropTypes.array.isRequired
    }

    render() {

      const {styles, title, srcset} = this.props;

      const mediaType = srcset[0]['type'];

      const source = srcset[0]['breakpoints'];

      const selectors = classNames('section block-single', styles.join(' '));

      return (
          <div className={selectors}>
            <div className="contains">
              <div className="row">
                <div className="col-sm-12 column-media"> 
                  {mediaType === 'image' && <MediaImage title={title} srcset={source}/>}
                  {mediaType === 'picture' && <MediaPicture title={title} srcset={source}/>}
                </div>
              </div>
            </div>
          </div>
      );
    }

}

export default Single;
