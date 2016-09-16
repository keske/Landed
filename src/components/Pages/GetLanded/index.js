import React, { Component, PropTypes } from 'react';
import { observer } from 'mobx-react';
import { Grid, Row, Col } from 'react-bootstrap';
import cx from 'classnames';
import Helmet from 'react-helmet';

// Components
import Invest from 'components/Helpers/Invest';
import RadioButton from 'components/Helpers/RadioButton';

// Styles
import s from './index.css';

@observer
export default class GetLanded extends Component {

  static contextTypes = {
    app: PropTypes.object,
  };

  componentDidMount() {
    const { app } = this.context;

    app.headerSetColor('green');
    app.hideMenu();
  }

  changeData = () => {
    const { app } = this.context;

    const data = {
      firstName: this.refs.firstName.value,
      lastName: this.refs.lastName.value,
      email: this.refs.email.value,
      phone: this.refs.phone.value,
      program: this.refs.program.value,
    };

    app.setSchoolData(data);
  }

  render() {
    const { app } = this.context;

    const renderForm = () =>
      <span className={cx(s.form, { [s.show]: !app.schoolForm.sent })}>
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
                defaultValue={app.schoolForm.firstName}
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
                defaultValue={app.schoolForm.lastName}
                onChange={() => this.changeData()}
              />
            </label>
          </Col>
        </Row>

        <Row className={s.row}>
          <Col
            xs={12}
            sm={12}
            md={6}
            lg={6}
          >
            <label>
              Your Email Address
              <input
                type="email"
                ref="email"
                defaultValue={app.schoolForm.email}
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
              Your Phone Number
              <input
                type="tel"
                ref="phone"
                defaultValue={app.schoolForm.phone}
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
              School You Want to Start a Program
              <input
                type="text"
                ref="program"
                defaultValue={app.schoolForm.program}
                onChange={() => this.changeData()}
              />
            </label>
          </Col>
        </Row>

        <Row className={s.row}>
          <Col
            xs={12}
            sm={12}
            md={6}
            lg={6}
          >
            <label>
              What is your Landed Program outreach preference?
            </label>
          </Col>

          <Col
            xs={12}
            sm={12}
            md={6}
            lg={6}
          >
            <RadioButton
              text="I'd like to reach out to my school directly about starting a Landed Program"
              active={app.schoolForm.school.first}
              onClick={() => {
                app.setSchoolData({
                  school: {
                    first: true,
                    second: false,
                  },
                });
              }}
            />
            <RadioButton
              text="I'd like Landed to reach out to my school directly"
              active={app.schoolForm.school.second}
              onClick={() => {
                app.setSchoolData({
                  school: {
                    first: false,
                    second: true,
                  },
                });
              }}
            />
          </Col>
        </Row>

        <Row className={s.row}>
          <Col
            xs={12}
            sm={12}
            md={6}
            lg={6}
          >
            <label>
              Would you like your request to be anonymous?
            </label>
          </Col>

          <Col
            xs={12}
            sm={12}
            md={6}
            lg={6}
          >
            <RadioButton
              text="Yes, don’t share my details with the school"
              active={app.schoolForm.anonymous}
              onClick={() => {
                app.setSchoolData({
                  anonymous: true,
                });
              }}
            />
            <RadioButton
              text="No, i'm ok with you sharing my name"
              active={!app.schoolForm.anonymous}
              onClick={() => {
                app.setSchoolData({
                  anonymous: false,
                });
              }}
            />
          </Col>
        </Row>

        <span
          className={s.button}
          onClick={() => {
            app.setSchoolData({ sent: true });
          }}
        >
          learn more about how it works
        </span>
      </span>;

    const renderThanx = () =>
      <span className={cx(s.thanx, { [s.show]: app.schoolForm.sent })}>
        <p className={s.title}>
          Thank you for your<br />Landed Program request!
        </p>
        <p className={s.lead}>
          You will be receiving an email shortly on the next steps.
        </p>

        <div className={s.mean}>
          <i>
            In the meantime:
          </i>
          <p>
            The best way to get a Landed<br />Program started is to get more<br />staff at your school excited.
          </p>
        </div>
        <span className={s.button}>
          send email
        </span>
        <span className={s.button}>
          post on facebook
        </span>
      </span>;

    return (
      <section className={s.root}>
        <Helmet title="Get Landed" />

        <div className={s['page-header']}>
          <p className={cx(s.head, s.how)}>
            Get Landed
          </p>
          <br />
          <i>
            Purchasing a home is expensive. 
          </i>
          <br />
          <p>
            Especially when most of your paycheck is spent on rent and living expenses.
          </p>
        </div>

        <div className={s.program}>
          <Grid>
            <Row>
              <Col
                xs={12}
                sm={12}
                md={4} mdOffset={2}
                lg={4} lgOffset={2}
              >
                <i>
                  A Landed Program makes purchasing a&nbsp;home&nbsp;affordable.
                </i>
                <p>
                  Landed has a network of partner banks and vetted brokers who can help you find a home. Landed will work with you every step of the way until you are standing in your new home.
                </p>
              </Col>

              <Col
                xs={12}
                sm={12}
                md={4}
                lg={4}
              >
                <i>
                  A Landed Program makes purchasing  a&nbsp;home&nbsp;easier.
                </i>
                <p>
                  Landed works with your school and investors to create a Landed Fund, giving you access to the funds you need for 50% of your downpayment.
                </p>
              </Col>
            </Row>
          </Grid>
        </div>

        <p className={cx(s.head)}>
          <i>Ask your school</i>
          <br />
          to start a Landed Program
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
