import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import R from 'ramda';
import Select from 'react-select';
import $ from 'jquery';
import cx from 'classnames';

// Utils
import { isEmailValid } from 'utils/validate.js';

// Styles
import s from './index.css';

const MAX_SLIDERS = 2;

export default class Quiz extends Component {
  constructor(props) {
    super(props);

    this.state = {
      slider: 0,
      email: '',
      location: '',
      stage: '',
      success: false,
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

    const request = $.ajax({
      url: 'http://landed.com/mail.php',
      type: 'post',
      data: req,
    });

    request.done((data) => {
      console.log(data);
    });

    this.setState({ success: true });

    request.fail((jqXHR, textStatus, errorThrown) => {
      console.log('The following error occurred: ' +
        textStatus, errorThrown
      );
    });
  }

  render() {
    const { slider, email, location, stage, success } = this.state;

    // Get all USA states
    const data = require('./states');
    const states = [];
    // Prepare data for react-select
    data.default.map((state) => {
      states.push({
        value: state.name,
        label: state.name,
      });
    });

    // Render customize state options for react-select
    const renderStateOption = (option) =>
      <span className={s['select-option']}>
        <span className={s['select-label']}>
          {option.label}
        </span>
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
      <span className={s['select-option']}>
        <span className={s['select-label']}>{option.label}</span>
        <span className={s['select-label']}>{option.text}</span>
      </span>;

    return (
      <section className={s.root}>
        <Row className={s.header}>
          <p
            className={s.title}
            dangerouslySetInnerHTML={{ __html:
              'Join Landed\'s home buyer waitlist',
            }}
          />
          <p
            className={s.info}
            dangerouslySetInnerHTML={{ __html:
              'We\'re adding new users every few weeks and we\'ll be in touch before you know it.',
          }}
          />
        </Row>

        {
          success &&
            <span className={s.success}>
              <p className={s.title}>
                Thanks, and welcome to the Landed community!
              </p>
              <p className={s.text}>
                We'll be in touch soon explaining your next steps.
              </p>
            </span>
        }

        {
          !success &&
            <section>
              <Row>
                <div className={s.wrap}>
                  <div
                    className={cx(
                      s.slides,
                      s[`position-${slider}`]
                    )}
                  >

                    <Col
                      xs={12}
                      sm={12}
                      md={12}
                      lg={12}
                      className={s.slide}
                    >
                      <p className={s.label}>
                        What’s your email
                      </p>
                      <input
                        type="text"
                        placeholder="Your email"
                        onChange={(event) =>
                          this.setState({ email: event.target.value })
                        }
                      />
                    </Col>

                    <Col
                      xs={12}
                      sm={12}
                      md={12}
                      lg={12}
                      className={s.slide}
                    >
                      <p className={s.label}>
                        Where will the home be located?
                      </p>
                      <Select
                        name="form-field-location"
                        value={location || 'Select location'}
                        searchable={false}
                        options={states}
                        optionRenderer={renderStateOption}
                        onChange={(val) => this.setState({ location: val })}
                      />
                    </Col>

                    <Col
                      xs={12}
                      sm={12}
                      md={12}
                      lg={12}
                      className={s.slide}
                    >
                      <p className={s.label}>
                        What stage of the home buying <br className="show-xs hidden-sm hidden-md hidden-lg" />process are we?
                      </p>
                      <Select
                        className={s['stage-style']}
                        searchable={false}
                        name="form-field-stage"
                        options={options}
                        optionRenderer={renderOption}
                        valueRenderer={renderOption}
                        value={stage || 'Select stage'}
                        onChange={(val) => this.setState({ stage: val })}
                      />
                    </Col>

                  </div>
                </div>
              </Row>

              <Row className={s.nav}>
                <div
                  className={s['text-left']}
                >
                  <div
                    className={cx(
                      s.button,
                      s.previous,
                      { [s.hide]: slider === 0 }
                    )}
                    onClick={() => this.backSlider()}
                  >
                    <span className={s['previous-icon']} />
                    previous
                  </div>
                </div>
                <div
                  className={s['text-right']}
                >
                  <button
                    className={cx(s.button, s.next)}
                    onClick={() => (
                      slider === MAX_SLIDERS
                        ? this.handleRequest()
                        : this.nextSlider()
                    )}
                    disabled={
                      slider === 0 && !isEmailValid(email) ||
                      slider === 1 && location === ''
                    }
                  >
                    next
                    <span className={s['next-icon']} />
                  </button>
                </div>
              </Row>
            </section>
        }

      </section>
    );
  }
}
