// ==========================================================================
// Single Block
// ==========================================================================
import React, {Component} from 'react';
import PropTypes from "prop-types";
import classNames from 'classnames';

// components
import MediaImage from '../../../media/image';
import MediaPicture from '../../../media/picture';

class Dual extends Component {

    // eslint-disable-next-line
    constructor(props) {
        super(props);
    }

    static defaultProps = {
        text: [],
        media: '',
        src: ''
    }

    static propTypes = {
        text: PropTypes.array.isRequired,
        media: PropTypes.string.isRequired,
        srcset: PropTypes.array.isRequired
    }

    render() {

      const {styles, text, srcset} = this.props;

      const mediaType = srcset[0]['type'];

      const selectors = classNames('section block-dual', styles.join(' '));

      const left = srcset[0]['breakpoints'][0]['left'];
      const right = srcset[0]['breakpoints'][0]['right'];

      const leftTitle = text[0].left[0].title;
      const leftDescription = text[0].left[0].desc;

      const rightTitle = text[0].right[0].title;
      const rightDescription = text[0].right[0].desc;

      return (
          <div className={selectors}>
            <div className="contains">
              <div className="row block-dual">
                <div className="col-lg-6 style-up column-media"> 
                  {leftTitle && <h2 className="h5 desc" dangerouslySetInnerHTML={{__html: leftTitle}}/>}
                  {leftDescription && <p dangerouslySetInnerHTML={{__html: leftDescription}}/>}
                  {mediaType === 'image' && <MediaImage title={leftTitle} srcset={left}/>}
                  {mediaType === 'picture' && <MediaPicture title={leftTitle} srcset={left}/>}
                </div>
                <div className="col-lg-6 style-down column-media"> 
                  {mediaType === 'image' && <MediaImage title={rightTitle} srcset={right}/>}
                  {mediaType === 'picture' && <MediaPicture title={rightTitle} srcset={right}/>}
                  {rightTitle && <h2 className="h5 desc" dangerouslySetInnerHTML={{__html: rightTitle}}/>}
                  {rightDescription && <p dangerouslySetInnerHTML={{__html: rightDescription}}/>}
                </div>
              </div>
            </div>
          </div>
      );
    }

}

export default Dual;
