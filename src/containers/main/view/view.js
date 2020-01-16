// ==========================================================================
// Play View
// ==========================================================================
import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import $ from 'jquery';
import imagesLoaded from 'imagesloaded';

// actions
import {changeTheme} from '../../../actions/themeActions';
import {setAppLoading} from '../../../actions/loadingActions';

// utilities
import {LoadByPropKey} from '../../../base/utils';

// components
import Intro from '../../../components/intro';
import BlockManager from '../../../components/blocks/manager';
import Scroller from '../../../components/scroller';

class View extends Component {

    // eslint-disable-next-line
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.element = $(this.props.selector);
        imagesLoaded(document.body, { background: true }, () => {
            this.initScroll();
        });
    }
        
    initScroll() {
        this.scroll = new Scroller({
            onScroll: this.onScroll.bind(this)
        });
    }

    onScroll() {
        this.scrollTop = window.pageYOffset || document.documentElement.scrollTop
    }

    render() {

        const {page} = this.props;

        const selector = classNames('page', page.element);

        return (
          <article className={selector}>
            <Intro description={page.description} />
            <BlockManager content={page.content} />
          </article>
      );

    }
}

View.propTypes = {
    page: PropTypes.object.isRequired
};

View.defaultProps = {
    page: []
};

function mapStateToProps(state, ownProps) {
    const id = (typeof ownProps.match.params.id !== 'undefined') ? ownProps.match.params.id : false;
    const path = ownProps.match.path.split('/')[1];
    const page = (id && state[path].length) ? LoadByPropKey(state[path], 'slug', id) : {};
    return {
        page: page,
        loading: state.loading,
    };
}

function mapDispatchToProps(dispatch) {
    return {
      actions: bindActionCreators({changeTheme, setAppLoading}, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(View);
