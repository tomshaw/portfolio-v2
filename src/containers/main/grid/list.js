// ==========================================================================
// Grid List
// ==========================================================================
import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import classNames from 'classnames';
import $ from 'jquery';
import imagesLoaded from 'imagesloaded';

// actions
import {changeTheme} from '../../../actions/themeActions';
import {setAppLoading} from '../../../actions/loadingActions';

// utilities
import {LoadByPropKey, immutableReverse} from '../../../base/utils';

// components
import Intro from '../../../components/intro';
import GridColumn from '../../../components/grid';
import Scroller from '../../../components/scroller';

class List extends Component {

    componentWillUnmount() {
      if (this.scroll) {
          this.scroll.dispose();
      }
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

      const {page, grid} = this.props;

      const rows = immutableReverse(grid);

      const selector = classNames('page', page.element);

      return (
        <article className={selector}>
          <Intro description={page.description} />
          <GridColumn rows={rows} />
        </article>
      );

    }

}

function mapStateToProps(state, ownProps) {
    const path = ownProps.match.path.split('/')[1];
    const page = (path && state.section.length) ? LoadByPropKey(state.section, 'route', path) : LoadByPropKey(state.section, 'route', 'home');
    return {
        page: page,
        grid: state[path],
        loading: state.loading
    };
}

function mapDispatchToProps(dispatch) {
    return {
      actions: bindActionCreators({changeTheme, setAppLoading}, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(List);
