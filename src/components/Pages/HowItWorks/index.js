import React, { Component, PropTypes } from 'react';
import { observer } from 'mobx-react';
import { Grid, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router';
import cx from 'classnames';
import Helmet from 'react-helmet';

// Utils
import { numberWithCommas } from 'utils/price';

// Components
import Invest from 'components/Helpers/Invest';

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

    window.addEventListener('scroll', this.parallax);

    app.headerSetColor('green');
    app.hideMenu();

    window.scrollTo(0, 0);
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
    const { calc: {
      data: { pay },
    } } = this.context;

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

                <div
                  className={s.point}
                  style={{
                    height: 200,
                  }}
                >
                  <div className={s.left}>
                    <img
                      src={require('./files/how-1.png')}
                      role="presentation"
                      style={{
                        position: 'relative',
                        top: '-80px',
                      }}
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
                      Cost: ${numberWithCommas(pay)}
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
                      You need a ${numberWithCommas(+pay /5)} down payment
                    </p>
                    <p className={s.text}>
                      You currently have only half of it – ${numberWithCommas(+pay /10)} saved
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
                      You can partner with Landed and get ${numberWithCommas(+pay /10)} today
                    </p>
                    <p className={s.text}>
                      In exchange for 25% of the appreciation or depreciation in the home going forward (if any).
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
                      <i>We help you find your dream home</i> and we both contribute to the down payment
                    </p>
                    <p className={s.text}>
                      You put in ${numberWithCommas(+pay /10)}, Landed puts in ${numberWithCommas(+pay /10)} and the bank provides a ${numberWithCommas(+pay *0.8)} loan.
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
                        top: '-80px',
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
                      <i>Landed makes its return on</i> investment when you sell or buy out the investment
                    </p>
                    <p className={s.text}>
                      There are two ways to end the partnership with Landed. The first is to sell your home. The second is to refinance your home without selling. You can sell or refinance at any time before the end of the Landed term (usually, 10 years).
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
                  <div className={s.num}>
                    7
                  </div>
                  <div className={cx(s.num, s.a)}>
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
                      ${numberWithCommas(+pay + 100000)}
                    </span>
                    <span className={s['col-5']}>
                      <span className={s.green}>
                        Gain
                      </span>
                    </span>
                    <span className={s['col-5']}>
                      <span className={s.green}>
                        $100,000
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
                        $25,000
                      </p>
                      <p>
                        ${numberWithCommas(+pay /10)}
                      </p>
                    </span>

                    <span className={cx(s['col-7'], s.total)}>
                      <p className={s.green}>
                        You owe Landed
                      </p>
                    </span>
                    <span className={cx(s['col-3'], s.total)}>
                      <p className={s.green}>
                        ${numberWithCommas((+pay/10) + 25000)}
                      </p>
                    </span>

                    <span className={s['col-7']}>
                      <p className={s.green}>
                        Your 75% Share
                      </p>
                      <p>
                        (plus money built in home)*
                      </p>
                    </span>
                    <span className={s['col-3']}>
                      <p className={s.green}>
                        $75,000
                      </p>
                      <p>
                        ${numberWithCommas(+pay * (0.284))}
                      </p>
                    </span>

                    <span className={cx(s['col-7'], s.total)}>
                      <p className={s.green}>
                        You Keep
                      </p>
                    </span>
                    <span className={cx(s['col-3'], s.total)}>
                      <p className={s.green}>
                        ${numberWithCommas(+pay * (0.284) + 75000)}
                      </p>
                    </span>
                  </div>
                </div>

                <div className={s.side}>
                  <div className={s.num}>
                    7
                  </div>
                  <div className={cx(s.num, s.b)}>
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
                        ${numberWithCommas(+pay - 100000)}
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
                        ${numberWithCommas(+pay/10)}
                      </p>
                    </span>

                    <span className={cx(s['col-7'], s.total)}>
                      <p className={s.red}>
                        You owe Landed
                      </p>
                    </span>
                    <span className={cx(s['col-3'], s.total)}>
                      <p className={s.red}>
                        ${numberWithCommas((+pay/10) - 25000)}
                      </p>
                    </span>

                    <span className={s['col-7']}>
                      <p className={s.red}>
                        Your 75% Share
                      </p>
                      <p>
                        (plus money built in home)*
                      </p>
                    </span>
                    <span className={s['col-3']}>
                      <p className={s.red}>
                        -$75,000
                      </p>
                      <p>
                        ${numberWithCommas(+pay * (0.284))}
                      </p>
                    </span>

                    <span className={cx(s['col-7'], s.total)}>
                      <p className={s.red}>
                        You Keep
                      </p>
                    </span>
                    <span className={cx(s['col-3'], s.total)}>
                      <p className={s.green}>
                        ${numberWithCommas(+pay * (0.284) - 75000)}
                      </p>
                    </span>
                  </div>
                </div>
              </div>
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
            to="get-landed"
            className={s['get-landed']}
          >
            bring Landed to your school
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
                Landed pools investor money from people in your community who are interested in supporting you and making a return on their investment. You can think of Landed as a type of impact investing. We care about making sustainable good investments.
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
                Currently Landed does not charge home buyers any origination fees. We make our money in two ways. First, we charge a small management fee to investors. Second, we partner you with great real estate agents in your area and we charge them a referral fee.
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
                You will be responsible for all the costs of homeownership like any other homeowner.
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
                Normally, the Landed investment is made for a 10-year term. That means that if you don't want to sell in the next 10 years, you'll have to repay Landed. Often this happens as a part of a refinancing (when you take out a new loan). You can buy out Landed's investment at any time after the first year without penalty.
              </p>
            </Col>
          </Row>
        </Grid>
        <a href="https://landed.zendesk.com" target="_blank" className={s['get-landed']}> have more questions? </a>
      </section>
    );
  }
}
