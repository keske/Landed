import React, { Component } from 'react';
import R from 'ramda';
import Select from 'react-select';
import GoogleAnalytics from 'analytics';
import $ from 'jquery';
import Rebase from 're-base';
// import Intercom from 'intercom-client';

/* utils */
import { isEmailValid } from '../../utils/validate.js';

/* component styles */
import { styles } from './styles/styles.scss';

const MAX_SLIDERS = 3;

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

    // Firebase Integration
    const base = Rebase.createClass('https://dblanded.firebaseio.com');
    const newuser = base.push('users', {
      data: req,
      then() {
        console.log('complete');
      },
    });
    /*
        //Intercom Integration
        const request = $.ajax({
          url: 'http://landed.com/mail2.php',
          type: 'post',
          data: req,
        });
    */
    // Mailchimp Integration
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
      label: 'Homebuyer - looking for more information',
      value: 'Homebuyer - looking for more information',
      text:  'I want to know how this would work for my home purchase',
    }, {
      label: 'Employer/School - looking for more information',
      value: 'Employer/School - looking for more information',
      text:  'I want more information about starting a Landed Fund.',
    }, {
      label: 'Investor/Alumni - looking for more information',
      value: 'Investor/Alumni - looking for more information',
      text:  'I want more information about participating in a Landed Fund',
    }, {
      label: 'Community Champion - looking for more information',
      value: 'Community Champion - looking for more information',
      text:  'I want more information about championing a Landed Fund in my community',
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
                dangerouslySetInnerHTML={{ __html: 'Get community down payment support' }}
              />
              <p className="info"
                dangerouslySetInnerHTML={{ __html: 'We\'re adding communities every week and we\'ll be in touch before you know it.' }}
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
                    In which state would the fund be based?
                  </p>
                  <Select
                    name="form-field-location"
                    value={ location || 'Select location' }
                    searchable={ false }
                    options={ states }
                    valueRenderer={ renderOption }
                    optionRenderer={ renderStateOption }
                    onChange={ (val) => this.setState({ location: val }) }
                  />
                </div>

                <div className="slide col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <p className="label">
                    What describes your <br className="show-xs hidden-sm hidden-md hidden-lg" />situation best?
                  </p>
                  <Select
                    name="form-field-stage"
                    className="stage-style"
                    searchable={ false }
                    options={ options }
                    optionRenderer={ renderOption }
                    valueRenderer={ renderOption }
                    value={ stage || 'Select stage' }
                    onChange={ (val) => this.setState({ stage: val }) }
                  />
                </div>

                <div className="slide col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
                  <p className="thanks-label">
                    We'll be in touch soon!
                  </p>
                  <p className="info">
                    Lookout for an email within 24 hours with next steps.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row nav">
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 text-left">
              <div
                className={ `button previous ${ (slider === 0 || slider === MAX_SLIDERS) && 'hide' }` }
                onClick={ () => this.backSlider() }
              >
                <span className="previous-icon"/>
                previous
              </div>
            </div>
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 text-right">
              <button
                className={ `button next ${ slider === MAX_SLIDERS && 'hide' }` }
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
                <span className="next-icon" />
              </button>
              {
                slider === MAX_SLIDERS && <GoogleAnalytics id="UA-72154127-1" set="event" />
              }
            </div>
          </div>
        </div>
      </section>
    );
  }
}
