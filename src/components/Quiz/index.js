import React, { Component } from 'react';
import R from 'ramda';
import Select from 'react-select';
// import $ from 'jquery';
// import GoogleAnalytics from 'analytics';
// import Rebase from 're-base';

/* component styles */
import { styles } from './styles/styles.scss';

const MAX_SLIDERS = 2;

export class Quiz extends Component {
  constructor(props) {
    super(props);

    this.state = {
      slider: 0,
    };
  }

  nextSlider() {
    const { slider } = this.state;

    this.setState({
      slider: slider < MAX_SLIDERS ? R.sum([slider, 1]) : slider,
    });
  }

  backSlider() {
    const { slider } = this.state;

    this.setState({
      slider: slider > 0 ? R.subtract(slider, 1) : slider,
    });
  }

  render() {
    const { slider } = this.state;

    const data = require('./states');
    const states = [];

    data.default.map(state => {
      states.push({
        value: state.name,
        label: state.name,
      });
    });

    const renderStateOption = (option) =>
      <span className="select-option">
        <span className="select-label">{ option.label }</span>
      </span>;

    const options = [{
      label: 'Early Search Without Broker',
      value: 'Early Search Without Broker',
      text: 'Just understanding the different options.',
    }, {
      label: 'Already Searching With Broker',
      value: 'Already Searching With Broker',
      text: 'The perfect home hasn’t been found yet.',
    }, {
      label: 'Post-Offer',
      value: 'Post-Offer',
      text: 'An offer has been accepted but property is still closing.',
    }, {
      label: 'Already Closed',
      value: 'Already Closed',
      text: 'Looking to make our informal deal more formal.',
    }];

    const renderOption = (option) =>
      <span className="select-option">
        <span className="select-label">{ option.label }</span>
        <span className="select-text">{ option.text }</span>
      </span>;

    return (
      <section className={ `${styles}` }>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 col-md-offset-2 col-lg-offet-12 header">
              <p className="title"
                dangerouslySetInnerHTML={{ __html: 'Join Landed\'s home buyer waitlist' }}
              />
              <p className="info"
                dangerouslySetInnerHTML={{ __html: 'We\'re adding new users every few weeks and we\'ll be in touch before you know it.' }}
              />
            </div>
          </div>

          <div className="row">
            <div className="wrap">
              <div className={`slides position-${ slider }`}>

                <div className="slide col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <p className="label">
                    What’s your email
                  </p>
                  <input type="text"
                    placeholder="Your email"
                  />
                </div>

                <div className="slide col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <p className="label">
                    Where will the home be located?
                  </p>
                  <Select
                    name="form-field-name"
                    placeholder="Please select state"
                    searchable={ false }
                    options={ states }
                    optionRenderer={ renderStateOption }
                  />
                </div>

                <div className="slide col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <p className="label">
                    What stage of the home buying process are we?
                  </p>
                  <Select
                    className="stage-style"
                    searchable={ false }
                    name="form-field-name"
                    options={ options }
                    optionRenderer={ renderOption }
                    valueRenderer={ renderOption }
                    value="Early Search Without Broker"
                  />
                </div>

              </div>
            </div>
          </div>

          <div className="row nav">
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 text-left">
              <div
                className={ `button previous ${ slider === 0 && 'hide' }` }
                onClick={ () => this.backSlider() }
              >
                <span className="previous-icon"/>
                previous
              </div>
            </div>
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 text-right">
              <div className="button next" onClick={ () => this.nextSlider() }>
                { slider !== MAX_SLIDERS && 'next' }
                { slider === MAX_SLIDERS && 'let’s get started' }
                <span className="next-icon" />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
