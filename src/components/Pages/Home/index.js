import React, { Component } from 'react';
import { Link } from 'react-router';
import Helmet from 'react-helmet';

// Components
// import ImageHeader from 'components/Modules/ImageHeader';

// Styles
import s from './index.css';

export default class Home extends Component {
  render() {
    return (
      <section className={s.root}>
        <Helmet title="Home page" />

        <div className={s.image}>
          <p className={s.title}>
            <i>If you work at school,</i>
            we’ll help you buy a home
          </p>
          <p className={s.intro}>
            Landed is the homebuying partner you’ve aways wantedLanded is the homebuying partner you’ve aways wantedLanded is the homebuying partner you’ve aways wanted
          </p>
          <br />
          <Link
            to="get-started"
            className={s['get-started']}
          >
            get started
          </Link>
        </div>

      </section>
    );
  }
}
