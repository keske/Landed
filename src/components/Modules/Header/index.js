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
              <span className={s.logo} />
              <span className={s['text-logo']} />
            </Col>
            <Col
              xs={12}
              sm={12}
              md={8}
              lg={8}
              className={s.nav}
            >
              <Link
                to="/active-programs"
                activeClassName={s.active}
              >
                Active Programs
              </Link>
              <Link
                to="/how-it-works"
                activeClassName={s.active}
              >
                How it Works
              </Link>
              <Link
                to="/invest"
                activeClassName={s.active}
              >
                Invest
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
            </Col>
          </Row>
        </Grid>
      </section>
    );
  }
}