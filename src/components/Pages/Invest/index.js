import React, { Component, PropTypes } from 'react';
import { observer } from 'mobx-react';
import { Grid, Row, Col } from 'react-bootstrap';
import cx from 'classnames';
import Helmet from 'react-helmet';

// Components
import Invest from 'components/Helpers/Invest';

// Styles
import s from './index.css';

@observer
export default class InvestPage extends Component {

  static contextTypes = {
    app: PropTypes.object,
  };

  componentDidMount() {
    const { app } = this.context;

    window.addEventListener('scroll', this.parallax);

    app.headerSetColor('white');
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
    const { app } = this.context;

    const renderForm = () =>
      <span className={cx(s.form, { [s.show]: !app.investForm.sent })}>
        <Row className={s.row}>
          <Col
            xs={12}
            sm={12}
            md={6}
            lg={6}
          >
            <label>
              Your First Name
              <input
                type="text"
                ref="firstName"
                defaultValue={app.investForm.firstName}
                onChange={() => this.changeData()}
              />
            </label>
          </Col>

          <Col
            xs={12}
            sm={12}
            md={6}
            lg={6}
          >
            <label>
              Your Last Name
              <input
                type="text"
                ref="lastName"
                defaultValue={app.investForm.lastName}
                onChange={() => this.changeData()}
              />
            </label>
          </Col>
        </Row>

        <Row className={s.row}>
          <Col
            xs={12}
            sm={12}
            md={12}
            lg={12}
          >
            <label>
              Your Email Address
              <input
                type="email"
                ref="email"
                defaultValue={app.investForm.email}
                onChange={() => this.changeData()}
              />
            </label>
          </Col>
        </Row>

        <span
          className={s.button}
          onClick={() => {
            app.setInvestData({ sent: true });
          }}
        >
          learn more about how it works
        </span>
      </span>;

    const renderThanx = () =>
      <span className={cx(s.thanx, { [s.show]: app.investForm.sent })}>
        <p className={s.title}>
          Thank you for your<br />Landed Program request!
        </p>
        <p className={s.lead}>
          You will be receiving an email shortly on the next steps.
        </p>
      </span>;

    return (
      <section className={s.root}>
        <Helmet title="Invest" />

        <div
          className={s['page-header']}
          ref="parallax"
        >
          <Grid>
            <Row>
              <Col
                xs={10} xsOffset={1}
                sm={10} smOffset={1}
                md={12} mdOffset={0}
                lg={12} lgOffset={0}
              >
                <p className={s.head}>
                  Invest in <i>your community</i>
                </p>
                <span className={s.button}>
                  Start investing today
                </span>
                <br />
                <i className={s.with}>
                  With Landed you get:
                </i>
                <p className={s.what}>
                  Fully-Managed Funds
                  <span className={s.pipe}>|</span>
                  Low Fees
                  <span className={s.pipe}>|</span>
                  Earn up to 15%
                  <span className={s.pipe}>|</span>
                  Minimum $10k Investment
                </p>
              </Col>
            </Row>
          </Grid>
        </div>

        <p className={cx(s.head)}>
          <i>Why I should</i> invest<br />with Landed
        </p>

        <Grid>
          <Row>
            <Col
              xs={12}
              sm={12}
              md={12}
              lg={12}
            >
              <img src={require('./files/i1.jpg')} role="presentation" />
            </Col>
          </Row>
          <Row className={s.why}>
            <Col
              xs={10} xsOffset={1}
              sm={10} smOffset={1}
              md={3} mdOffset={0}
              lg={3} lgOffset={0}
            >
              <p className={s.title}>
                Diversified
              </p>
              <p className={s.text}>
                Spread invetments across homes
              </p>
            </Col>
            <Col
              xs={10} xsOffset={1}
              sm={10} smOffset={1}
              md={3} mdOffset={0}
              lg={3} lgOffset={0}
            >
              <p className={s.title}>
                Passive
              </p>
              <p className={s.text}>
                Educators are responsible for home maintenance and repair
              </p>
            </Col>
            <Col
              xs={10} xsOffset={1}
              sm={10} smOffset={1}
              md={3} mdOffset={0}
              lg={3} lgOffset={0}
            >
              <p className={s.title}>
                Levered
              </p>
              <p className={s.text}>
                Investors get leverage without taking on debt
              </p>
            </Col>
            <Col
              xs={10} xsOffset={1}
              sm={10} smOffset={1}
              md={3} mdOffset={0}
              lg={3} lgOffset={0}
            >
              <p className={s.title}>
                Unique
              </p>
              <p className={s.text}>
                Very difficult to replicate within your current portfolio
              </p>
            </Col>
          </Row>
        </Grid>

        <hr />

        <p className={cx(s.head)}>
          <i>Your Investment’s Impact</i>
        </p>

        <Grid>
          <Row>
            <Col
              xs={10} xsOffset={1}
              sm={10} smOffset={1}
              md={10} mdOffset={1}
              lg={10} lgOffset={1}
            >
              <img src={require('./files/i2.jpg')} role="presentation" />
            </Col>
          </Row>
          <Row className={s.impact}>
            <Col
              xs={10} xsOffset={1}
              sm={10} smOffset={1}
              md={3} mdOffset={2}
              lg={3} lgOffset={2}
            >
              <p>
                By helping educators buy homes, schools are able to retain and attract staff, making <strong>the schools more sustainable and stable.</strong>
              </p>
            </Col>
            <Col
              xs={10} xsOffset={1}
              sm={10} smOffset={1}
              md={3} mdOffset={0}
              lg={3} lgOffset={0}
            >
              <p>
                Educators <strong>start building wealth earlier</strong>, and benefit from tax incentives, shorter commutes and psychological gains of ownership
              </p>
            </Col>
            <Col
              xs={10} xsOffset={1}
              sm={10} smOffset={1}
              md={3} mdOffset={0}
              lg={3} lgOffset={0}
            >
              <p>
                Less turnover and more engagement <strong>improves student outcomes</strong>, particularly in high-poverty, high-minority schools
              </p>
            </Col>
          </Row>
        </Grid>

        <hr />

        <Grid>
          <Row>
            <Col
              xs={12}
              sm={12}
              md={12}
              lg={12}
            >
              <img src={require('./files/info2.jpg')} role="presentation" />
            </Col>
          </Row>
        </Grid>

        <p className={cx(s.head)}>
          <i>Start Investing</i><br />in a Landed Program today
        </p>

        <Grid>
          <Row>
            <Col
              xs={12}
              sm={12}
              md={10} mdOffset={1}
              lg={10} lgOffset={1}
            >
              <div className={s['school-form']}>
                {renderForm()}
                {renderThanx()}
              </div>
            </Col>
          </Row>
        </Grid>

        <Invest />

      </section>
    );
  }
}
