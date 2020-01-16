// ==========================================================================
// Breakpoints @see https://www.lullabot.com/blog/article/importing-css-breakpoints-javascript
// ==========================================================================
import {Component} from 'react';
import {debounce, client} from '../../base/utils';
import emitter from '../../base/emitter'

class Breakpoints extends Component {

    constructor(props) {
        super(props);
        this.log = props.log;
    }

    componentDidMount() {
        this.createChildren();
        this.setupHandlers();
        this.onEnable();
    }

    createChildren() {
        this.breakpoints = {};
        this.breakpoints.refresh = function () {
            this.value = window.getComputedStyle(document.querySelector('body'), ':before').getPropertyValue('content').replace(/['"]+/g, '');
        };
    }

    setupHandlers() {
        this._handleWindowResize = this.onResizeHandler.bind(this);
    }

    onEnable() {
        window.addEventListener('resize', debounce(this._handleWindowResize, 250), true);
    }

    render() {
        return null;
    }

    onResizeHandler(event) {

        this.breakpoints.refresh();

        emitter.emit('page:resize', {
            height: client().height,
            width: client().width
        });

        if (this.log) {
            console.info(this.breakpoints.value, 'breakpoints');
        }
    }

}

export default Breakpoints;
