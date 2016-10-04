import React, { Component, PropTypes } from 'react';
import { observer } from 'mobx-react';
import { Grid, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router';
import cx from 'classnames';
import Helmet from 'react-helmet';

// Components
import Invest from 'components/Helpers/Invest';

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
                  Making home ownership possible, one school at a time.
                </p>
                <br />
                <p className={s.intro}>
                  At Landed, we’re on a mission to make homeownership accessible, affordable and easy in expensive cities.
                </p>
              </Col>
            </Row>
          </Grid>
        </div>

        <p className={cx(s.head, s.how)}>
          How <i>LASD Landed</i> Works
        </p>

        <Grid className={s.about}>
          <Row>
            <Col
              xs={10} xsOffset={1}
              sm={10} smOffset={1}
              md={4} mdOffset={0}
              lg={4} lgOffset={0}
            >
              <span className={s.circle} />
              <p className={s.head}>
                The system is rigged
              </p>
              <p className={s.text}>
                Nobody can responsibly buy their first home by themselves, even with a supportive bank.
              </p>
              <p className={s.text}>
                Without gifts or partners, millions of Americans are making excessively risky investment decisions that the bankers themselves would never make.
              </p>
            </Col>

            <Col
              xs={10} xsOffset={1}
              sm={10} smOffset={1}
              md={4} mdOffset={0}
              lg={4} lgOffset={0}
            >
              <span className={s.circle} />
              <p className={s.head}>
                Together, there is another way
              </p>
              <p className={s.text}>
                Nobody can responsibly buy their first home by themselves, even with a supportive bank.
              </p>
              <p className={s.text}>
                Without gifts or partners, millions of Americans are making excessively risky investment decisions that the bankers themselves would never make.
              </p>
            </Col>

            <Col
              xs={10} xsOffset={1}
              sm={10} smOffset={1}
              md={4} mdOffset={0}
              lg={4} lgOffset={0}
            >
              <span className={s.circle} />
              <p className={s.head}>
                Less vulnerability, more wealth
              </p>
              <p className={s.text}>
                Nobody can responsibly buy their first home by themselves, even with a supportive bank.
              </p>
              <p className={s.text}>
                Without gifts or partners, millions of Americans are making excessively risky investment decisions that the bankers themselves would never make.
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
          The company, founded in 2015, has the backing of: Y Combinator business accelerator (winter 2016 batch), prominent angel and venture capital investors, top banking executives, former directors of federal housing authorities, affordable housing policy experts, union organizers, philanthropists, and, Stanford economists.
        </p>

        <p className={cx(s.head, s.about)}>
          <i>
            The Landed Team
          </i>
        </p>
        <p className={s['head-text']}>
          We're a dedicated team of urban real estate and investing enthusiasts who believe everyone should have the ability to achieve the dream of building wealth by owning property – whether as a resident or investor – in smarter, simpler and more accessible ways than exist today.
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
                  <p className={s.role}>
                    co-founder, President
                  </p>
                  <p className={s.description}>
                    Customers and Partnerships. 
                    <br />
                    Recovering campaigner.
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
                  <p className={s.role}>
                    co-founder, CEO
                  </p>
                  <p className={s.description}>
                    Investments.
                    <br />
                    Recovering engineer.
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
                  <p className={s.role}>
                    co-founder
                  </p>
                  <p className={s.description}>
                    Product.
                    <br />
                    Recovering frontier-markets investor.
                  </p>
                </div>
              </Col>

            </Row>
          </Grid>
        </div>

        <Invest />

      </section>
    );
  }
}
