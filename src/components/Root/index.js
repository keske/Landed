import React, { Component, PropTypes } from 'react';
import { observer } from 'mobx-react';
import Helmet from 'react-helmet';

import { app, calc } from '../../stores';

// Components
import Header from 'components/Modules/Header';
import Footer from 'components/Modules/Footer';
import Subscribe from 'components/Modules/Subscribe';
import QuizPopUp from 'components/Modules/QuizPopUp';

import s from './index.css';

@observer
export default class Root extends Component {

  static propTypes = {
    location: PropTypes.object,
    children: PropTypes.object,
    params: PropTypes.object,
    history: PropTypes.object,
  };

  static childContextTypes = {
    app: PropTypes.object,
    calc: PropTypes.object,
  }

  getChildContext() {
    return {
      app,
      calc,
    };
  }

  render() {
    return (
      <section className={s}>
        <Helmet title="Landed" />
        <Header />
        {
          this.props.children &&
            React.cloneElement(this.props.children, this.props)
        }
        <QuizPopUp />
        {/*<Subscribe />*/}
        <Footer />
      </section>
    );
  }
}
