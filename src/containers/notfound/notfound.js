// ==========================================================================
// Music
// ==========================================================================
import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import classNames from 'classnames';

// actions
import {changeTheme} from '../../actions/themeActions';
import {setAppLoading} from '../../actions/loadingActions';

// utilities
import {LoadByPropKey} from '../../base/utils';

// components
import Intro from '../../components/intro';

class NotFound extends Component {

    // eslint-disable-next-line
    constructor(props) {
        super(props);
    }

    render() {
        const {page} = this.props;
        const selector = classNames('page', page.element);
        return (
          <article className={selector}>
            <Intro description={page.description} />
          </article>
        );
    }
}

function mapStateToProps(state, ownProps) {
    const page = LoadByPropKey(state.section, 'route', '404');
    return {
        loading: state.loading,
        page: page
    };
}

function mapDispatchToProps(dispatch) {
    return {
      actions: bindActionCreators({changeTheme, setAppLoading}, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(NotFound);
