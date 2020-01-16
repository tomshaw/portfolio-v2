// ==========================================================================
// Home
// ==========================================================================
import React, { Component } from 'react';
import {connect} from 'react-redux';
import classNames from 'classnames';

// utilities
import {LoadByPropKey} from '../../base/utils';

// components
import Intro from '../../components/intro';
import HorizontalRule from '../../components/rule';

class Home extends Component {

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
          <div className="contains">
            <div className="row">
              <div className="col-lg-12">
                <div className="portrait"> <img src="/assets/img/home/1.jpg" alt="Tom Shaw" title="Tom Shaw"/> </div>
                <HorizontalRule margin="18" />
              </div>
            </div>
          </div>
        </article>
	    )
    }

}

function mapStateToProps(state, ownProps) {
  const page = LoadByPropKey(state.section, 'route', 'home');
  return {
    loading: state.loading,
    page: page
  };
}

export default connect(mapStateToProps)(Home);
