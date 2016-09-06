import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router';
import Helmet from 'react-helmet';

// Components
import Press from 'components/Helpers/Press';

// Images
const ovalLeft = require('./files/oval-left.png');
const ovalCenter = require('./files/oval-center.png');
const ovalRight = require('./files/oval-right.png');

// Styles
import s from './index.css';

export default class Home extends Component {
  render() {
    return (
      <section className={s.root}>
        <Helmet title="Home page" />

        <div className={s.image}>
          <p className={s.title}>
            <i>If you work at school,</i>
            we’ll help you buy a home
          </p>
          <p className={s.intro}>
            Landed is the homebuying partner you’ve aways wantedLanded is the homebuying partner you’ve aways wantedLanded is the homebuying partner you’ve aways wanted
          </p>
          <br />
          <Link
            to="get-started"
            className={s['get-started']}
          >
            get started
          </Link>
        </div>

        <div className={s.calc}>
          <p className={s.head}>
            Think <i>you</i> can’t buy a home?
          </p>

          <p className={s.intro}>
            Chech out in our calculator
          </p>

          <Grid>
            <Row>
              <Col
                xs={12}
                sm={12}
                md={4} mdOffset={2}
                lg={4} lgOffset={2}
                className={s.title}
              >
                <p>
                  I want to buy a home for $
                </p>
              </Col>
              <Col
                xs={12}
                sm={12}
                md={4}
                lg={4}
                className={s.form}
              >
                <input type="text" />
              </Col>
            </Row>
          </Grid>

          <span className={s.calculate}>
            calculate
          </span>

        </div>

        <div className={s.how}>
          <p className={s.head}>
            How Landed Works
          </p>

          <Grid className={s['one-two-three']}>
            <Row>
              <Col
                xs={12}
                sm={12}
                md={4}
                lg={4}
              >
                <p>
                  Your school starts a Landed program, allowing investors to pool their money into a Landed Program.
                </p>
              </Col>
              <Col
                xs={12}
                sm={12}
                md={4}
                lg={4}
              >
                <p>
                  You apply to receive funds from your school’s Landed program, covering up to 50% of the downpayment you need.
                </p>
              </Col>
              <Col
                xs={12}
                sm={12}
                md={4}
                lg={4}
              >
                <p>
                  You get access to these funds and support to find a home through Landed’s vetter network, getting you in a home in a smarter and faster way.
                </p>
              </Col>
            </Row>
          </Grid>

          <i>
            Sound too good to be true?
          </i>

          <span className={s.learn}>
            learn more about how it works
          </span>

        </div>

        <Press />

        <div className={s.invest}>
          <i>
            Want to invest in your community while getting<br />a market-rate return?
          </i>
          <span className={s.program}>
            Invest in a Landed Program
          </span>

          <img
            src={ovalLeft}
            className={s['oval-left']}
            role="presentation"
          />
          <img
            src={ovalCenter}
            className={s['oval-center']}
            role="presentation"
          />
          <img
            src={ovalRight}
            className={s['oval-right']}
            role="presentation"
          />
        </div>
      </section>
    );
  }
}
