import React, { Component, PropTypes } from 'react';
import cx from 'classnames';
import Helmet from 'react-helmet';
import R from 'ramda';
import Slider from 'rc-slider';
import DynamicNumber from 'react-dynamic-number';

import { observer } from 'mobx-react';
import { Grid, Row, Col } from 'react-bootstrap';

import { numberWithCommas } from 'utils/price.js';

// Styles
import s from './index.css';

const min = (a, b) => a < b ? a : b;

const a15 = 0.038;
const initialClosingCostRatio = 0.015;
const a10 = 0;

let a7 = 200000;
let a8 = 0;
let a3 = a7 * 6.85 - (a8 / 100 * 20000);
let a18 = a3 * initialClosingCostRatio;
let a32 = 0.373; // TODO: 28 + 9.3
let a48 = 0.015;
let a4 = a3 * 0.1 + a18;
let a24 = a3 - ((a4 - a18) + (a3 * 0.2 - a4 + a18));
let a25 = Math.pow((1 + a15 / 12), 360) * (a15 / 12) / (Math.pow((1 + a15 / 12), 360) - 1) * a24;
let a26 = (a24 - (Math.pow((1 + a15 / 12), 120) * a24 - a25 * (Math.pow((1 + a15 / 12), 120) - 1) / (a15 / 12))) / 120;
let a27 = a25 - a26;
let a37 = Math.pow((1 + a15 / 12), 360) * (a15 / 12) / (Math.pow((1 + a15 / 12), 360) - 1) * 1000000;
let m120 = (Math.pow((1 + a15 / 12), 120));
let a38 = (1000000 - (m120 * 1000000 - a37 * (m120 - 1) / (a15 / 12))) / 120;
let a13 = Math.round(a3 * a48 / 12);
let a39 = a37 - a38;
let g9 = Math.round((min(a27, a39) + a13) * a32);
let a5 = a3 * 0.2 - a4 + a18;
let a46 = 0.003;
let a11 = a3 * a46 / 12;
let g11 = a10 + a11 + a13 + a27 - g9;
let g12 = g9 + a26 + g11;
let a16 = 0.043;
let a28 = a24 + a5;
let a29 = Math.pow((1 + a16 / 12), 360) * (a16 / 12) / (Math.pow((1 + a16 / 12), 360) - 1) * a28;
let a30 = (a28 - (Math.pow((1 + a16 / 12), 120) * a28 - a29 * (Math.pow((1 + a16 / 12), 120) - 1) / (a16 / 12))) / 120;
let a31 = a29 - a30;
let a40 = Math.pow((1 + a16 / 12), 360) * (a16 / 12) / (Math.pow((1 + a16 / 12), 360) - 1) * 1000000;
let m12016 = (Math.pow((1 + a16 / 12), 120));
let a41 = (1000000 - (m12016 * 1000000 - a40 * (m12016 - 1) / (a16 / 12))) / 120;
let a42 = a40 - a41;
let a49 = 0.008;
let a17 = a3 * a49 / 12;
let a19 = 0.0475;
let i11 = a3 * a19 / 12;
let h9 = (min(a31, a42) + a13) * a32;
let h11 = a10 + a11 + a13 + a17 + a31 - h9;
let h12 = h9 + a30 + h11;

@observer
export default class Calc extends Component {

  static contextTypes = {
    app: PropTypes.object,
  };

  constructor(props) {
    super(props);

    this.state = {
      step: 1,
      text: [
        {
          title: 'With landed you pay less then the regular owning',
          info: 'You pay less with Landed because we share in your home investment<br /><a href="#">learn how it works</a>',
        },

        {
          title: 'And it may seem that renting is cheaper',
          info: 'more details here?',
        },

        {
          title: 'But that’s not the whole story. Owning earns you immediate tax benefits.<a href="#">learn how</a>',
          info: 'As long as you have taxes to pay, you can compare the after-tax payments',
        },

        {
          title: 'And as we all know, paying your mortgage builds equity over time.<a href="#">learn how</a>',
          info: 'This much of your home payments every month go to paying down your mortgage',
        },

        {
          title: 'With what’s left you can compare to the financial impact of renting.',
          info: '<button>bring Landed to your<br />school or district</button>Now that you understand everything about home ownership, you can adjust some of the assumptions on the left.',
        },
      ],
      slider: {
        yourDownpayment: 10,
        landedsDownpayment: 10,
        householdIncome: 10,
        a8: 10,
        hoa: 10,
        a11: 10,
        monthlyRepairCosts: 10,
        taxes: 10,
        a18: 10,
        Mortgage80: 10,
        Mortgage90: 10,
      },
      data: {
        priceOfHome: a3,
        downpayment: a4,
      },
      showGraphs: false,
      showSuperCenter: false,
    };
  }

  componentDidMount() {
    const { app } = this.context;

    app.headerSetColor('green');
    app.hideMenu();

    window.scrollTo(0, 0);
  }

  updateValues() {
    a3 = a7 * 6.85 - (a8 / 100 * 20000);
    a4 = a3 * 0.1 + a18;

    this.setState({
      data: {
        ...this.state.data,
        priceOfHome: a3,
        downpayment: a4,
      },
    });
  }

  render() {
    const {
      step, text,
      slider: {
        yourDownpayment,
        landedsDownpayment,
        householdIncome,
        hoa,
        monthlyRepairCosts,
        taxes,
        mortgage80,
        mortgage90,
      },
      data: {
        priceOfHome,
        downpayment,
      },
      showGraphs,
      showSuperCenter,
    } = this.state;

    const getHeight = (value) => value.toFixed() * 0.03;
    const getTop = (value) => 292 - (value.toFixed() * 0.03);

    return (
      <section className={s.root}>
        <Helmet title="Calculator" />

        <Grid>
          <Row>
            <Col
              xs={10} xsOffset={1}
              sm={10} smOffset={1}
              md={12} mdOffset={0}
              lg={12} lgOffset={0}
              className={s.center}
            >
              <p className={s.title}>
                Landed calcualtor
              </p>
              <p className={s.subtitle}>
                Subtitle
              </p>

              <div
                className={cx(
                  s['init-calc'],
                  { [s.hide]: showGraphs },
                )}
              >
                <Row>
                  <Col
                    xs={12}
                    sm={3}
                    md={3}
                    lg={3}
                  >
                    <span className={s.label}>
                      Combined Annual
                      <br />
                      Household Salary
                    </span>
                  </Col>
                  <Col
                    xs={12}
                    sm={3}
                    md={3}
                    lg={3}
                  >
                    <DynamicNumber
                      separator={'.'}
                      integer={7}
                      fraction={10}
                      positive
                      negative={false}
                      thousand
                      placeholder={a7}
                      value={a7}
                      className={s.form}
                      onChange={(event) => {
                        a7 = event.target.value.replace(/,/g, '');
                        this.updateValues();
                      }}
                    />
                  </Col>
                  <Col
                    xs={12}
                    sm={3}
                    md={3}
                    lg={3}
                  >
                    <span className={s.label}>
                      Existing Monthly
                      <br />
                      Debt Payments
                    </span>
                  </Col>
                  <Col
                    xs={12}
                    sm={3}
                    md={3}
                    lg={3}
                  >
                    <DynamicNumber
                      separator={'.'}
                      integer={7}
                      fraction={10}
                      positive
                      negative={false}
                      thousand
                      placeholder={a8}
                      value={a8}
                      className={s.form}
                      onChange={(event) => {
                        a8 = event.target.value.replace(/,/g, '');
                        this.updateValues();
                      }}
                    />
                  </Col>
                </Row>
                <hr />
                <div className={s.center}>
                  <span className={s.logo} />
                  <p className={s.info}>
                    You can likely afford up to a <span className={s.green}>
                    ${numberWithCommas(priceOfHome)}</span> home!
                    <br />
                    And with Laned you’ll only need a <span className={s.green}>${numberWithCommas(downpayment)}</span> down payment
                    <br />
                    <i>
                      (half of the down payment you would otherwise need)
                    </i>
                  </p>
                  <button
                    onClick={() => {
                      this.setState({
                        showGraphs: true,
                      });
                    }}
                  >
                    see your estimated monthly payments
                  </button>
                </div>
              </div>
            </Col>
          </Row>

          <div
            className={cx(
              s.graphs,
              { [s.show]: showGraphs },
            )}
          >
            <Row>
              <Col
                xs={10} xsOffset={1}
                sm={10} smOffset={1}
                md={12} mdOffset={0}
                lg={12} lgOffset={0}
              >
                <div className={s['left-side']}>
                  <div className={s.numbers}>
                    {
                      R.range(1, 6).map((index) =>
                        <span
                          key={index}
                          className={cx({ [s.active]: step === index })}
                        >
                          {index}
                        </span>
                      )
                    }
                  </div>
                  <div className={s.description}>
                    <p
                      className={s.title}
                      dangerouslySetInnerHTML={{ __html: text[step - 1].title }}
                    />
                    <p
                      className={s.info}
                      dangerouslySetInnerHTML={{ __html: text[step - 1].info }}
                    />
                  </div>
                  {
                    step < 5 &&
                      <button
                        onClick={() => {
                          this.setState({
                            step: step + 1,
                          });
                        }}
                      >
                        next step
                      </button>
                  }
                  <div className={s.footer}>
                    {
                      step === 5 &&
                        <button className={s.adjust}>
                          <span className={s.icon} />
                          adjust assumptions
                        </button>
                    }
                  </div>
                </div>
                <div className={s['right-side']}>
                  <p className={s.title}>
                    Monhly payments
                  </p>
                  <div className={s.col}>
                    {
                      step > 1 && [
                        <span
                          className={cx(
                            s.graph,
                            s.magenta,
                            { [s.gray]: step >= 3 },
                          )}
                          style={{
                            height: `${getHeight(i11)}px`,
                          }}
                        />,
                        <span
                          className={cx(
                            s.price,
                            s.magenta,
                            { [s.gray]: step >= 3 },
                          )}
                          style={{
                            top: `${getTop(i11)}px`,
                          }}
                        >
                          ${numberWithCommas(Math.round(i11))}
                          {
                            step === 5 && [
                              <br />,
                              'Cost of rent',
                            ]
                          }
                        </span>,
                      ]
                    }
                  </div>

                  <div className={s.col}>
                    {
                      step > 2 && [
                        <span
                          className={cx(s.graph, s.green, s.tax)}
                          style={{
                            height: `${getHeight(g12)}px`,
                          }}
                        />,
                        <span
                          className={cx(s.price, s.green, s.tax)}
                          style={{
                            top: `${getTop(g12) + 25}px`,
                          }}
                        >
                          ${numberWithCommas(Math.round(g12 - (g12 - g9)))}
                          <br />
                          Tax benefits
                        </span>,
                      ]
                    }
                    {
                      step === 5 && [
                        <span
                          className={cx(s.graph, s.green, s.tax)}
                          style={{
                            height: `${getHeight(g12)}px`,
                          }}
                        />,
                        <span
                          className={cx(s.price, s.red, s.tax)}
                          style={{
                            top: `${getTop(g12 - g9) + 28}px`,
                          }}
                        >
                          ${numberWithCommas(Math.round(g12))}
                          <br />
                          Tax benefits
                        </span>,
                      ]
                    }
                    <span
                      className={cx(
                        s.graph,
                        s.green,
                        { [s.fat]: step === 5 },
                      )}
                      style={{
                        height: `${step < 3 ? getHeight(g12) : getHeight(g12 - g9)}px`,
                        maxHeight: `${step === 5 ? `${getHeight(g11)}px` : 'auto'}`,
                      }}
                    />
                    {
                      step < 5 &&
                        <span
                          className={cx(s.price, s.green)}
                          style={{
                            top: `${step < 3 ? getTop(g12) : getTop(g12 - g9)}px`,
                          }}
                        >
                          ${numberWithCommas(Math.round(step < 3 ? g12 : g12 - g9))}
                        </span>
                    }
                    {
                      step === 5 &&
                        <span
                          className={cx(s.price, s.green)}
                          style={{
                            top: `${getTop(g11)}px`,
                          }}
                        >
                          {
                            `$${numberWithCommas(Math.round(g12 - g9 - (g12 - g9 - a26)))}`
                          }
                          <br />
                          Cost of ownership
                        </span>
                    }
                    {
                      step > 3 &&
                        <span
                          className={cx(
                            s.graph,
                            s.yellow,
                            { [s.tiny]: step === 5 },
                          )}
                          style={{
                            height: `${getHeight(a26)}px`,
                            top: `${getTop(g12 - g9) + 28}px`,
                          }}
                        />
                    }
                  </div>


                  <div className={s.col}>
                    {
                      step > 2 && [
                        <span
                          className={cx(s.graph, s.red, s.tax)}
                          style={{
                            height: `${getHeight(h12)}px`,
                          }}
                        />,
                        <span
                          className={cx(s.price, s.red, s.tax)}
                          style={{
                            top: `${getTop(h12) + 25}px`,
                          }}
                        >
                          ${numberWithCommas(Math.round(h12 - (h12 - h9)))}
                          <br />
                          Tax benefits
                        </span>,
                      ]
                    }
                    {
                      step === 5 && [
                        <span
                          className={cx(s.graph, s.red, s.tax)}
                          style={{
                            height: `${getHeight(h12)}px`,
                          }}
                        />,
                        <span
                          className={cx(s.price, s.red, s.tax)}
                          style={{
                            top: `${getTop(h12 - h9) + 28}px`,
                          }}
                        >
                          ${numberWithCommas(Math.round(h12))}
                          <br />
                          Tax benefits
                        </span>,
                      ]
                    }
                    <span
                      className={cx(
                        s.graph,
                        s.red,
                        { [s.fat]: step === 5 },
                      )}
                      style={{
                        height: `${step < 3 ? getHeight(h12) : getHeight(h12 - h9)}px`,
                        maxHeight: `${step === 5 ? `${getHeight(h11)}px` : 'auto'}`,
                      }}
                    />
                    {
                      step < 5 &&
                        <span
                          className={cx(s.price, s.red)}
                          style={{
                            top: `${step < 3 ? getTop(h12) : getTop(h12 - h9)}px`,
                          }}
                        >
                          {
                            step < 5 &&
                            `$${numberWithCommas(Math.round(step < 3 ? h12 : h12 - h9))}`
                          }
                        </span>
                    }
                    {
                      step === 5 &&
                        <span
                          className={cx(s.price, s.red)}
                          style={{
                            top: `${getTop(h11)}px`,
                          }}
                        >
                          {
                            `$${numberWithCommas(Math.round(h12 - h9 - (h12 - h9 - a30)))}`
                          }
                          <br />
                          Cost of ownership
                        </span>
                    }
                    {
                      step > 3 &&
                        <span
                          className={cx(
                            s.graph,
                            s.yellow,
                            { [s.tiny]: step === 5 },
                          )}
                          style={{
                            height: `${getHeight(a30)}px`,
                            top: `${getTop(h12 - h9) + 28}px`,
                          }}
                        />
                    }
                  </div>
                  <div className={s.footer}>
                    <div className={cx(s.col, s['in-footer'])}>
                      {
                        step > 1 && 'renting'
                      }
                    </div>
                    <div className={cx(s.col, s['in-footer'])}>
                      <span className={s.logo} />
                      Landed as 25%<br />partner*
                    </div>
                    <div className={cx(s.col, s['in-footer'])}>
                      Owning without<br />Landed**
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>

          <div
            className={cx(
              s['super-center'],
              { [s.show]: showSuperCenter },
            )}
          >
            <Row>
              <Col
                xs={12}
                sm={4}
                md={4}
                lg={4}
              >
                <p className={s.title}>
                  Price of Home
                </p>
                <span className={s.label}>
                  Your<br />downpayment
                </span>
                <span className={s.slider}>
                  <Slider
                    min={1}
                    max={100}
                    defaultValue={37}
                    onChange={(value) => {
                      this.setState({
                        yourDownpayment: value,
                      });
                    }}
                  />
                </span>
                <span className={s.value}>
                  {yourDownpayment}
                </span>
                <br /><br />
                <span className={s.label}>
                  Landed‘s<br />downpayment
                </span>
                <span className={s.slider}>
                  <Slider
                    min={1}
                    max={100}
                    defaultValue={37}
                    className={s['custom-slider']}
                    onChange={(value) => {
                      this.setState({
                        landedsDownpayment: value,
                      });
                    }}
                  />
                </span>
                <span className={s.value}>
                  {landedsDownpayment}
                </span>
                <br /><br />
                <span className={s.label}>
                  Household<br />Income
                </span>
                <span className={s.slider}>
                  <Slider
                    min={1}
                    max={100}
                    defaultValue={37}
                    onChange={(value) => {
                      this.setState({
                        householdIncome: value,
                      });
                    }}
                  />
                </span>
                <span className={s.value}>
                  {householdIncome}
                </span>
                <br /><br />
                <span className={s.label}>
                  Existing<br />monthly debts
                </span>
                <span className={s.slider}>
                  <Slider
                    min={1}
                    max={100}
                    defaultValue={37}
                    onChange={(value) => {
                      this.setState({
                        a8: value,
                      });
                    }}
                  />
                </span>
                <span className={s.value}>
                  {a8}
                </span>
              </Col>
              <Col
                xs={12}
                sm={4}
                md={4}
                lg={4}
              >
                <p className={s.title}>
                  Estimate assumptions
                </p>
                <span className={s.label}>
                  HOA
                </span>
                <span
                  className={s.slider}
                  style={{
                    marginTop: 0,
                  }}
                >
                  <Slider
                    min={1}
                    max={100}
                    defaultValue={37}
                    onChange={(value) => {
                      this.setState({
                        hoa: value,
                      });
                    }}
                  />
                </span>
                <span className={s.value}>
                  {hoa}
                </span>
                <br /><br />
                <span className={s.label}>
                  Monthly<br />Insurance est
                </span>
                <span className={s.slider}>
                  <Slider
                    min={1}
                    max={100}
                    defaultValue={37}
                    className={s['custom-slider']}
                    onChange={(value) => {
                      this.setState({
                        a11: value,
                      });
                    }}
                  />
                </span>
                <span className={s.value}>
                  {monthlyRepairCosts}
                </span>
                <br /><br />
                <span className={s.label}>
                  Monthly Repair<br />Costs est.
                </span>
                <span className={s.slider}>
                  <Slider
                    min={1}
                    max={100}
                    defaultValue={37}
                    onChange={(value) => {
                      this.setState({
                        monthlyRepairCosts: value,
                      });
                    }}
                  />
                </span>
                <span className={s.value}>
                  {monthlyRepairCosts}
                </span>
                <br /><br />
                <span className={s.label}>
                  Taxes est.
                </span>
                <span
                  className={s.slider}
                  style={{
                    marginTop: 0,
                  }}
                >
                  <Slider
                    min={1}
                    max={100}
                    defaultValue={37}
                    onChange={(value) => {
                      this.setState({
                        taxes: value,
                      });
                    }}
                  />
                </span>
                <span className={s.value}>
                  {taxes}
                </span>
              </Col>

              <Col
                xs={12}
                sm={4}
                md={4}
                lg={4}
              >
                <p className={s.title}>
                  Tax Status
                </p>
                <span className={s.label}>
                  Closing Costs<br />on Purchase
                </span>
                <span className={s.slider}>
                  <Slider
                    min={1}
                    max={100}
                    defaultValue={37}
                    onChange={(value) => {
                      this.setState({
                        a18: value,
                      });
                    }}
                  />
                </span>
                <span className={s.value}>
                  {a18}
                </span>
                <br /><br />
                <span className={s.label}>
                  80% Mortgage<br />Rate (7/1 ARM)
                </span>
                <span className={s.slider}>
                  <Slider
                    min={1}
                    max={100}
                    defaultValue={37}
                    className={s['custom-slider']}
                    onChange={(value) => {
                      this.setState({
                        mortgage80: value,
                      });
                    }}
                  />
                </span>
                <span className={s.value}>
                  {mortgage80}
                </span>
                <br /><br />
                <span className={s.label}>
                  90% Mortgage<br />Rate (7/1 ARM
                </span>
                <span className={s.slider}>
                  <Slider
                    min={1}
                    max={100}
                    defaultValue={37}
                    onChange={(value) => {
                      this.setState({
                        mortgage90: value,
                      });
                    }}
                  />
                </span>
                <span className={s.value}>
                  {mortgage90}
                </span>
              </Col>
            </Row>
            <span className={cx(s.line, s.first)} />
            <span className={cx(s.line, s.second)} />
          </div>
        </Grid>
      </section>
    );
  }
}
