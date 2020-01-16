// ==========================================================================
// GridColumn
// ==========================================================================
import React from 'react'
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

// components
import MediaImage from '../media/image';
import MediaPicture from '../media/picture';

const GridColumn = ({rows}) => {

    const create = (row, index) => {
              
        let overlayStyle = {
            background: "linear-gradient(135deg, " + row.gradient_start + " 0%, " + row.gradient_end + " 100%)",
        }

        const mediaType = row.media_sets[0]['type'];

        const srcset = row.media_sets[0]['breakpoints'];

        const displayLink = (row.resource) ? true : false;

        const target = (row.target) ? row.target : false;

        let header = null;
        if (displayLink) {
          if (target) {
            header = <h2><Link to={row.resource} target={target} title={row.title}>{row.title}</Link></h2>
          } else {
            header = <h2><Link to={row.resource} title={row.title}>{row.title}</Link></h2>
          }
        } else {
          header = <h2>{row.title}</h2>
        }

        let span = null;
        if (displayLink) {
          if (target) {
            span = <span><Link to={row.resource} target={target} title={row.title}>View project</Link></span>
          } else {
            span = <span><Link to={row.resource} title={row.title}>View project</Link></span>
          }
        }
      
        return (
          <div key={index} className="col-md-6">
            <div className="block">

              <div className="info"> 
                <small>{row.tagline}</small>
                {header}
                <p>{row.description}</p>
                {span}
              </div>

              {mediaType === 'video' && 
                <div className="media js-media">
                  <div className="overlay" style={overlayStyle}></div>
                  <video autoPlay>
                    <source src={srcset} type="video/mp4"/>
                    Your browser doesn't support HTML5 video tag.
                  </video>
                </div>}

              {mediaType === 'image' && 
                <div className="media js-media">
                  <div className="overlay" style={overlayStyle}></div>
                  <MediaImage title={row.title} srcset={srcset}/>
                </div>}

              {mediaType === 'picture' && 
                <div className="media js-media">
                  <div className="overlay" style={overlayStyle}></div>
                  <MediaPicture title={row.title} srcset={srcset}/>
                </div>}

            </div>
          </div>
        );
    }

    return (
      <div className="section block-grid">
        <div className="contains">
          <div className="row">  
            { rows.map(create, this) }
          </div>
        </div>
      </div>
    );

};

GridColumn.propTypes = {
    rows: PropTypes.array.isRequired
};

GridColumn.defaultProps = {
  rows: []
};

export default GridColumn;
