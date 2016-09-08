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
    return (
      <section className={s.root}>
        <Helmet title="How It Works" />

        <p className={cx(s.head, s.how)}>
          How Landed Works
        </p>

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
              xs={12}
              sm={12}
              md={4} mdOffset={2}
              lg={4} lgOffset={2}
            >
              <p className={s.question}>
                How does Landed profit?
              </p>
              <p className={s.answer}>
                At Landed, we want to make home-buying easier for you. That’s why we only make a profit if you purchase a home - we take a percentage of the real-estate brokers commision fee, which means you lose no money.
              </p>
            </Col>

            <Col
              xs={12}
              sm={12}
              md={4}
              lg={4}
            >
              <p className={s.question}>
                What is a Landed Fund?
              </p>
              <p className={s.answer}>
                Think of it as a bank account. Investors put money into this fund (invest) that you can then take out to use for your downpayment.
              </p>
            </Col>
          </Row>
          <Row>
            <Col
              xs={12}
              sm={12}
              md={4} mdOffset={2}
              lg={4} lgOffset={2}
            >
              <p className={s.question}>
                What does the Landed Fund get out of this?
              </p>
              <p className={s.answer}>
                If after living in your home for a few years, you decide to sell it, you split the profit 75/25 with th Landed Fund. That means if your home is now worth $600,000, that’s a $100,000 profit. You get your original $50,000 back plus $75,000 profit. Your investors get their original $50,000 back plus a $25,000 profit. That’s a win-win.
              </p>
            </Col>

            <Col
              xs={12}
              sm={12}
              md={4}
              lg={4}
            >
              <p className={s.question}>
                What if I need to sell my home for lower than what I originally bought it for?
              </p>
              <p className={s.answer}>
                Things happen, and we understand. That’s why our 75/25 model also applies in this scenario. If you take a loss, that burden is shared with investors, so it doesn’t hit you as hard.
                <br />
                That means, if your home worth has dropped to $400,000 when you sell, you only lose $75,000 instead of $100,000, while investors lose $25,000.
              </p>
            </Col>
          </Row>
        </Grid>

        <Invest />

      </section>
    );
  }
}
