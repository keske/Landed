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
      green: false,
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
      green: window.pageYOffset > 200,
    });
  }

  render() {
    const { green } = this.state;
    const { app } = this.context;

    const renderNav = () =>
      <span>

        <Link
          to="/how-it-works"
          activeClassName={s.active}
        >
          How it Works
        </Link>

        <Link
          to="/about"
          activeClassName={s.active}
        >
          About
        </Link>
        <Link
          to="/get-landed"
          className={s['get-landed']}
          activeClassName={s.active}
        >
          Get Landed
        </Link>
      </span>;

    return (
      <section
        className={cx(
          s.root,
          { [s.green]: green },
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
          {renderNav()}
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
