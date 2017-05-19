import React, { Component, PropTypes } from 'react';
import { observer } from 'mobx-react';
import { Grid, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router';
import cx from 'classnames';
import Helmet from 'react-helmet';

// Utils
import { numberWithCommas } from 'utils/price';

// Styles
import s from './index.css';

@observer
export default class HowItWorks extends Component {

  static contextTypes = {
    app: PropTypes.object,
    calc: PropTypes.object,
  };

  componentDidMount() {
    const { app } = this.context;

    app.headerSetColor('green');
    app.hideMenu();

    window.scrollTo(0, 0);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.parallax);
  }

  render() {
    const {
      app,
      calc: {
        data: { pay, price },
      },
    } = this.context;

    return (
      <section className={s.root}>
        <Helmet title="How It Works" />

        <p className={cx(s.head, s.how)}>
          <i>How</i> Landed Works
        </p>

        <Grid>
          <Row>
            <Col
              xs={12} xsOffset={0}
              sm={12} smOffset={0}
              md={8} mdOffset={2}
              lg={8} lgOffset={2}
            >
              <div className={s.info}>

                <div className={cx(s.point, s['point-how'])}>
                  <div className={s.left}>
                    <img
                      src={require('./files/how-1.png')}
                      role="presentation"
                      className={s['img-how']}
                    />
                  </div>
                  <div className={s.line} />
                  <div className={s.num}>
                    1
                  </div>
                  <div className={s.right}>
                    <p className={s.title}>
                      Your dream home
                      <br />
                      Cost: ${numberWithCommas(app.calc.a3State)}
                    </p>
                  </div>
                </div>

                <div className={s.point}>
                  <div className={s.left}>
                    <img
                      src={require('./files/how-2.png')}
                      role="presentation"
                    />
                  </div>
                  <div className={s.num}>
                    2
                  </div>
                  <div className={s.right}>
                    <p className={s.title}>
                      You need a ${numberWithCommas(+app.calc.a3State / 5)} down payment
                    </p>
                    <p className={s.text}>
                      But you only have ${numberWithCommas(+app.calc.a3State / 10)} saved.
                    </p>
                  </div>
                </div>

                <div className={s.point}>
                  <div className={s.left}>
                    <img
                      src={require('./files/how-3.png')}
                      role="presentation"
                    />
                  </div>
                  <div className={s.num}>
                    3
                  </div>
                  <div className={s.right}>
                    <p className={cx(s.title, s.green)}>
                      You can partner with Landed to get up to ${numberWithCommas(+app.calc.a3State / 10)} today
                    </p>
                    <p className={s.text}>
                      Remember, there are no monthly payments on this money.
                    </p>
                  </div>
                </div>

                <div className={s.point}>
                  <div className={s.left}>
                    <img
                      src={require('./files/how-4.png')}
                      role="presentation"
                      style={{
                        width: 250,
                      }}
                    />
                  </div>
                  <div className={s.num}>
                    4
                  </div>
                  <div className={s.right}>
                    <p className={s.title}>
                      <i>We help you find your dream home</i> and contribute to the down payment.
                    </p>
                    <p className={s.text}>
                      You put in ${numberWithCommas(+app.calc.a3State / 10)}, Landed puts in ${numberWithCommas(+app.calc.a3State / 10)} and the bank provides a ${numberWithCommas(+app.calc.a3State * 0.8)} loan.
                    </p>
                  </div>
                </div>

                <div className={s.point}>
                  <div className={s.left}>
                    <img
                      src={require('./files/how-5.png')}
                      role="presentation"
                      style={{
                        position: 'relative',
                        top: '-20px',
                      }}
                    />
                  </div>
                  <div className={s.num}>
                    5
                  </div>
                  <div className={s.right}>
                    <p className={s.title}>
                      Your dream home becomes your real home
                    </p>
                    <p className={s.text}>
                      You pay the costs of ownership but don’t make any monthly payments to Landed.
                    </p>
                  </div>
                </div>

                <div className={s.quote}>
                  some time passes, while you live happily in your home
                </div>

                <div className={s.point}>
                  <div className={s.left}>
                    <img
                      src={require('./files/how-6.png')}
                      role="presentation"
                    />
                  </div>
                  <div className={s.num}>
                    6
                  </div>
                  <div className={s.right}>
                    <p className={s.title}>
                      <i>Landed makes its return on investment</i> when you sell or buy out the investment
                    </p>
                    <p className={s.text}>
                      For giving you half of your down payment, you'll share 25% of the investment gain or loss with Landed.
                    </p>
                  </div>
                </div>

              </div>
            </Col>
          </Row>
        </Grid>

        <Grid>
          <Row>
            <Col
              xs={12} xsOffset={0}
              sm={12} smOffset={0}
              md={8} mdOffset={2}
              lg={8} lgOffset={2}
            >
              <div className={s.calc}>
                <span className={s.line} />
                <br />
                <div className={s.side}>
                  <div className={s['num-addition']}>
                    7
                  </div>
                  <div className={cx(s['num-addition'], s.a)}>
                    A
                  </div>
                  <img
                    src={require('./files/7a.png')}
                    role="presentation"
                  />
                  <p className={s.title}>
                    <i className={s.green}>If your home goes up in value,</i>
                    <br />
                    both you and Landed win
                  </p>

                  <div className={s.table}>
                    <span className={s['col-5']}>
                      Sale Price
                    </span>
                    <span className={s['col-5']}>
                      ${numberWithCommas(+app.calc.a3State + 100000)}
                    </span>
                    <span className={s['col-5']}>
                      <span className={s.green}>
                        Gain
                      </span>
                    </span>
                    <span className={s['col-5']}>
                      <span className={s.green}>
                        +$100,000
                      </span>
                    </span>

                    <span className={s['col-7']}>
                      <p className={s.green}>
                        Landed's 25% Share
                      </p>
                      <p>
                        (plus original investment)
                      </p>
                    </span>
                    <span className={s['col-3']}>
                      <p className={s.green}>
                        +$25,000
                      </p>
                      <p>
                        ${numberWithCommas(+app.calc.a3State / 10)}
                      </p>
                    </span>

                    <span className={cx(s['col-7'], s.total)}>
                      <p className={s.green}>
                        You owe Landed
                      </p>
                    </span>
                    <span className={cx(s['col-3'], s.total)}>
                      <p className={s.green}>
                        ${numberWithCommas((+app.calc.a3State / 10) + 25000)}
                      </p>
                    </span>

                    <span className={s['col-7']}>
                      <p className={s.green}>
                        Your 75% Share
                      </p>
                      <p>
                        (plus equity in home)
                      </p>
                    </span>
                    <span className={s['col-3']}>
                      <p className={s.green}>
                        +$75,000
                      </p>
                      <p>
                        ${numberWithCommas((+app.calc.a3State * (0.27)).toFixed(0))}
                      </p>
                    </span>

                    <span className={cx(s['col-7'], s.total)}>
                      <p className={s.green}>
                        You Keep
                      </p>
                    </span>
                    <span className={cx(s['col-3'], s.total)}>
                      <p className={s.green}>
                        ${numberWithCommas(((+app.calc.a3State * (0.27)) + 75000).toFixed(0))}
                      </p>
                    </span>
                  </div>
                </div>

                <div className={s.side}>
                  <div className={s['num-addition']}>
                    7
                  </div>
                  <div className={cx(s['num-addition'], s.b)}>
                    B
                  </div>
                  <img
                    src={require('./files/7b.png')}
                    role="presentation"
                  />
                  <p className={s.title}>
                    <i className={s.red}>If your home goes down in value,</i>
                    <br />
                    both you and Landed lose
                  </p>

                  <div className={s.table}>
                    <span className={s['col-5']}>
                      Sale Price
                    </span>
                    <span className={s['col-5']}>
                        ${numberWithCommas(+app.calc.a3State - 100000)}
                    </span>
                    <span className={s['col-5']}>
                      <span className={s.red}>
                        Loss
                      </span>
                    </span>
                    <span className={s['col-5']}>
                      <span className={s.red}>
                        -$100,000
                      </span>
                    </span>

                    <span className={s['col-7']}>
                      <p className={s.red}>
                        Landed's 25% Share
                      </p>
                      <p>
                        (plus original investment)
                      </p>
                    </span>
                    <span className={s['col-3']}>
                      <p className={s.red}>
                        -$25,000
                      </p>
                      <p>
                        ${numberWithCommas(+app.calc.a3State / 10)}
                      </p>
                    </span>

                    <span className={cx(s['col-7'], s.total)}>
                      <p className={s.red}>
                        You owe Landed
                      </p>
                    </span>
                    <span className={cx(s['col-3'], s.total)}>
                      <p className={s.red}>
                        ${numberWithCommas((+app.calc.a3State / 10) - 25000)}
                      </p>
                    </span>

                    <span className={s['col-7']}>
                      <p className={s.red}>
                        Your 75% Share
                      </p>
                      <p>
                        (plus equity in home)
                      </p>
                    </span>
                    <span className={s['col-3']}>
                      <p className={s.red}>
                        -$75,000
                      </p>
                      <p>
                        ${numberWithCommas((+app.calc.a3State * (0.27)).toFixed(0))}
                      </p>
                    </span>

                    <span className={cx(s['col-7'], s.total)}>
                      <p className={s.red}>
                        You Keep
                      </p>
                    </span>
                    <span className={cx(s['col-3'], s.total)}>
                      <p className={s.green}>
                        ${numberWithCommas(((+app.calc.a3State * (0.27)) - 75000).toFixed(0))}
                      </p>
                    </span>
                  </div>
                </div>
                <p> <br/>Note: these are estimates only. Contact us for more information.</p>
              </div>
            </Col>
          </Row>
        </Grid>

        <div
          className={s.image}
        >
          <p className={s.head}>
            Start a Landed<br />Program <i>today</i>
          </p>
          <span
            className={s['get-landed']}
            onClick={() => { app.showQuiz(); }}
          >
            bring Landed to your school
          </span>
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
                What is my 'Equity in Home'?
              </p>
              <p className={s.answer}>
                When you buy a home, you will pay down a bit of your mortgage every month and increase the amount of wealth you have in your home. Over a 10 year period, you will build wealth equal to about 20% of your original mortgage amount plus your original down payment.
              </p>
            </Col>

            <Col
              xs={10} xsOffset={1}
              sm={10} smOffset={1}
              md={4} mdOffset={0}
              lg={4} lgOffset={0}
            >
              <p className={s.question}>
                Is this more expensive than a loan?
              </p>
              <p className={s.answer}>
                It can be, but you'll only know once you end the partnership. While loans have a fixed rate of repayment and an APR, partners only succeed if the venture succeeds. Our customers find that a combination of a partner and a mortgage is better than a large mortgage alone.
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
                Who is responsible for different costs?
              </p>
              <p className={s.answer}>
                You will be responsible for all the costs of homeownership like any other homeowner. If you fail to maintain your home, you might face penalties and/or default. Similarly, if you upgrade your home, Landed will endeavor to give you credit for the work done.
              </p>
            </Col>

            <Col
              xs={10} xsOffset={1}
              sm={10} smOffset={1}
              md={4} mdOffset={0}
              lg={4} lgOffset={0}
            >
              <p className={s.question}>
                What if I never sell?
              </p>
              <p className={s.answer}>
                If you don't want to sell, you'll have to repay Landed before the end of the investment term (between 10 and 30 years). Often this happens by taking out a new loan or entering a new Landed partnership. You can do this at any time after the first year without penalty.
              </p>
            </Col>
          </Row>
        </Grid>

        <div className={s.center}>
          <a
            href="https://landed.zendesk.com"
            target="_blank"
            className={s['get-landed']}
          >
            have more questions?
          </a>
        </div>
      </section>
    );
  }
}