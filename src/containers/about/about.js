// ==========================================================================
// Home
// ==========================================================================
import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import classNames from 'classnames';
import $ from 'jquery';
import timeago from 'timeago.js';

import {API_GITHUB_EVENTS_PUBLIC} from '../../base/constants';

// actions
import {changeTheme} from '../../actions/themeActions';
import {setAppLoading} from '../../actions/loadingActions';

// utilities
import {LoadByPropKey} from '../../base/utils';

// components
import HorizontalRule from '../../components/rule';

// data
import technical from '../../data/about/technical';
import primary from '../../data/about/primary';

import TomShaw from './tomshaw.jpg';

class About extends Component {

    // eslint-disable-next-line
    constructor(props) {
      super(props);
    }

    componentDidMount() {
      //this.props.actions.loadGithub();
      fetch(API_GITHUB_EVENTS_PUBLIC).then(res => res.json())
        .then(data => {
          // eslint-disable-next-line
          data.map((item, index) => {
            const when = new Date(item.created_at);
            console.log('item', item);
            let string = `
              <li key=${index}>
                <img src=${item.actor.avatar_url} alt=${item.actor.login}/>
                <strong>${item.actor.login}</strong>
                <span>starred repository</span>
                <a href=https://github.com/${item.repo.name}>${item.repo.name}</a>
                <p>${timeago().format(when)}</p>
              </li>`;
            $('ul#activity').append(string);
          });
        })
        .catch(err => console.log(err));
    }

    buildExperience(data, index) {
      const year = data.year;
      const title = data.title;
      const location = data.location;

      return (
        <tr key={index}>
          <th><strong>{year}</strong></th>
          <td>{title}</td>
          <td>{location}</td>
        </tr>
      );
    }

    buildTechnical(data, index) {
      const key = data.key;
      const values = data.values.join(', ');
      return (
        <li key={index}>
          <strong style={{display: 'block'}}>{key}:</strong>
          {values}
        </li>
      );
    }

    buildPrimary(data, index) {
      return (
        <tr key={index}>
          <td> {data.title} {data.percent}%
            <div className="progress">
              <div className="progress-bar" role="progressbar" style={{width: data.percent + '%'}} aria-valuenow={data.percent} aria-valuemin="0" aria-valuemax={data.percent}></div>
            </div>
          </td>
        </tr>
      );
    }

	  render() {
      const {page} = this.props;

      const selector = classNames('page', page.element);

      return (
        <article className={selector}>
          <div className="contains">
            <div className="row">
              <div className="col-lg-6">
                <div className="portrait"> <img src={TomShaw} alt="Tom Shaw" title="Tom Shaw"/> </div>
              </div>
              <div className="col-lg-6">
                <div className="info">
                  <h2 className="h4"> <span>creative</span> <span>portfolio</span> </h2>
                  <HorizontalRule margin="18" />
                  <p>Tom Shaw is a web application developer and systems interface designer from Dallas, Texas. Tom has over a decade of experience writting object oriented PHP and Javascript applications. You can view his <Link to="/work">selected works</Link> check out his <Link to="/play">digital playground</Link> or even listen to some of his <Link to="/playlist">favorite music</Link> on his creative portfolio website.</p>
                  <h2 className="h4"> <span>primary</span> <span>skills</span> </h2>
                  <HorizontalRule margin="18" />
                  <table>
                    <tbody>
                      { primary.map(this.buildPrimary, this) }
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6">
                <div className="info">
                  <h2 className="h4"> <span>technical</span> <span>skills</span> </h2>
                  <HorizontalRule margin="18" />
                  <ul>
                    { technical.map(this.buildTechnical, this) }
                  </ul>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="info">
                  <h2 className="h4"> <span>github</span> <span>activity</span> </h2>
                  <HorizontalRule margin="18" />
                  <ul id="activity"></ul>
                </div>
              </div>
            </div>
          </div>
        </article>
	    )
    }

}

function mapStateToProps(state, ownProps) {
  const page = LoadByPropKey(state.section, 'route', 'about');
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

export default connect(mapStateToProps, mapDispatchToProps)(About);
