import React, { Component } from 'react';
import R from 'ramda';
import Select from 'react-select';
import $ from 'jquery';
import Rebase from 're-base';

/* utils */
import { isEmailValid } from '../../utils/validate.js';

/* component styles */
import { styles } from './styles/styles.scss';

const MAX_SLIDERS = 2;

export class Quiz extends Component {
  constructor(props) {
    super(props);

    this.state = {
      slider: 0,
      email: '',
      location: '',
      stage: '',
      succes: false,
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

  handleRequest() {
    const { email, location, stage } = this.state;

    const req = {
      email,
      data: {
        stage,
        location,
      },
    };

    const base = Rebase.createClass('https://dblanded.firebaseio.com');

    base.push('users', {
      data: req,
      then() {
        console.log('complete');
      },
    });

    const request = $.ajax({
      url: 'http://landed.com/mail.php',
      type: 'post',
      data: req,
    });

    request.done((data) => {
      console.log(data);
    });

    this.setState({ succes: true });

    request.fail((jqXHR, textStatus, errorThrown) => {
      console.error(
        'The following error occurred: ' +
        textStatus, errorThrown
      );
    });
  }

  render() {
    const { slider, email, location, stage } = this.state;

    console.log(location);

    // Get all USA states
    const data = require('./states');
    const states = [];
    // Prepare data for react-select
    data.default.map(state => {
      states.push({
        value: state.name,
        label: state.name,
      });
    });

    // Render customize state options for react-select
    const renderStateOption = (option) =>
      <span className="select-option">
        <span className="select-label">{ option.label }</span>
      </span>;

    // Stage options
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

    // Render option
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
                dangerouslySetInnerHTML={{ __html: 'Join Landed\'s waitlist' }}
              />
              <p className="info"
                dangerouslySetInnerHTML={{ __html: 'We\'re adding new users every week and we\'ll be in touch before you know it.' }}
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
                    onChange={ (event) => this.setState({ email: event.target.value }) }
                  />
                </div>

                <div className="slide col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <p className="label">
                    Where will the home be located?
                  </p>
                  <Select
                    name="form-field-location"
                    value={ location || 'Select location' }
                    searchable={ false }
                    options={ states }
                    optionRenderer={ renderStateOption }
                    onChange={ (val) => this.setState({ location: val }) }
                  />
                </div>

                <div className="slide col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <p className="label">
                    What stage of the home buying <br className="show-xs hidden-sm hidden-md hidden-lg" />process are we?
                  </p>
                  <Select
                    className="stage-style"
                    searchable={ false }
                    name="form-field-stage"
                    options={ options }
                    optionRenderer={ renderOption }
                    valueRenderer={ renderOption }
                    value={ stage || 'Select stage' }
                    onChange={ (val) => this.setState({ stage: val }) }
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
              <button
                className="button next"
                onClick={ () =>
                  slider === MAX_SLIDERS
                    ? this.handleRequest()
                    : this.nextSlider()
                }
                disabled={
                  slider === 0 && !isEmailValid(email) ||
                  slider === 1 && location === ''
                }
              >
                next
                { /* slider !== MAX_SLIDERS && 'next'
                slider === MAX_SLIDERS && 'let’s get started' */ }
                <span className="next-icon" />
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
