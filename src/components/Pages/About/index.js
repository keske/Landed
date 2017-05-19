import React, { Component, PropTypes } from 'react';
import { observer } from 'mobx-react';
import { Grid, Row, Col } from 'react-bootstrap';
import cx from 'classnames';
import Helmet from 'react-helmet';
import { Link } from 'react-router';

// Styles
import s from './index.css';
import Investors from 'components/Helpers/Investors';

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
                  Uphold those who uphold us
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
                Many essential professionals, like teachers, struggle to build financial security near where they work.
              </p>
              <p className={s.text}>
                High land prices prevent them from becoming the long-term residents our communities are dependent on.
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
                As a financial coach, we help essential professionals save money faster, even in expensive places.
              </p>
              <p className={s.text}>
                And when the time comes that they are ready to buy a home, <Link to="/how-it-works">we have some tools to make it a little easier.</Link>
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
                If we want stronger schools and safer communities, we need to uphold those that make it possible.
              </p>
              <p className={s.text}>
                A house is more than an investment - it’s home. The more of us feel at home, the better off we’ll all be.
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
                    <a href="https://www.linkedin.com/in/alexlofton/" target="_blank">Alex Lofton</a>
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
                    <a href="https://www.linkedin.com/in/jonathanasmis/" target="_blank">Jonathan Asmis</a>
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
                    <a href="https://www.linkedin.com/in/jessecvaughan/" target="_blank">Jesse Vaughan</a>
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
                    <a href="https://www.linkedin.com/in/jessica-zhao-4a161114/" target="_blank">Jess Zhao</a>
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
                    <a href="https://www.linkedin.com/in/ianmagruder/" target="_blank">Ian Magruder</a>
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
                    <a href="https://www.linkedin.com/in/nikkilowy/" target="_blank">Nikki Lowy</a>
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
        <Investors />
      </section>
    );
  }
}