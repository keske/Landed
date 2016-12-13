import React, { Component, PropTypes } from 'react';
import cx from 'classnames';
import Helmet from 'react-helmet';
import R from 'ramda';
import Slider from 'rc-slider';

import { observer } from 'mobx-react';
import { Grid, Row, Col } from 'react-bootstrap';

// Styles
import s from './index.css';

const min = (a, b) =>
  a < b ? a : b;

const mortgageAPRWithLanded = 0.038;
const initialClosingCostRatio = 0.015;
const HOAFees = 0;

let houseIncome = 200000;
let existingMonthlyDebts = 0;
let priceOfHome = houseIncome * 6.85 - (existingMonthlyDebts / 100 * 20000);
let closingCostsOnPurchase = priceOfHome * initialClosingCostRatio;
let taxRate = 0.373; // TODO: 28 + 9.3
let propertyTaxRatio = 0.015;
let cashToContribute = priceOfHome * 0.1 + closingCostsOnPurchase;
let landedLoanAmount = priceOfHome - ((cashToContribute - closingCostsOnPurchase) + (priceOfHome * 0.2 - cashToContribute + closingCostsOnPurchase));
let landedMonthlyMortgagePayment = Math.pow((1 + mortgageAPRWithLanded / 12), 360) * (mortgageAPRWithLanded / 12) / (Math.pow((1 + mortgageAPRWithLanded / 12), 360) - 1) * landedLoanAmount;
let landedMonthlyPrincipalPayment = (landedLoanAmount - (Math.pow((1 + mortgageAPRWithLanded / 12), 120) * landedLoanAmount - landedMonthlyMortgagePayment * (Math.pow((1 + mortgageAPRWithLanded / 12), 120) - 1) / (mortgageAPRWithLanded / 12))) / 120;
let landedMonthlyInterestPayment = landedMonthlyMortgagePayment - landedMonthlyPrincipalPayment;
let landedMaximumPaymentForTaxLimit = Math.pow((1 + mortgageAPRWithLanded / 12), 360) * (mortgageAPRWithLanded / 12) / (Math.pow((1 + mortgageAPRWithLanded / 12), 360) - 1) * 1000000;
let m120 = (Math.pow((1 + mortgageAPRWithLanded / 12), 120));

let landedMaximumPrincipalForTaxLimit = (1000000 - (m120 * 1000000 - landedMaximumPaymentForTaxLimit * (m120 - 1) / (mortgageAPRWithLanded / 12))) / 120;
let monthlyProperyTaxes = Math.round(priceOfHome * propertyTaxRatio / 12);
let landedMaximumInterestPaymentsYouCanDeduct = landedMaximumPaymentForTaxLimit- landedMaximumPrincipalForTaxLimit;
let taxWriteOffsWithLanded = Math.round((min(landedMonthlyInterestPayment, landedMaximumInterestPaymentsYouCanDeduct) + monthlyProperyTaxes) * taxRate);
let landedDownpayment = priceOfHome * 0.2 - cashToContribute + closingCostsOnPurchase;
const monthlyInsurance = priceOfHome * 0.03 / 12;
let ownershipExpenses = HOAFees + monthlyInsurance + monthlyProperyTaxes + landedMonthlyInterestPayment - taxWriteOffsWithLanded;

console.log(monthlyInsurance);
console.log(ownershipExpenses);

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
          info: '<button>bring Landed to your school or district</button>Now that you understand everything about home ownership, you can adjust some of the assumptions on the left.',
        },
      ],
      slider: {
        yourDownpayment: 10,
        landedsDownpayment: 10,
        householdIncome: 10,
        existingMonthlyDebts: 10,
        hoa: 10,
        monthlyInsurance: 10,
        monthlyRepairCosts: 10,
        taxes: 10,
        closingCostsonPurchase: 10,
        Mortgage80: 10,
        Mortgage90: 10,
      },
      showSuperCenter: false,
    };
  }

  render() {
    const {
      step, text,
      slider: {
        yourDownpayment,
        landedsDownpayment,
        householdIncome,
        existingMonthlyDebts,
        hoa,
        monthlyInsurance,
        monthlyRepairCosts,
        taxes,
        closingCostsonPurchase,
        mortgage80,
        mortgage90,
      },
      showSuperCenter,
    } = this.state;

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

              <div className={s['init-calc']}>
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
                    <input
                      type="text"
                      defaultValue="130,000"
                      placeholder="Combined Annual Household Salary"
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
                    <input
                      type="text"
                      defaultValue="130,000"
                      placeholder="Existing Monthly Debt Payments"
                    />
                  </Col>
                </Row>
                <hr />
                <div className={s.center}>
                  <span className={s.logo} />
                  <p className={s.info}>
                    You can likely afford up to a $800,000 home!
                    <br />
                    And with Laned you’ll only need a $80,000 down payment
                    <br />
                    <i>
                      (half of the down payment you would otherwise need)
                    </i>
                  </p>
                  <button>
                    see your estimated monthly payments
                  </button>
                </div>
              </div>
            </Col>
          </Row>

          <div className={s.graphs}>
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
                    step < 6 &&
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
                      step === 6 &&
                        <button className={s.adjust}>
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
                      className={cx(s.graph, s.magenta)}
                      style={{
                        height: '100px',
                      }}
                    />
                    <span
                      className={cx(s.price, s.magenta)}
                      style={{
                        top: '100px',
                      }}
                    >
                      $3,950
                    </span>
                  </div>
                  <div className={s.col}>
                    <span
                      className={cx(s.graph, s.green)}
                      style={{
                        height: '100px',
                      }}
                    />
                    <span
                      className={cx(s.price, s.green)}
                      style={{
                        top: '100px',
                      }}
                    >
                      $3,950
                    </span>
                  </div>
                  <div className={s.col}>
                    <span
                      className={cx(s.graph, s.red)}
                      style={{
                        height: '100px',
                      }}
                    />
                    <span
                      className={cx(s.price, s.red)}
                      style={{
                        top: '100px',
                      }}
                    >
                      $3,950
                    </span>
                  </div>
                  <div className={s.footer}>
                    <div className={cx(s.col, s['in-footer'])}>
                      renting
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
                        existingMonthlyDebts: value,
                      });
                    }}
                  />
                </span>
                <span className={s.value}>
                  {existingMonthlyDebts}
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
                        monthlyInsurance: value,
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
                        closingCostsonPurchase: value,
                      });
                    }}
                  />
                </span>
                <span className={s.value}>
                  {closingCostsonPurchase}
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
