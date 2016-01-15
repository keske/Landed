import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import 'bootstrap-webpack';
import GoogleAnalytics from 'analytics';

/* actions */
import * as actionCreators from 'actions/app';

/* global styles */
import 'style!./styles/app.scss';

/* application components */
import { Header } from 'components/Header';
import { Footer } from 'components/Footer';
import { PopUp } from 'components/PopUp';
import { QuizPopUp } from 'components/QuizPopUp';

@connect(
  state => state.app,
  dispatch => bindActionCreators(actionCreators, dispatch)
)
export class App extends Component {
  static propTypes = {
    children: React.PropTypes.any,
    popup: React.PropTypes.any,
  };
  render() {
    const popupchange = this.props.popup;

    return (
      <section>
        <GoogleAnalytics id="UA-72154127-1" popup={ popupchange } />
        <Header { ...this.props } />
          { this.props.children }
        <Footer />
        <PopUp { ...this.props } />
        <QuizPopUp { ...this.props } />
      </section>
    );
  }
}
