// ==========================================================================
// Preloader
// ==========================================================================
import React, {Component} from 'react';
import createjs from '../../../node_modules/createjs-preloadjs/lib/preloadjs-NEXT.combined';

class Loader extends Component {

    constructor(props) {
        super(props);
        this.manifest = props.manifest;
    }

    componentDidMount() {
        this.createChildren();
        this.setupHandlers();
        this.onEnable();
    }

    createChildren() {
        this.$loader = document.querySelector('.loader');
    }

    setupHandlers() {
        this.handleProgress = this.onProgress.bind(this);
        this.handleComplete = this.onComplete.bind(this);
    }

    onEnable() {
        const queue = new window.createjs.LoadQueue(true);
        queue.setMaxConnections(2);
        queue.installPlugin(createjs.Sound);
        queue.on('progress', this.handleProgress);
        queue.on('complete', this.handleComplete);
        queue.loadManifest(this.manifest);
    }

    componentWillUnmount() {
        this.handleProgress = null;
        this.handleComplete = null;
    }

    onProgress(event) {
        //let loaded = Math.ceil(event.loaded * 100);
    }

    onComplete(event) {
        setTimeout(() => {
            this.$loader.style.opacity = 0;
            this.props.setAppLoading(false);
        }, 1e3);
    }

    render() {
        return (
          <div className="loader"><span></span></div>
        );
    }
}

export default Loader;
