import React, { Component, PropTypes } from 'react';
import { observer } from 'mobx-react';
import { Grid, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router';
import cx from 'classnames';
import Helmet from 'react-helmet';
import { Element, scroller } from 'react-scroll';
import DynamicNumber from 'react-dynamic-number';
import { browserHistory } from 'react-router';

// Components
import Press from 'components/Helpers/Press';
import Testimonials from 'components/Helpers/Testimonials';

// Styles
import s from './index.css';

@observer
export default class Home extends Component {

  static contextTypes = {
    app: PropTypes.object,
    calc: PropTypes.object,
  };

  componentDidMount() {
    const { app } = this.context;

    app.headerSetColor('white');
    app.hideMenu();

    window.scrollTo(0, 0);
  }

  navigateToPage() {
    this.context.router.push('/calculator');
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.parallax);
  }

  render() {
    const {
      app,
      calc: {
        updatepay,
        updateprice,
        data: { pay }
      },
    } = this.context;

    return (
      <section className={s.root}>
        <Helmet title="Home page" />

        <div
          ref="parallax"
          className={s.image}
        >
          <Grid>
            <Row>
              <Col
                xs={10} xsOffset={1}
                sm={10} smOffset={1}
                md={12} mdOffset={0}
                lg={12} lgOffset={0}
              >
                <p className={s.title}>
                  If you work at a school,<br />
                  we’ll help you buy a&nbsp;home
                </p>
              </Col>
            </Row>
          </Grid>

{/* Want to edit this out for mobile */}

          <div className={cx(s.calc, s.calcstart)}>
            <p className={s.lead}>
              Think you can’t buy a home?
              <br />
              Let us surprise you.
            </p>
            <br />
            <span className={s.want}>
              <i>Our combined<br />salaries are</i>
            </span>
            <span className={s.dollar}>$</span>
            <DynamicNumber
              separator={'.'}
              integer={7}
              fraction={10}
              positive
              negative={false}
              thousand
              placeholder="120,000"
              value={120000}
              className={s.form}
              onChange={(event) => {
                updatepay(event.target.value, '120000');
              }}
            />
            <Link to="calculator" className={s.learn}>
                go
            </Link>
            <button
              className={s.learn}
              onClick={() => {this.props.history.push('/calculator')}}
//                scroller.scrollTo('calcStart', {
//                  duration: 1200,
//                  delay: 100,
//                  smooth: true,
//                });
                    
//              }}
            >
              go
            </button>
          </div>
{/*
          <Element name="calcStart" />

          <div className={cx(s.calc, { [s.expand]: expand })}>
            <div className={s.results}>
              <p className={s.top}>
                Normally, you'd have two options:
              </p>

              <div className={s.option}>
                <p className={s.num}>
                  Total home costs with a 80% mortgage
                </p>
                <div className={s.table}>
                  <div className={cx(s['left-side'], s.red)}>
                    <p className={s.large}>
                      large
                    </p>
                    <p className={s.cost}>
                      down payment
                    </p>
                    <p className={s.price}>
                      ${downpayment.first}
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
                      ${monthly.first}
                    </p>
                  </div>
                </div>
              </div>

              <div className={s.option}>
                <p className={s.num}>
                  Total home costs with a 90% mortgage
                </p>
                <div className={s.table}>
                  <div className={cx(s['left-side'], s.green)}>
                    <p className={s.small}>
                      small
                    </p>
                    <p className={s.cost}>
                      down payment
                    </p>
                    <p className={s.price}>
                      ${downpayment.second}
                    </p>
                  </div>
                  <div className={cx(s['right-side'], s.red)}>
                    <p className={s.large}>
                      large
                    </p>
                    <p className={s.cost}>
                      monthly cost
                    </p>
                    <p className={s.price}>
                      ${monthly.second}
                    </p>
                  </div>
                </div>
              </div>
              <br />
              <span className={s['left-arrow']} />
              <p className={s.middle}>
                Landed lets you put down 10%<br />but pay less each month
              </p>
              <span className={s['right-arrow']} />

              <div className={s['calc-table']}>
                <div className={s.table}>
                  <div className={s['left-side']}>
                    <p className={s.small}>
                      small
                    </p>
                    <p className={s.cost}>
                      down payment
                    </p>
                    <p className={s.price}>
                      ${downpayment.second}
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
                      ${monthly.first}
                    </p>
                  </div>
                </div>
              </div>

              <Link to="how-it-works" className={s.learn}>
                learn more about how it works
              </Link>

              <div className={s.footer} />
            </div>

          </div>
          */}
        </div>
        

        <div className={s.how}>
          <p className={s.head}>
            We make down payment support easy
          </p>

          <Grid className={s['one-two-three']}>
            <Row>
              <Col
                xs={10} xsOffset={1}
                sm={10} mdOffset={1}
                md={4} mdOffset={0}
                lg={4} lgOffset={0}
              >
              </Col>
            </Row>
            <Row>
              <Col
                xs={10} xsOffset={1}
                sm={10} mdOffset={1}
                md={4} mdOffset={0}
                lg={4} lgOffset={0}
              >
                <img src={require('./files/p1.jpg')} />
                <p>
                  <strong>A Landed program is started at your school</strong> and local investors are brought in to back the program.
                </p>
              </Col>
              <Col
                xs={10} xsOffset={1}
                sm={10} mdOffset={1}
                md={4} mdOffset={0}
                lg={4} lgOffset={0}
              >
                <img src={require('./files/p2.jpg')} />
                <p>
                  <strong>You apply to receive funds</strong> from your school’s Landed program, covering up to 50% of the down payment.
                </p>
              </Col>
              <Col
                xs={10} xsOffset={1}
                sm={10} mdOffset={1}
                md={4} mdOffset={0}
                lg={4} lgOffset={0}
              >
                <img src={require('./files/p3.jpg')} />
                <p>
                  <strong>Landed helps you find and buy a home</strong> near where you work. We contribute the funds at time of purchase.
                </p>
              </Col>
            </Row>
          </Grid>

          <span
            className={s.learn}
            onClick={() => { app.showQuiz(); }}
          >
            bring Landed to your school
          </span>
        </div>

        {/*<Testimonials />*/}
        <Press />
      </section>
    );
  }
}
