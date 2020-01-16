// ==========================================================================
// Block Manager
// ==========================================================================
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// blocks
import BlockText from './text';
import BlockSingle from './media/single';
import BlockDual from './media/dual';
import BlockPair from './media/pair';
import BlockVideo from './media/video';

class BlockManager extends Component {

    constructor(props) {
        super(props);
        this.key = 0;
    }

    create(data) {

        const blockType = data.type;

        const styles = data.styles;

        if (blockType === 'text') {
            this.key++;
            return (
              <BlockText key={this.key} styles={styles} title={data.title} desc={data.desc} align={data.align} />);
        }

        if (blockType === 'single') {
            this.key++;
            return (<BlockSingle key={this.key} styles={styles} title={data.title} srcset={data.media_sets} />);
        }

        if (blockType === 'pair') {
            this.key++;
            return (<BlockPair key={this.key} styles={styles} title={data.title} desc={data.desc} srcset={data.media_sets} halign={data.halign} valign={data.valign} />);
        }

        if (blockType === 'dual') {
            this.key++;
            return (<BlockDual key={this.key} styles={styles} text={data.text} srcset={data.media_sets} />);
        }

        if (blockType === 'video') {
            this.key++;
            return (
              <BlockVideo 
                  key={this.key}
                  styles={styles} 
                  poster={data.poster} 
                  bgcolor={data.bgcolor} 
                  controls={data.controls} 
                  autoplay={data.autoplay} 
                  loop={data.loop} 
                  playsinline={data.playsinline} 
                  srcset={data.media_sets} 
              />
            );
        }

    }

    render() {
        const {content} = this.props;
        return (
          <div>
            {content.map(this.create, this)}
          </div>
        );
    }
}

BlockManager.propTypes = {
    content: PropTypes.array.isRequired
};

BlockManager.defaultProps = {
  content: []
};

export default BlockManager;
