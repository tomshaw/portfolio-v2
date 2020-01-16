// ==========================================================================
// Meta
// ==========================================================================
import React, {Component} from 'react';
import Helmet from 'react-helmet';

import TomShaw from '../../containers/home/tomshaw.jpg';

class Meta extends Component {

    // eslint-disable-next-line
    constructor(props) {
        super(props);
    }

    render() {

        let page = this.props.page;

        // 50-60 characters
        const title = page.meta_title;

        // 160 characters
        const description = page.meta_description;

        return (
          <Helmet
            defaultTitle={title}
            titleTemplate="%s | Tom Shaw"
            meta={[
              {name: "description", content: description},
              {property: "og:description", content: description},
              {property: "og:type", content: "website"},
              {property: "og:title", content: "Tom Shaw"},
              {property: "og:site_name", content: "Tom Shaw"},
              {property: "og:url", content: "http://www.tomshaw.us/"},
              {property: "og:image",  content: TomShaw}
            ]}
          />
        );
    }
}

export default Meta;
