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

        <span
          className={s.button}
          onClick={() => {
            app.setSchoolData({ sent: true });
          }}
        >
          Submit request
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
                md={5} mdOffset={1}
                lg={5} lgOffset={1}
              >
                <img src={require('./files/n1.jpg')} />
                <i>
                  Landed helps make buying a home possible.
                </i>
                <p>
                  Landed works with schools and investors to create funds that give you access to the money you need to make a down payment on a home
                </p>
              </Col>

              <Col
                xs={12}
                sm={12}
                md={5}
                lg={5}
              >
                <img src={require('./files/n2.jpg')} />
                <i>
                 Landed makes buying and owning a home easier.
                </i>
                <p>
                  Landed has a network of partner banks and
                  vetted brokers who can help you find a home.
                  <br />
                  Landed wi ll work with you every step of the
                  way until you are standing in your new home.
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

       

      </section>
    );
  }
}
