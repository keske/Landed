import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import 'bootstrap-webpack';
import GoogleAnalytics from 'analytics';
import DocumentMeta from 'react-document-meta';

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
    const meta = {
      title: 'Landed',
      description: 'Easily and legally get down payment support from friends and family.',
      meta: {
        viewport: 'width=device-width, initial-scale=1',
        property:{
          twitter: {
            card: 'summary_large_image',
            site: '@landedhomes',
            title: 'Landed - Smarter Homeownership',
            description: 'Easily and legally get down payment support from friends and family.',
            image: 'http://landed.com/images/meta/twittercard.jpg',
            creator: '@jonasmis'
          },
          og: {
            title: 'Landed',
            type: 'website',
            url: 'www.landed.com',
            image: {
              url:'http://landed.com/images/meta/facebookad.jpg',
              type: 'image/jpeg',
              width: '2400',
              height: '1208'
            },
          description: 'Easily and legally get down payment support from friends and family.'
        }
      }
    }
  };

    return (
      <section>
        <GoogleAnalytics id="UA-72154127-1" popup={ popupchange } />
        <DocumentMeta {...meta} />
        <Header { ...this.props } />
          { this.props.children }
        <Footer />
        <PopUp { ...this.props } />
        <QuizPopUp { ...this.props } />
      </section>
    );
  }
}
