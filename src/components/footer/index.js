// ==========================================================================
// Footer
// ==========================================================================
import React from 'react';
import { Row, Col } from 'react-bootstrap';

// components
import HorizontalRule from '../rule';

// containers
import LatestList from './latest';
import ThemeList from './themes';

// data
import themes from '../../data/themes';
import latest from '../../data/latest';

const Footer = (props) => {
  return (
    <footer className="footer">
      <div className="contains">

        <Row>
          <Col md={12}>
            <Row>

              <Col lg={4} className="meta">
                <strong className="h4">creative</strong>
                <strong className="h4">portfolio</strong>
                <HorizontalRule />
                <p className="lede">Tom Shaw is a web designer and systems developer from Dallas, Texas. He enjoys utilizing his expertise and programming skills in writing, modifying and integration in the field of web software design and application development.</p>
                <p>Experienced with all stages of the development life-cycle Tom loves taking on roles that require the extra effort, empowers organizations and communities, improves peoples lives and ultimately creates a brighter future for all of us.</p>
              </Col>

              <Col lg={4} className="meta">
                <strong className="h4">social</strong>
                <strong className="h4">media</strong>
                <HorizontalRule />
                <LatestList latest={latest} />
              </Col>

              <Col lg={4} className="meta">
                <strong className="h4">available</strong>
                <strong className="h4">themes</strong>
                <HorizontalRule />
                <ThemeList themes={themes} />
              </Col>

            </Row>
          </Col>
        </Row>

        <Row>
          <Col md={12} className="copyright">
            <HorizontalRule className="rule rule2" />
            <Row>
              <Col md={12}>
                <p>Copyright &copy; 2019 Tom Shaw. All rights reserved.</p>
              </Col>
            </Row>
          </Col>
        </Row>

      </div>
    </footer>
  )
}

export default Footer;
