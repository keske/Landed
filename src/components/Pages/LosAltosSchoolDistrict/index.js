import React, { Component, PropTypes } from 'react';
import { observer } from 'mobx-react';
import { Grid, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router';
import cx from 'classnames';
import Helmet from 'react-helmet';

// Components
import Invest from 'components/Helpers/Invest';

const schoolImage = require('./files/school.jpg');

// Styles
import s from './index.css';

@observer
export default class LosAltosSchoolDistrict extends Component {

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

    if (screen.width >= 720) {
      this.refs.parallax.style.backgroundPosition = `0px ${top}px`;
    }
  }

  changeData = () => {
    const { app } = this.context;

    const data = {
      firstName: this.refs.firstName.value,
      lastName: this.refs.lastName.value,
      email: this.refs.email.value,
      phone: this.refs.phone.value,
    };

    app.setSchoolData(data);
  }

  render() {
    const { app } = this.context;

    const renderForm = () =>
      <span className={cx(s.form, { [s.show]: !app.lasdSchoolForm.sent })}>
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
                defaultValue={app.lasdSchoolForm.firstName}
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
                defaultValue={app.lasdSchoolForm.lastName}
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
                defaultValue={app.lasdSchoolForm.email}
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
                defaultValue={app.lasdSchoolForm.phone}
                onChange={() => this.changeData()}
              />
            </label>
          </Col>
        </Row>

        <span
          className={s.button}
          onClick={() => {
            app.setLASDData({ sent: true });
          }}
        >
          Submit my application
        </span>
      </span>;

    const renderThanx = () =>
      <span className={cx(s.thanx, { [s.show]: app.lasdSchoolForm.sent })}>
        <p className={s.title}>
          Thank you for applying<br />for the LASD Landed Program
        </p>
        <p className={s.lead}>
          The Landed Program team will<br />contact you shortly to discuss your<br />eligibility and next steps.
        </p>
      </span>;

    return (
      <section className={s.root}>
        <Helmet title="How It Works" />

        <Grid>
          <span className={s['lasd-logo']} />
        </Grid>

        <div className={s['page-header']}>
          <img src={schoolImage} role="presentation" />
          <p className={s.title}>
            Los Altos <i>School District</i>
          </p>

          <i className={s.program}>
            Landed Program
          </i>

          <p className={s.intro}>
            At Los Altos School District, we and our students love our teachers. That’s why we started our Landed program, so they can live and be a permanent part of our community.
          </p>
        </div>

        <p className={s.head}>
          How <i>LASD Landed</i> Works
        </p>

        <Grid className={s.how}>
          <Row>
            <Col
              xs={12}
              sm={12}
              md={4}
              lg={4}
            >
              <p className={s.num}>
                1
              </p>
              <p className={s.explain}>
               As LASD staff, you apply to get downpayment and homebuying help from the LASD Landed Program.
              </p>
            </Col>

            <Col
              xs={12}
              sm={12}
              md={4}
              lg={4}
            >
              <p className={s.num}>
                2
              </p>
              <p className={s.explain}>
               Once you’ve passed the Landed and bank eligibility criteria, you will work with Landed to secure a loan and have access to Landed vetted brokers.
              </p>
            </Col>

            <Col
              xs={12}
              sm={12}
              md={4}
              lg={4}
            >
              <p className={s.num}>
                3
              </p>
              <p className={s.explain}>
               You get access to these funds and support to find a home through Landed’s vetter network, getting you in a home in a smarter and faster way.
              </p>
            </Col>
          </Row>
        </Grid>

        <hr />

        <p className={s.head}>
          <i>Apply for the</i>
          <br />
          LASD Landed Program
          <br />
          <i className={s.small}>
            Minimum Requirements to Apply:
          </i>
        </p>

        <Grid className={s.apply}>
          <Row>
            <Col
              xs={12}
              sm={12}
              md={3}
              lg={3}
            >
              <span className={s['image-placeholder']} />
              <p>
                You must apply with your LASD email address
              </p>
            </Col>

            <Col
              xs={12}
              sm={12}
              md={3}
              lg={3}
            >
              <span className={s['image-placeholder']} />
              <p>
                Worked at LASD for 1 year
              </p>
            </Col>

            <Col
              xs={12}
              sm={12}
              md={3}
              lg={3}
            >
              <span className={s['image-placeholder']} />
              <p>
                Must stay at LASD for 1 year after being accepted to the program
              </p>
            </Col>

            <Col
              xs={12}
              sm={12}
              md={3}
              lg={3}
            >
              <span className={s['image-placeholder']} />
              <p>
                Good financial standing to pass credit check
              </p>
            </Col>
          </Row>
        </Grid>

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

        <div
          ref="parallax"
          className={s.image}
        >
          <p className={s.head}>
            <i>Invest in<br />LASD’s Landed Program</i>
          </p>
          <p className={s.intro}>
            By investing your money into a Landed Program, you make it possible for educators to buy homes so they can live where they work.
          </p>
          <br />
          <Link
            to="get-started"
            className={s.button}
          >
            get landed
          </Link>
          <br />
          <Link
            to="/"
            className={s.learn}
          >
            Learn how Landed investments work
          </Link>
        </div>

        <Invest />

      </section>
    );
  }
}
