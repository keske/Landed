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

const min = (a, b) => (a < b ? a : b);

const federalTaxes = [
  {
    single: 0,
    jointlyDual: 0,
    jointlySignle: 0,
    tax: 10,
  },
  {
    single: 9275,
    jointlyDual: 18550,
    jointlySignle: 13250,
    tax: 15,
  },
  {
    single: 37650,
    jointlyDual: 75300,
    jointlySignle: 50400,
    tax: 25,
  },
  {
    single: 91150,
    jointlyDual: 151900,
    jointlySignle: 130150,
    tax: 28,
  },
  {
    single: 190150,
    jointlyDual: 231450,
    jointlySignle: 210800,
    tax: 33,
  },
  {
    single: 413350,
    jointlyDual: 413350,
    jointlySignle: 413350,
    tax: 35,
  },
  {
    single: 415050,
    jointlyDual: 466950,
    jointlySignle: 441000,
    tax: 39.6,
  },
];

const californiaTaxes = [
  {
    single: 0,
    jointlyDual: 0,
    jointlySignle: 0,
    tax: 1,
  },
  {
    single: 7850,
    jointlyDual: 15700,
    jointlySignle: 15710,
    tax: 2,
  },
  {
    single: 18610,
    jointlyDual: 37220,
    jointlySignle: 37221,
    tax: 4,
  },
  {
    single: 29372,
    jointlyDual: 58744,
    jointlySignle: 47982,
    tax: 6,
  },
  {
    single: 40773,
    jointlyDual: 81546,
    jointlySignle: 59383,
    tax: 8,
  },
  {
    single: 51530,
    jointlyDual: 103060,
    jointlySignle: 70142,
    tax: 9.3,
  },
  {
    single: 263222,
    jointlyDual: 526444,
    jointlySignle: 357981,
    tax: 10.3,
  },
  {
    single: 315866,
    jointlyDual: 631732,
    jointlySignle: 429578,
    tax: 11.3,
  },
  {
    single: 526443,
    jointlyDual: 1052886,
    jointlySignle: 715962,
    tax: 12.3,
  },
];

let federalTempTax = 0;
let californiaTempTax = 0;
let taxStatus = 'jointlyDual';

let a7 = 200000;
let a32 = 0.373;
let a15 = 0.038;
let initialClosingCostRatio = 0.015;
let a10 = 0;
let a8 = 0;
let a3 = a7 * 6.85 - (a8 / 100 * 20000);
let a18 = a3 * initialClosingCostRatio;
let a48 = 0.015;
let a4 = a3 * 0.1;
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
          title: 'But that’s not the whole story. Owning earns you immediate tax benefits.<br /><a href="#">learn how</a>',
          info: 'As long as you have taxes to pay, you can compare the after-tax payments',
        },

        {
          title: 'And as we all know, paying your mortgage builds equity over time.<br /><a href="#">learn how</a>',
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
        downpayment: a3 * 0.1,
      },
      showGraphs: false,
      showSuperCenter: false,

      a7State: a7,
      a32State: a32,
      a15State: a15,
      initialClosingCostRatioState: initialClosingCostRatio,
      a10State: a10,
      a8State: a8,
      a3State: a3,
      a18State: a18,
      a48State: a38,
      a4State: a4,
      a24State: a24,
      a25State: a25,
      a26State: a26,
      a27State: a27,
      a37State: a37,
      m120State: m120,
      a38State: a38,
      a13State: a13,
      a39State: a39,
      g9State: g9,
      a5State: a5,
      a46State: a46,
      a11State: a11,
      g11State: g11,
      g12State: g12,
      a16State: a16,
      a28State: a28,
      a29State: a29,
      a30State: a30,
      a31State: a31,
      a40State: a40,
      m12016State: m12016,
      a41State: a41,
      a42State: a42,
      a49State: a49,
      a17State: a17,
      a19State: a19,
      i11State: i11,
      h9State: h9,
      h11State: h11,
      h12State: h12,
    };
  }

  componentDidMount() {
    const { app } = this.context;

    app.headerSetColor('green');
    app.hideMenu();

    window.scrollTo(0, 0);
  }

  getFederalTaxes() {
    federalTaxes.map((group) => {
      const salary = R.prop(taxStatus, group);
      const tax = R.prop('tax', group);

      if (a7 > salary) {
        federalTempTax = tax;
      }
    });
  }

  getCaliforniaTaxes() {
    californiaTaxes.map((group) => {
      const salary = R.prop(taxStatus, group);
      const tax = R.prop('tax', group);

      if (a7 > salary) {
        californiaTempTax = tax;
      }
    });
  }

  updateAllValues() {
    this.getFederalTaxes();
    this.getCaliforniaTaxes();

    a32 = (federalTempTax + californiaTempTax) * 0.01;

    a15 = 0.038;
    initialClosingCostRatio = 0.015;
    a10 = 0;
    a3 = a7 * 6.85 - (a8 / 100 * 20000);
    a18 = a3 * initialClosingCostRatio;
    a48 = 0.015;
    a4 = a3 * 0.1;
    a24 = a3 - ((a4 - a18) + (a3 * 0.2 - a4 + a18));
    a25 = Math.pow((1 + a15 / 12), 360) * (a15 / 12) / (Math.pow((1 + a15 / 12), 360) - 1) * a24;
    a26 = (a24 - (Math.pow((1 + a15 / 12), 120) * a24 - a25 * (Math.pow((1 + a15 / 12), 120) - 1) / (a15 / 12))) / 120;
    a27 = a25 - a26;
    a37 = Math.pow((1 + a15 / 12), 360) * (a15 / 12) / (Math.pow((1 + a15 / 12), 360) - 1) * 1000000;
    m120 = (Math.pow((1 + a15 / 12), 120));
    a38 = (1000000 - (m120 * 1000000 - a37 * (m120 - 1) / (a15 / 12))) / 120;
    a13 = Math.round(a3 * a48 / 12);
    a39 = a37 - a38;
    g9 = Math.round((min(a27, a39) + a13) * a32);
    a5 = a3 * 0.2 - a4 + a18;
    a46 = 0.003;
    a11 = a3 * a46 / 12;
    g11 = a10 + a11 + a13 + a27 - g9;
    g12 = g9 + a26 + g11;
    a16 = 0.043;
    a28 = a24 + a5;
    a29 = Math.pow((1 + a16 / 12), 360) * (a16 / 12) / (Math.pow((1 + a16 / 12), 360) - 1) * a28;
    a30 = (a28 - (Math.pow((1 + a16 / 12), 120) * a28 - a29 * (Math.pow((1 + a16 / 12), 120) - 1) / (a16 / 12))) / 120;
    a31 = a29 - a30;
    a40 = Math.pow((1 + a16 / 12), 360) * (a16 / 12) / (Math.pow((1 + a16 / 12), 360) - 1) * 1000000;
    m12016 = (Math.pow((1 + a16 / 12), 120));
    a41 = (1000000 - (m12016 * 1000000 - a40 * (m12016 - 1) / (a16 / 12))) / 120;
    a42 = a40 - a41;
    a49 = 0.008;
    a17 = a3 * a49 / 12;
    a19 = 0.0475;
    i11 = a3 * a19 / 12;
    h9 = (min(a31, a42) + a13) * a32;
    h11 = a10 + a11 + a13 + a17 + a31 - h9;
    h12 = h9 + a30 + h11;

    this.setState({
      ...this.state,
      a7State: a7,
      a32State: a32,
      a15State: a15,
      initialClosingCostRatioState: initialClosingCostRatio,
      a10State: a10,
      a8State: a8,
      a3State: a3,
      a18State: a18,
      a48State: a38,
      a4State: a4,
      a24State: a24,
      a25State: a25,
      a26State: a26,
      a27State: a27,
      a37State: a37,
      m120State: m120,
      a38State: a38,
      a13State: a13,
      a39State: a39,
      g9State: g9,
      a5State: a5,
      a46State: a46,
      a11State: a11,
      g11State: g11,
      g12State: g12,
      a16State: a16,
      a28State: a28,
      a29State: a29,
      a30State: a30,
      a31State: a31,
      a40State: a40,
      m12016State: m12016,
      a41State: a41,
      a42State: a42,
      a49State: a49,
      a17State: a17,
      a19State: a19,
      i11State: i11,
      h9State: h9,
      h11State: h11,
      h12State: h12,
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

      a7State,
      a32State,
      a15State,
      initialClosingCostRatioState,
      a10State,
      a8State,
      a3State,
      a18State,
      a48State,
      a4State,
      a24State,
      a25State,
      a26State,
      a27State,
      a37State,
      m120State,
      a38State,
      a13State,
      a39State,
      g9State,
      a5State,
      a46State,
      a11State,
      g11State,
      g12State,
      a16State,
      a28State,
      a29State,
      a30State,
      a31State,
      a40State,
      m12016State,
      a41State,
      a42State,
      a49State,
      a17State,
      a19State,
      i11State,
      h9State,
      h11State,
      h12State,
    } = this.state;

    const getHeight = (value) => value.toFixed() * 0.03;
    const getTop = (value) => 292 - (value.toFixed() * 0.03);

    return (
      <section className={s.root}>
        <Helmet title="Calculator" />

        <Grid>
          <Row>
            <Col
              xs={12}
              sm={12}
              md={12}
              lg={12}
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
                        this.updateAllValues();
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
                        this.updateAllValues();
                      }}
                    />
                  </Col>
                </Row>
                <hr />
                <div className={s.center}>
                  <span className={s.logo} />
                  <p className={s.info}>
                    You can likely afford up to a <span className={s.green}>
                    ${numberWithCommas(a3State)}</span> home!
                    <br />
                    And with Laned you’ll only need a <span className={s.green}>${numberWithCommas(a3State * 0.1)}</span> down payment
                    <br />
                    <i>
                      (half of the down payment you would otherwise need)
                    </i>
                  </p>
                  <button
                    onClick={() => {
                      this.setState({
                        showGraphs: true,
                        step: window.innerWidth < 768 ? 5 : 1,
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
                xs={12}
                sm={12}
                md={12}
                lg={12}
              >
                <div className={s['left-side']}>
                  <div className={s.numbers}>
                    {
                      R.range(1, 6).map((index) =>
                        <span
                          key={index}
                          className={cx({ [s.active]: step === index })}
                          onClick={() => {
                            this.setState({
                              step: index,
                            });
                          }}
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
                        <button
                          className={s.adjust}
                          onClick={() => {
                            this.setState({
                              showSuperCenter: !showSuperCenter,
                            });
                          }}
                        >
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
                    <span
                      className={cx(
                        s.graph,
                        s.magenta,
                        { [s.hide]: step === 1 },
                        { [s.gray]: step >= 3 },
                      )}
                      style={{
                        height: `${getHeight(i11)}px`,
                      }}
                    />
                    <span
                      className={cx(
                        s.price,
                        s.magenta,
                        { [s.hide]: step === 1 },
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
                    </span>
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
                          className={cx(s.price, s.green, s.tax)}
                          style={{
                            top: `${getTop(g12 - g9) + 28}px`,
                          }}
                        >
                          ${numberWithCommas(Math.round(g12 - g9 - (g12 - g9 - a26)))}
                          <br />
                          your money<br />in mortgage
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
                            `$${numberWithCommas(Math.round(g11))}`
                          }
                          <br />
                          Cost of<br />ownership
                        </span>
                    }
                    <span
                      className={cx(
                        s.graph,
                        s.yellow,
                        { [s.hide]: step < 4 },
                        { [s.tiny]: step === 5 },
                      )}
                      style={{
                        height: `${getHeight(a26)}px`,
                        top: `${getTop(g12 - g9) + 28}px`,
                      }}
                    />
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
                          ${numberWithCommas(Math.round(h12 - h9 - (h12 - h9 - a30)))}
                          <br />
                          your money<br />in mortgage
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
                          ${numberWithCommas(Math.round(h11))}
                          <br />
                          Cost of<br />ownership
                        </span>
                    }
                    <span
                      className={cx(
                        s.graph,
                        s.yellow,
                        { [s.hide]: step < 4 },
                        { [s.tiny]: step === 5 },
                      )}
                      style={{
                        height: `${getHeight(a30)}px`,
                        top: `${getTop(h12 - h9) + 28}px`,
                      }}
                    />
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
