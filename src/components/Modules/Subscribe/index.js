import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

// Styles
import s from './index.css';

export default class Subscribe extends Component {
  render() {
    return (
      <section className={s.root}>
        <form
          action="//golanded.us10.list-manage.com/subscribe/post?u=98d8f491f2437127565bb85c3&amp;id=f70e89b55c"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          target="_blank"
          noValidate
        >
          <Grid>
            <Row>
              <Col
                xs={1} xsHidden
                sm={5}
                md={4}
                lg={3}
              >
                <span className={s['email-icon']} />
                <span className={s.title}>
                  Want to help? Leave us your email
                </span>
              </Col>
              <Col
                xs={9} xsOffset={1}
                sm={4}
                md={5}
                lg={5}
              >
                <input
                  type="email"
                  name="EMAIL"
                  id="mce-EMAIL"
                  placeholder="e-mail"
                />
                <div id="mce-responses" className={s.clear}>
                  <div
                    className={s.response}
                    id="mce-error-response"
                    style={{ display: 'none' }}
                  />
                  <div
                    className={s.response}
                    id="mce-success-response"
                    style={{ display: 'none' }}
                  />
                </div>
              </Col>
              <Col
                xs={1}
                sm={1}
                md={3}
                lg={3}
              >
                <div style={{ position: 'absolute', left: '-5000px' }}>
                  <input
                    type="text"
                    name="b_98d8f491f2437127565bb85c3_f70e89b55c"
                    tabIndex="-1"
                    value=""
                  />
                </div>
                <input
                  type="submit"
                  name="subscribe"
                  id="mc-embedded-subscribe"
                  className="button hidden-xs hidden-sm"
                  value="keep me updated"
                />
                <input
                  type="submit"
                  name="subscribe"
                  id="mc-embedded-subscribe"
                  className="button hidden-md hidden-lg"
                  value="ok"
                />
              </Col>
            </Row>
          </Grid>
        </form>
      </section>
    );
  }
}
