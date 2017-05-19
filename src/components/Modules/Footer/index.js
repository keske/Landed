import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router';

// Styles
import s from './index.css';

export default class Footer extends Component {

  render() {
    return (
      <section className={s.root}>
        <Grid>
          <Row>
            <Col
              xs={12}
              sm={12}
              md={3}
              lg={3}
            >
              <Link
                to="/"
                className={s.logo}
              >
                <img
                  src={require('./files/footer-logo.png')}
                  role="presentation"
                />
              </Link>
            </Col>
            <Col
              xs={12}
              sm={12}
              md={3}
              lg={3}
            >
              <p>
                Copyright © Landed, Inc.  DRE #01988003.
              </p>
              <p>
                Landed was founded in 2015 in San Francisco.
              </p>
            </Col>

            <Col
              xs={12}
              sm={12}
              md={3}
              lg={3}
            >
              <p>
                Need to contact us?
              </p>
              <a
                href="mailto:hi@landed.com"
                className={s.mail}
              >
                hi@landed.com
              </a>
            </Col>

            <Col
              xs={12}
              sm={12}
              md={3}
              lg={3}
            >
              <a
                href="http://www.facebook.com/landedinc"
                className={s.social}
              >
                <img
                  src={require('./files/fb.png')}
                  role="presentation"
                />
              </a>

              <a
                href="http://www.twitter.com/landedhomes"
                className={s.social}
              >
                <img
                  src={require('./files/twitter.png')}
                  role="presentation"
                />
              </a>

              <a
                href="http://www.instagram.com/landedhomes"
                className={s.social}
              >
                <img
                  src={require('./files/insta.png')}
                  role="presentation"
                />
              </a>

            </Col>
          </Row>
        </Grid>
      </section>
    );
  }
}
