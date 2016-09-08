import React, { Component, PropTypes } from 'react';
import { observer } from 'mobx-react';
import { Grid, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router';
import cx from 'classnames';
import Helmet from 'react-helmet';

// Components
import Press from 'components/Helpers/Press';

// Images
const ovalLeft = require('./files/oval-left.png');
const ovalCenter = require('./files/oval-center.png');
const ovalRight = require('./files/oval-right.png');

// Styles
import s from './index.css';

@observer
export default class Home extends Component {

  static contextTypes = {
    app: PropTypes.object,
  };

  constructor(props) {
    super(props);

    this.state = {
      calc: {
        expand: false,
      },
    };
  }

  componentDidMount() {
    const { app } = this.context;

    window.addEventListener('scroll', this.parallax);

    app.headerSetColor('white');
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.parallax);
  }

  parallax = () => {
    const top = (window.pageYOffset - this.refs.parallax.offsetTop) / 10;

    if (screen.width >= 720) {
      this.refs.parallax.style.backgroundPosition = `0px ${top}px`;
    }
  }

  render() {
    const { calc: { expand } } = this.state;

    return (
      <section className={s.root}>
        <Helmet title="Home page" />

        <div
          ref="parallax"
          className={s.image}
        >
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

        <div className={cx(s.calc, { [s.expland]: expand })}>
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

          <span
            className={s.calculate}
            onClick={() => {
              this.setState({
                calc: {
                  expand: true,
                },
              });
            }}
          >
            calculate
          </span>

          <div className={s.results}>
            <p className={s.top}>
              Without Landed you had<br />two options:
            </p>

            <div className={s.option}>
              <p className={s.num}>
                option 1
              </p>
              <div className={s.table}>
                <div className={cx(s['left-side'], s.red)}>
                  <p className={s.large}>
                    large
                  </p>
                  <p className={s.cost}>
                    downpayment
                  </p>
                  <p className={s.price}>
                    $100,000
                  </p>
                </div>
                <div className={cx(s['right-side'], s.green)}>
                  <p className={s.small}>
                    small
                  </p>
                  <p className={s.cost}>
                    monthly cost
                  </p>
                  <p className={s.price}>
                    $3000
                  </p>
                </div>
              </div>
            </div>

            <div className={s.option}>
              <p className={s.num}>
                option 1
              </p>
              <div className={s.table}>
                <div className={cx(s['left-side'], s.red)}>
                  <p className={s.large}>
                    large
                  </p>
                  <p className={s.cost}>
                    downpayment
                  </p>
                  <p className={s.price}>
                    $100,000
                  </p>
                </div>
                <div className={cx(s['right-side'], s.green)}>
                  <p className={s.small}>
                    small
                  </p>
                  <p className={s.cost}>
                    monthly cost
                  </p>
                  <p className={s.price}>
                    $3000
                  </p>
                </div>
              </div>
            </div>
            <br />
            <span className={s['left-arrow']} />
            <p className={s.middle}>
              Landed allowes you<br />to take best parts of both
            </p>
            <span className={s['right-arrow']} />

            <div className={s['calc-table']}>
              <div className={s.table}>
                <div className={s['left-side']}>
                  <p className={s.small}>
                    small
                  </p>
                  <p className={s.cost}>
                    downpayment
                  </p>
                  <p className={s.price}>
                    $100,000
                  </p>
                </div>
                <div className={s['right-side']}>
                  <p className={s.small}>
                    small
                  </p>
                  <p className={s.cost}>
                    monthly cost
                  </p>
                  <p className={s.price}>
                    $3000
                  </p>
                </div>
              </div>
            </div>

            <span className={s.learn}>
              learn more about how it works
            </span>

            <div className={s.footer} />
          </div>

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
