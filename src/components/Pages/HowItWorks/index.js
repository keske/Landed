import React, { Component, PropTypes } from 'react';
import { observer } from 'mobx-react';
import { Grid, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router';
import cx from 'classnames';
import Helmet from 'react-helmet';

// Styles
import s from './index.css';

@observer
export default class HowItWorks extends Component {

  static contextTypes = {
    app: PropTypes.object,
  };

  componentDidMount() {
    const { app } = this.context;

    window.addEventListener('scroll', this.parallax);

    app.headerSetColor('green');
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

  render() {
    return (
      <section className={s.root}>
        <Helmet title="How It Works" />

        <p className={s.head}>
          How Landed Works
        </p>

        <div
          ref="parallax"
          className={s.image}
        >
          <p className={s.head}>
            Start<br />a Landed Program<br /><i>today</i>
          </p>
          <Link
            to="get-started"
            className={s['get-landed']}
          >
            get landed
          </Link>
        </div>

        <p className={s.head}>
          Common Questions
        </p>

      </section>
    );
  }
}
