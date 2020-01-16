// ==========================================================================
// Image
// <img className="lazyload responsive" data-sizes="auto" data-src={src} data-srcset={set} alt={title} title={title} />
// ==========================================================================
import React, { Component } from 'react';
import PropTypes from "prop-types";

class Image extends Component {

    // eslint-disable-next-line
    constructor(props) {
        super(props);
    }

    static defaultProps = {
        srcset: []
    }

    static propTypes = {
        srcset: PropTypes.array.isRequired
    }

    createSource(set) {
        return set[set.length-1].source;
    }

    createSourceSet(set) {
        let data = [];
        for (let i = 0, total = set.length; i < total; i++) {
            data.push(set[i].source + ' ' + set[i].width);
        }
        return data.join(',');
    }

    render() {
        const {srcset} = this.props;
        const src = this.createSource(srcset);
        const set = this.createSourceSet(srcset);
        const sizes = srcset[0]['sizes'];
        return (/* <img sizes={sizes} srcSet={set} src={src} alt={title} title={title} /> */
            <img className="responsive" sizes={sizes} srcSet={set} src={src} alt="Creative Portfolio" />
        );
    }
}

export default Image;