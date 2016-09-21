import React, { Component, PropTypes } from 'react';
import { observer } from 'mobx-react';
import { Grid, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router';
import cx from 'classnames';
import Helmet from 'react-helmet';

// Components
import Invest from 'components/Helpers/Invest';

// Styles
import s from './index.css';

@observer
export default class HowItWorks extends Component {

  static contextTypes = {
    app: PropTypes.object,
  };

  componentDidMount() {
    const { app } = this.context;

    window.addEventListener('scroll', this.parallax);

    app.headerSetColor('green');
    app.hideMenu();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.parallax);
  }

  parallax = () => {
    const top = (window.pageYOffset - this.refs.parallax.offsetTop) / 10;

    if (screen.width >= 667) {
      this.refs.parallax.style.backgroundPosition = `0px ${top}px`;
    }
  }

  render() {
    return (
      <section className={s.root}>
        <Helmet title="How It Works" />

        <p className={cx(s.head, s.how)}>
          How Landed Works
        </p>

        <Grid className={s.questions}>
          <Row>
            <Col
              xs={12}
              sm={12}
              md={12}
              lg={12}
            >
              <img
                src={require('./files/info1.jpg')}
                className={s.info}
                role="presentation"
              />
            </Col>
          </Row>
        </Grid>

        <div
          ref="parallax"
          className={s.image}
        >
          <p className={s.head}>
            Start<br />a Landed Program<br /><i>today</i>
          </p>
          <Link
            to="get-started"
            className={s['get-landed']}
          >
            get landed
          </Link>
        </div>

        <p className={s.head}>
          Common Questions
        </p>

        <Grid className={s.questions}>
          <Row>
            <Col
              xs={10} xsOffset={1}
              sm={10} smOffset={1}
              md={4} mdOffset={2}
              lg={4} lgOffset={2}
            >
              <p className={s.question}>
                Where does the money come from?
              </p>
              <p className={s.answer}>
                Landed pools investor money from people in your community who are Interested in supporting you and making a profit. You can think of Landed as a type of impactm ivesting That means we care about making sustainable good investments. <Link to="/invest"><i>Learn more bout investing</i></Link>
              </p>
            </Col>

            <Col
              xs={10} xsOffset={1}
              sm={10} smOffset={1}
              md={4} mdOffset={0}
              lg={4} lgOffset={0}
            >
              <p className={s.question}>
                How does Landed make money? Do I get charged a bunch of fees?
              </p>
              <p className={s.answer}>
                Currently Landed does not charge home
                buyers any ongination fee. We make our
                money m two ways. First we charge a small
                management fee to investors. Second, we
                partner you with great real estate agents in
                your area and we charge them a referral fee
              </p>
            </Col>
          </Row>
          <Row>
            <Col
              xs={10} xsOffset={1}
              sm={10} smOffset={1}
              md={4} mdOffset={2}
              lg={4} lgOffset={2}
            >
              <p className={s.question}>
                Who is responsible for property taxes insurance repairs and mamtenance costs?
              </p>
              <p className={s.answer}>
                You Will be responsible for all the costs of
                  homeownership like any other homeowner.
                  Were here to help you get the right property
                  insurance to cover unexpected costs.
              </p>
            </Col>

            <Col
              xs={10} xsOffset={1}
              sm={10} smOffset={1}
              md={4} mdOffset={0}
              lg={4} lgOffset={0}
            >
              <p className={s.question}>
                What if I don't want to sell?
              </p>
              <p className={s.answer}>
                Normally, the Landed investment is made for a 10-year term. That means that if you don't want to sell in the next 10 years you'll have to repay Landed. Often this happens as a part of a refinancing (when you take out a new loan). You can buy out Landed's investment at any time after the first year without penalty.
              </p>
            </Col>
          </Row>
        </Grid>

        <Invest />

      </section>
    );
  }
}
