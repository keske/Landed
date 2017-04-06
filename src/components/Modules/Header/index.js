import React, { Component, PropTypes } from 'react';
import { observer } from 'mobx-react';
import { Grid, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router';
import cx from 'classnames';

// Styles
import s from './index.css';

@observer
export default class Header extends Component {

  static contextTypes = {
    app: PropTypes.object,
  };

  constructor(props) {
    super(props);

    this.state = {
      green: window.innerWidth < 640,
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.animateHeader);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.animateHeader);
  }

  animateHeader = () => {
    this.setState({
      green: window.pageYOffset > 50 && !window.innerWidth < 640,
    });
  }

  render() {
    const { green } = this.state;
    const { app } = this.context;

    const renderNav = () =>
      <span>
        <Link
          to="/about"
          activeClassName={s.active}
        >
          About
        </Link>
        <a
          target="_blank"
          href="http://blog.landed.com"
          activeClassName={s.active}
        >
          Blog
        </a>
        <Link
          to="/calculator"
          activeClassName={s.active}
        >
          Calculator
        </Link>
        <Link
          to="/how-it-works"
          activeClassName={s.active}
        >
          How it Works
        </Link>
        <span
          className={s['get-landed']}
          onClick={() => { app.showQuiz(); }}
        >
          Get Landed
        </span>
      </span>;

    const renderNavMobile = () =>
     <span>
        <Link
          to="/about"
          activeClassName={s.active}
        >
          About
        </Link>
        <a
          target="_blank"
          href="http://blog.landed.com"
          activeClassName={s.active}
        >
          Blog
        </a>
        <Link
          to="/how-it-works"
          activeClassName={s.active}
        >
          How it Works
        </Link>
        <span
          className={s['get-landed']}
          onClick={() => { app.showQuiz(); }}
        >
          Get Landed
        </span>
      </span>;

    return (
      <section
        className={cx(
          s.root,
          { [s.green]: green || window.innerWidth < 640 },
          s[`color-${app.headerColor}`],
        )}
      >
        <Grid>
          <Row>
            <Col
              xs={12}
              sm={12}
              md={4}
              lg={4}
            >
              <Link to="/">
                <span className={s.logo} />
                <span className={s['text-logo']} />
              </Link>
            </Col>
            <Col
              xs={12} xsHidden
              sm={12} smHidden
              md={8}
              lg={8}
              className={s.nav}
            >
              {renderNav()}
            </Col>
            <Col
              xs={12}
              sm={12}
              md={8} mdHidden
              lg={8} lgHidden
            >
              <span
                className={s.burger}
                onClick={() => {
                  app.showMenu();
                }}
              />
            </Col>
          </Row>
        </Grid>
        <div className={cx(s.menu, { show: app.menu })}>
          {renderNavMobile()}
          <span
            className={s.close}
            onClick={() => {
              app.hideMenu();
            }}
          />
        </div>
      </section>
    );
  }
}
