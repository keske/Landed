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
    jointlySingle: 0,
    tax: 10,
  },
  {
    single: 9275,
    jointlyDual: 18550,
    jointlySingle: 13250,
    tax: 15,
  },
  {
    single: 37650,
    jointlyDual: 75300,
    jointlySingle: 50400,
    tax: 25,
  },
  {
    single: 91150,
    jointlyDual: 151900,
    jointlySingle: 130150,
    tax: 28,
  },
  {
    single: 190150,
    jointlyDual: 231450,
    jointlySingle: 210800,
    tax: 33,
  },
  {
    single: 413350,
    jointlyDual: 413350,
    jointlySingle: 413350,
    tax: 35,
  },
  {
    single: 415050,
    jointlyDual: 466950,
    jointlySingle: 441000,
    tax: 39.6,
  },
];

const californiaTaxes = [
  {
    single: 0,
    jointlyDual: 0,
    jointlySingle: 0,
    tax: 1,
  },
  {
    single: 7850,
    jointlyDual: 15700,
    jointlySingle: 15710,
    tax: 2,
  },
  {
    single: 18610,
    jointlyDual: 37220,
    jointlySingle: 37221,
    tax: 4,
  },
  {
    single: 29372,
    jointlyDual: 58744,
    jointlySingle: 47982,
    tax: 6,
  },
  {
    single: 40773,
    jointlyDual: 81546,
    jointlySingle: 59383,
    tax: 8,
  },
  {
    single: 51530,
    jointlyDual: 103060,
    jointlySingle: 70142,
    tax: 9.3,
  },
  {
    single: 263222,
    jointlyDual: 526444,
    jointlySingle: 357981,
    tax: 10.3,
  },
  {
    single: 315866,
    jointlyDual: 631732,
    jointlySingle: 429578,
    tax: 11.3,
  },
  {
    single: 526443,
    jointlyDual: 1052886,
    jointlySingle: 715962,
    tax: 12.3,
  },
];

let federalTempTax = 0;
let californiaTempTax = 0;
let taxStatus = 'jointlyDual';

let a7 = 125000;
let a32 = 0.373;
let a15 = 0.041;
let initialClosingCostRatio = 0.015;
let a10 = 0;
let a8 = 200;
let lockA3 = false;
let a3 = a7 * 6.5 - (a8 / 100 * 20000);
let a18 = a3 * initialClosingCostRatio;
let a47 = 0.008;
let a48 = 0.015;
let a4 = a3 * 0.1;
let a24 = a3 - ((a4 - a18) + (a3 * 0.2 - a4));
let a25 = Math.pow((1 + a15 / 12), 360) * (a15 / 12) / (Math.pow((1 + a15 / 12), 360) - 1) * a24;
let a26 = (a24 - (Math.pow((1 + a15 / 12), 120) * a24 - a25 * (Math.pow((1 + a15 / 12), 120) - 1) / (a15 / 12))) / 120;
let a27 = a25 - a26;
let a37 = Math.pow((1 + a15 / 12), 360) * (a15 / 12) / (Math.pow((1 + a15 / 12), 360) - 1) * 1000000;
let m120 = (Math.pow((1 + a15 / 12), 120));
let a38 = (1000000 - (m120 * 1000000 - a37 * (m120 - 1) / (a15 / 12))) / 120;
let a13 = Math.round(a3 * a48 / 12);
let a39 = a37 - a38;
let g9 = Math.round((min(a27, a39) + a13) * a32);
let a5 = a3 * 0.2 - a4;
let a46 = 0.003;
let a11 = a3 * a46 / 12;
let a12 = a3 * a47 / 12;
let g11 = a10 + a11 + a13 + a27 - g9 + a12;
let g12 = g9 + a26 + g11;
let a16 = 0.050;
let a28 = a24 + a5;
let a29 = Math.pow((1 + a16 / 12), 360) * (a16 / 12) / (Math.pow((1 + a16 / 12), 360) - 1) * a28;
let a30 = (a28 - (Math.pow((1 + a16 / 12), 120) * a28 - a29 * (Math.pow((1 + a16 / 12), 120) - 1) / (a16 / 12))) / 120;

let a31 = a29 - a30;
let a40 = Math.pow((1 + a16 / 12), 360) * (a16 / 12) / (Math.pow((1 + a16 / 12), 360) - 1) * 1000000;
let m12016 = (Math.pow((1 + a16 / 12), 120));
let a41 = (1000000 - (m12016 * 1000000 - a40 * (m12016 - 1) / (a16 / 12))) / 120;
let a42 = a40 - a41;
let a49 = 0.008;
let a50 = 0.015;
let a17 = a3 * a49 / 12;
let a19 = 0.0475;
let i11 = a3 * a19 / 12;
let h9 = (min(a31, a42) + a13) * a32;
let h11 = a10 + a11 + a13 + a17 + a31 - h9 + a12;
let h12 = h9 + a30 + h11;

let a33 = (g12 + a8 - a12) / (a7 / 12);
let a34 = (h12 + a8 - a12) / (a7 / 12);

const getG14 = () => a33 < 0.43;
const getH14 = () => a34 < 0.43;

let g14 = getG14();
let h14 = getH14();

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
          title: 'With Landed you\'ll pay less than a 90% mortgage',
          info: 'You pay less with Landed because we share in your home investment<br /><Link to="/how-it-works">learn how it works</Link>',
        },

        {
          title: 'And that still might seem much more expensive than renting',
          info: 'Assuming you currently rent a similar home to the one you would buy',
        },

        {
          title: 'But that’s not the whole story. Owning earns you immediate tax benefits.<br /><a href="#">learn how</a>',
          info: 'As long as you have taxes to pay, you can compare the after-tax payments',
        },

        {
          title: 'And as we all know, paying your mortgage builds equity over time.<br /><a href="#">learn how</a>',
          info: 'This amount goes directly to paying down your mortgage, increasing your wealth',
        },

        {
          title: 'With what’s left you can compare to the monthly cost of renting.',
          info: 'Make sure to adjust the assumptions below to see how things change!',
        },
      ],
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
      a12State: a12,
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
      g14State: g14,
      h14State: h14,
      taxLabel: '',
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
    initialClosingCostRatio = 0.015;

    if (!lockA3) {
      a3 = a7 * 6.5 - (a8 / 100 * 20000);
    }

    a18 = a3 * a50;
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
    a5 = a3 * 0.2 - a4;
    a11 = a3 * a46 / 12;
    a12 = a3 * a47 / 12;

    g11 = a10 + a11 + a13 + a27 - g9 + a12;
    g12 = g9 + a26 + g11;
    a28 = a24 + a5;
    a29 = Math.pow((1 + a16 / 12), 360) * (a16 / 12) / (Math.pow((1 + a16 / 12), 360) - 1) * a28;
    a30 = (a28 - (Math.pow((1 + a16 / 12), 120) * a28 - a29 * (Math.pow((1 + a16 / 12), 120) - 1) / (a16 / 12))) / 120;
    a31 = a29 - a30;
    a40 = Math.pow((1 + a16 / 12), 360) * (a16 / 12) / (Math.pow((1 + a16 / 12), 360) - 1) * 1000000;
    m12016 = (Math.pow((1 + a16 / 12), 120));
    a41 = (1000000 - (m12016 * 1000000 - a40 * (m12016 - 1) / (a16 / 12))) / 120;
    a42 = a40 - a41;
    a17 = a3 * a49 / 12;
    a19 = 0.0475;
    i11 = a3 * a19 / 12;
    h9 = (min(a31, a42) + a13) * a32;
    h11 = a10 + a11 + a13 + a17 + a31 - h9 + a12;
    h12 = h9 + a30 + h11;

    a33 = (g12 + a8 - a12) / (a7 / 12);
    a34 = (h12 + a8 - a12) / (a7 / 12);

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
      a11State: a11,
      a12State: a12,
      a13State: a13,
      a39State: a39,
      g9State: g9,
      a5State: a5,
      a46State: a46,
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
      a50State: a50,
      a17State: a17,
      a19State: a19,
      i11State: i11,
      h9State: h9,
      h11State: h11,
      h12State: h12,
      g14State: getG14(),
      h14State: getH14(),
    });
    console.log(this.state);
  }

  render() {
    const {
      step, text,
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
      a11State,
      a12State,
      a13State,
      a39State,
      g9State,
      a5State,
      a46State,
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
      a50State,
      a17State,
      a19State,
      i11State,
      h9State,
      h11State,
      h12State,
      h14State,
      g14State,
      taxLabel,
    } = this.state;

    const getHeight = (value) => value.toFixed() * (300 / h12);
    const getTop = (value) => 292 - (value.toFixed() * (300 / h12));

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
                Landed Calculator
              </p>
              <p className={s.subtitle}>
                <br />
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
                        a7 = parseFloat(event.target.value.replace(/,/g, ''));
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
                        a8 = parseFloat(event.target.value.replace(/,/g, ''));
                        this.updateAllValues();
                      }}
                    />
                  </Col>
                </Row>
                <hr />
                <div className={s.center}>
                  <span className={s.logo} />
                  <p className={s.info}>
                    With Landed, you can likely afford a <span className={s.green}>
                    ${numberWithCommas(a3State)}</span> home!
                    <br />
                    And you’ll only need a <span className={s.green}>${numberWithCommas((a3State * 0.1).toFixed(0))}</span> down payment.
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
                            // this.setState({
                              // step: index,
                            // });
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
                    Estimated Monthly Payments
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

                  {
                    !g14State &&
                      <span className={s.warning}>
                        <span className={s.cross}>
                          ×
                        </span>
                        You likely<br />won't qualify
                      </span>
                  }

                  <div
                    className={cx(
                      s.col,
                      { [s.gray]: !g14State },
                    )}
                  >
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
                          Building<br />home wealth
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

                  {
                    !h14State &&
                      <span className={s.warning}>
                        <span className={s.cross}>
                          ×
                        </span>
                        You likely<br />won't qualify
                      </span>
                  }

                  <div
                    className={cx(
                      s.col,
                      { [s.gray]: !h14State },
                    )}
                  >
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
                          Building<br />home wealth
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
                      Landed as <br /><span className={s.green}>{numberWithCommas(((0.2 - a4State/a3State)*250).toFixed(0))}</span>% partner
                    </div>
                    <div className={cx(s.col, s['in-footer'])}>
                      Owning without<br />Landed
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
                <span className={s.label}>
                  Price of Home
                </span>
                <span className={s.slider}>
                  <Slider
                    min={200000}
                    max={a7State * 6.5 - (a8State / 100 * 20000)}
                    defaultValue={a3}
                    onChange={(value) => {
                      a3 = value;
                      this.updateAllValues();
                    }}
                  />
                </span>
                <span className={s.value}>
                  ${numberWithCommas(a3State.toFixed(0))}
                </span>
                <br /><br />
                <span className={s.label}>
                  Down Payment Amount
                </span>
                <span className={s.slider}>
                  <Slider
                    min={a3State*0.1}
                    max={a3State*0.2}
                    defaultValue={a3State*0.1}
                    onChange={(value) => {
                      a4 = value;
                      this.updateAllValues();
                    }}
                  />
                </span>
                <span className={s.value}>
                  ${numberWithCommas(a4State.toFixed(0))}
                </span>
                <br /><br />
                <span className={s.label}>
                  Household Income
                </span>
                <span className={s.slider}>
                  <Slider
                    min={45000}
                    max={350000}
                    step={1000}
                    defaultValue={a7}
                    onChange={(value) => {
                      a7 = value;
                      lockA3 = true;
                      this.updateAllValues();
                    }}
                  />
                </span>
                <span className={s.value}>
                  ${numberWithCommas(a7State)}
                </span>
                <br /><br />
                <span className={s.label}>
                  Existing monthly debts
                </span>
                <span className={s.slider}>
                  <Slider
                    min={0}
                    max={2500}
                    defaultValue={0}
                    onChange={(value) => {
                      a8 = value;
                      lockA3 = true;

                      this.updateAllValues();
                    }}
                  />
                </span>
                <span className={s.value}>
                  ${numberWithCommas(a8State)}
                </span>
              </Col>

              <Col
                xs={12}
                sm={4}
                md={4}
                lg={4}
              >
                <span className={s.label}>
                  Monthly insurance
                </span>
                <span className={s.slider}>
                  <Slider
                    min={0}
                    max={0.01}
                    step={0.0001}
                    defaultValue={a46}
                    onChange={(value) => {
                      a46 = value;
                      this.updateAllValues();
                    }}
                  />
                </span>
                <span className={s.value}>
                  ${numberWithCommas(a11State.toFixed())}
                </span>
                <br /><br />
                <span className={s.label}>
                  Monthly <br />HOA fees
                </span>
                <span className={s.slider}>
                  <Slider
                    min={0}
                    max={600}
                    defaultValue={0}
                    onChange={(value) => {
                      a10 = value;
                      this.updateAllValues();
                    }}
                  />
                </span>
                <span className={s.value}>
                  ${numberWithCommas(a10State)}
                </span>
                <br /><br />
                <span className={s.label}>
                  Monthly <br />repair costs
                </span>
                <span className={s.slider}>
                  <Slider
                    min={0}
                    max={0.03}
                    step={0.0001}
                    defaultValue={a47}
                    onChange={(value) => {
                      a47 = value;
                      this.updateAllValues();
                    }}
                  />
                </span>
                <span className={s.value}>
                  ${numberWithCommas(a12State.toFixed())}
                </span>
                <br /><br />
                <span className={s.label}>
                  Monthly property taxes
                </span>
                <span className={s.slider}>
                  <Slider
                    min={0}
                    max={0.03}
                    step={0.0001}
                    defaultValue={a48}
                    onChange={(value) => {
                      a48 = value;
                      this.updateAllValues();
                    }}
                  />
                </span>
                <span className={s.value}>
                  ${numberWithCommas(a13State.toFixed())}
                </span>
                
              </Col>
              <Col
                xs={12}
                sm={4}
                md={4}
                lg={4}
              >
                <div className={s.radiobuttons}>
                  <span className={s.title}>
                    Tax Status
                  </span>
                  <span
                    className={s.radiobutton}
                    onClick={() => {
                      taxStatus = 'single';
                      this.updateAllValues();
                    }}
                  >
                    <span
                      className={cx(
                        s.toggle,
                        { [s.active]: taxStatus === 'single' },
                      )}
                    />
                    <span className={s.label}>
                      Single
                    </span>
                  </span>
                  <span
                    className={s.radiobutton}
                    onClick={() => {
                      taxStatus = 'jointlyDual';
                      this.updateAllValues();
                    }}
                  >
                    <span
                      className={cx(
                        s.toggle,
                        { [s.active]: taxStatus === 'jointlyDual' },
                      )}
                    />
                    <span className={s.label}>
                      Married (joint)
                    </span>
                  </span>
                  <span
                    className={s.radiobutton}
                    onClick={() => {
                      taxStatus = 'jointlySingle';
                      this.updateAllValues();
                    }}
                  >
                    <span
                      className={cx(
                        s.toggle,
                        { [s.active]: taxStatus === 'jointlySingle' },
                      )}
                    />
                    <span className={s.label}>
                      Married (individual)
                    </span>
                  </span>
                </div>
                <br />
                <span className={s.label}>
                  Mortgage APR with Landed
                </span>
                <span className={s.slider}>
                  <Slider
                    min={0}
                    max={0.1}
                    step={0.0001}
                    defaultValue={a15}
                    onChange={(value) => {
                      a15 = value;
                      this.updateAllValues();
                    }}
                  />
                </span>
                <span className={s.value}>
                  {(a15State * 100).toFixed(2)}%
                </span>
                <br /><br />
                <span className={s.label}>
                  Mortgage APR without Landed
                </span>
                <span className={s.slider}>
                  <Slider
                    min={0}
                    max={0.1}
                    step={0.0001}
                    defaultValue={a16}
                    onChange={(value) => {
                      a16 = value;
                      this.updateAllValues();
                    }}
                  />
                </span>
                <span className={s.value}>
                  {(a16State * 100).toFixed(2)}%
                </span>
                <br /><br />
                <span className={s.label}>
                  PMI (if any) <br /> without Landed
                </span>
                <span className={s.slider}>
                  <Slider
                    min={0}
                    max={0.03}
                    step={0.0001}
                    defaultValue={a49}
                    onChange={(value) => {
                      a49 = value;
                      this.updateAllValues();
                    }}
                  />
                </span>
                <span className={s.value}>
                  ${numberWithCommas(a17State.toFixed())}
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
