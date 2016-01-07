import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import 'bootstrap-webpack';
import GoogleAnalytics from 'react-g-analytics'

/* actions */
import * as actionCreators from 'actions/app';

/* global styles */
import 'style!./styles/app.scss';

/* application components */
import { Header } from 'components/Header';
import { Footer } from 'components/Footer';
import { PopUp } from 'components/PopUp';

@connect(
  state => state.app,
  dispatch => bindActionCreators(actionCreators, dispatch)
)
export class App extends Component {
  static propTypes = {
    children: React.PropTypes.any,
  }
  render() {
    return (
      <section>
        <Header { ...this.props } />
          { this.props.children }
        <Footer />
        <GoogleAnalytics id="UA-72154127-1" />
        <PopUp { ...this.props } />
      </section>
    );
  }
}
