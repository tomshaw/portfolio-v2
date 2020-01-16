// ==========================================================================
// Dual Block
// ==========================================================================
import React, {Component} from 'react';
import PropTypes from "prop-types";
import classNames from 'classnames';

// components
import MediaImage from '../../../media/image';
import MediaPicture from '../../../media/picture';

class Pair extends Component {

    // eslint-disable-next-line
    constructor(props) {
        super(props);
    }

    /**
     * halign = left or right
     * valign = flex-align-start/-center/-bottom
     */
    static defaultProps = {
        title: '',
        desc: '',
        media: '',
        srcset: [],
        halign: 'left',
        valign: 'flex-align-start'
    }

    static propTypes = {
        title: PropTypes.string,
        desc: PropTypes.string,
        media: PropTypes.string.isRequired,
        srcset: PropTypes.array.isRequired,
        halign: PropTypes.string,
        valign: PropTypes.string
    }

    render() {

        const {styles, title, desc, srcset, halign, valign} = this.props;

        const mediaType = srcset[0]['type'];

        const selectors = classNames('section block-pair', styles.join(' '));

        const source = srcset[0]['breakpoints'];

        let flexAlign = (valign === 'start') ? 
            { 'flex-align-start': true } : (valign === 'center') ? 
            { 'flex-align-center': true } : (valign === 'bottom') ? 
            { 'flex-align-bottom': true } : { 'flex-align-start': true };

        let textClass = (halign === 'right') ? classNames('push-lg-7 col-lg-5 column-text padding-bottom-40', flexAlign) : classNames('col-lg-5 column-text padding-bottom-40', flexAlign);

        let mediaClass = (halign === 'right') ? classNames('col-lg-7 pull-lg-5 column-media') : classNames('col-lg-7 column-media');

        return (
          <div className={selectors}>
            <div className="contains">
              <div className="row flex flex-centered">
                <div className={textClass}>
                  {title && <h2 className="h5" dangerouslySetInnerHTML={{__html: title}}/>}
                  {desc && <p dangerouslySetInnerHTML={{__html: desc}}/>}
                </div>
                <div className={mediaClass}> 
                  {mediaType === 'image' && <MediaImage title={title} srcset={source}/>}
                  {mediaType === 'picture' && <MediaPicture title={title} srcset={source}/>} 
                </div>
              </div>
            </div>
          </div>
        );
    }
}

export default Pair;
