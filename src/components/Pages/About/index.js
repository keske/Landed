import React, { Component, PropTypes } from 'react';
import { observer } from 'mobx-react';
import { Grid, Row, Col } from 'react-bootstrap';
import cx from 'classnames';
import Helmet from 'react-helmet';

// Styles
import s from './index.css';

@observer
export default class About extends Component {

  static contextTypes = {
    app: PropTypes.object,
  };

  componentDidMount() {
    const { app } = this.context;

    app.headerSetColor('white');
    app.hideMenu();

    window.scrollTo(0, 0);
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
    return (
      <section className={s.root}>
        <Helmet title="About" />

        <div className={s['page-header']}>
          <Grid>
            <Row>
              <Col
                xs={10} xsOffset={1}
                sm={10} smOffset={1}
                md={12} mdOffset={0}
                lg={12} lgOffset={0}
              >
                <p className={s.title}>
                  Making homeownership possible, one school at a&nbsp;time.
                </p>
                <br />
                <p className={s.intro}>
                  At Landed, we’re on a mission to make homeownership accessible, affordable, and easy, even in expensive cities.
                </p>
              </Col>
            </Row>
          </Grid>
        </div>


        <Grid className={s.about}>
          <Row>
            <Col
              xs={10} xsOffset={1}
              sm={10} smOffset={1}
              md={4} mdOffset={0}
              lg={4} lgOffset={0}
            >
              
              <p className={s.head}>
               <img src={require('./files/a1.jpg')} />
                Insurmountable barriers
              </p>
              <p className={s.text}>               
                Many people can't responsibly buy their first home by themselves, even with a supportive bank.
              </p>
              <p className={s.text}>               
                Without partners, millions of Americans are making excessively risky investment decisions that the bankers themselves would never make.
              </p>
            </Col>

            <Col
              xs={10} xsOffset={1}
              sm={10} smOffset={1}
              md={4} mdOffset={0}
              lg={4} lgOffset={0}
            >
              
              <p className={s.head}>
              <img src={require('./files/a2.jpg')} />
                Together, there is another way
              </p>
              <p className={s.text}>
                Joining forces to pay for a home is extremely hard, but it really doesn’t have to be.
              </p>
              <p className={s.text}>
                We work with banks, title companies, insurers, lawyers and brokers to make the hard parts simpler.
              </p>
            </Col>

            <Col
              xs={10} xsOffset={1}
              sm={10} smOffset={1}
              md={4} mdOffset={0}
              lg={4} lgOffset={0}
            >
             
              <p className={s.head}>
              <img src={require('./files/a3.jpg')} />
                Less vulnerability, more wealth
              </p>
              <p className={s.text}>
                We want everyone to have a real partner to help them buy their first home.
              </p>
              <p className={s.text}>
                Until then, we’ll keep working to reduce barriers to wealth building and make people less financially vulnerable.
              </p>
            </Col>
          </Row>
        </Grid>

        <br />

        <p className={cx(s.head, s.about)}>
          <i>
            Who is Landed?
          </i>
        </p>
        <p className={s['head-text']}>
          The company, founded in 2015, has the backing of: Y Combinator, prominent angel and venture capital investors, top banking executives, former directors of federal housing authorities, affordable housing policy experts, union organizers, philanthropists, and Stanford economists.
        </p>

        <div className={s.team}>
          <Grid>
            <Row>
              <Col
                xs={10} xsOffset={1}
                sm={10} smOffset={1}
                md={4} mdOffset={0}
                lg={4} lgOffset={0}
              >
                <div className={s.card}>
                  <img
                    src={require('./files/alex.jpg')}
                    className={s.circle}
                    role="presentation"
                  />
                  <p className={s.name}>
                    Alex Lofton
                  </p>
                  <p className={s.description}>
                    Head of Growth. Co-founder.
                    <br />
                    Former campaigner.
                  </p>
                </div>
              </Col>
              <Col
                xs={10} xsOffset={1}
                sm={10} smOffset={1}
                md={4} mdOffset={0}
                lg={4} lgOffset={0}
              >
                <div className={s.card}>
                  <img
                    src={require('./files/jonathan.jpg')}
                    className={s.circle}
                    role="presentation"
                  />
                  <p className={s.name}>
                    Jonathan Asmis
                  </p>
                  <p className={s.description}>
                    CEO. Co-founder.
                    <br />
                    Former engineer.
                  </p>
                </div>
              </Col>
              <Col
                xs={10} xsOffset={1}
                sm={10} smOffset={1}
                md={4} mdOffset={0}
                lg={4} lgOffset={0}
              >
                <div className={s.card}>
                  <img
                    src={require('./files/jesse.jpg')}
                    className={s.circle}
                    role="presentation"
                  />
                  <p className={s.name}>
                    Jesse Vaughan
                  </p>
                  <p className={s.description}>
                    Head of Investments. Co-founder.
                    <br />
                    Former frontier-markets investor.
                  </p>
                </div>
              </Col>
            </Row>
            <Row>
              <Col
                xs={10} xsOffset={1}
                sm={10} smOffset={1}
                md={4} mdOffset={0}
                lg={4} lgOffset={0}
              >
                <div className={s.card}>
                  <img
                    src={require('./files/jess.jpg')}
                    className={s.circle}
                    role="presentation"
                  />
                  <p className={s.name}>
                    Jess Zhao
                  </p>
                  <p className={s.description}>
                    Customer Experience.
                    <br />
                    Former management consultant.
                  </p>
                </div>
              </Col>
              <Col
                xs={10} xsOffset={1}
                sm={10} smOffset={1}
                md={4} mdOffset={0}
                lg={4} lgOffset={0}
              >
                <div className={s.card}>
                  <img
                    src={require('./files/ian.jpg')}
                    className={s.circle}
                    role="presentation"
                  />
                  <p className={s.name}>
                    Ian Magruder
                  </p>
                  <p className={s.description}>
                    Partnerships.
                    <br />
                    Former organizer.
                  </p>
                </div>
              </Col>
              <Col
                xs={10} xsOffset={1}
                sm={10} smOffset={1}
                md={4} mdOffset={0}
                lg={4} lgOffset={0}
              >
                <div className={s.card}>
                  <img
                    src={require('./files/nikki.jpg')}
                    className={s.circle}
                    role="presentation"
                  />
                  <p className={s.name}>
                    Nikki Lowy
                  </p>
                  <p className={s.description}>
                    Partnerships.
                    <br />
                    Former school builder.
                  </p>
                </div>
              </Col>
            </Row>
          </Grid>
        </div>
      </section>
    );
  }
}