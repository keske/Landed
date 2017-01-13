import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import R from 'ramda';
import Select from 'react-select';
import $ from 'jquery';
import cx from 'classnames';
import Autocomplete from 'react-google-autocomplete';

// Utils
import { isEmailValid, isPhoneValid } from 'utils/validate.js';

// Styles
import s from './index.css';

const MAX_SLIDERS = 3;

export default class Quiz extends Component {
  constructor(props) {
    super(props);

    this.state = {
      slider: 0,
      other: false,
      email: '',
      persontype: '',
      othertype: '',
      school: '',
      number: '',
      success: false,
    };
  }

  nextSlider() {
    const { slider, other, persontype } = this.state;
    this.setState({
      other: (persontype.value === "Other" && slider === 1) ? true : other,
      slider: slider < MAX_SLIDERS ? R.sum([slider, 1]) : slider,
    });
    console.log(other);
  }

  backSlider() {
    const { slider, other, persontype } = this.state;

    this.setState({
      other: (persontype.value === "Other" && slider === 2) ? false : other,
      slider: slider > 0 ? R.subtract(slider, 1) : slider,
    });
  }

  handleRequest() {
    const { email, persontype, othertype, school, number } = this.state;

    const req = {
      email,
      data: {
        persontype,
        othertype,
        school,
        number,
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
    const { slider, other, email, persontype, othertype, school, number, success } = this.state;

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
/*    const renderStateOption = (option) =>
      <span className={s['select-option']}>
        <span className={s['select-label']}>
          {option.label}
        </span>
      </span>; */

    // Stage options
    const optionsPersonType = [{
      label: 'I have a leadership role at a school or district',
      value: 'Leader',
      text: 'I want to understand how to start a Landed program',
    }, {
      label: 'I\'m a teacher or staff member at a school',
      value: 'Customer',
      text: 'I want to learn more about how Landed would work at my school',
    }, {
      label: 'I don\'t fit those categories',
      value: 'Other',
      text: 'But I still want to learn more about Landed!',
    }];
    const optionsOtherType = [{
      label: 'I\'m a realtor',
      value: 'Realtor',
      text: 'I want to work with Landed homebuyers',
    }, {
      label: 'I\'m a banker',
      value: 'Banker',
      text: 'I want to learn about lending against Landed partnerships',
    }, {
      label: 'I\'m an accredited community investor',
      value: 'Investor',
      text: 'I want to know whether my community already has a fund',
    }, {
      label: 'I\'m a member of the press',
      value: 'Press',
      text: 'I want to learn more about the Landed story',
    }, {
      label: 'None of the above',
      value: 'Other',
      text: 'I just want to learn more',
    }];
/*    const optionsPersonRole = [{
      label: 'I have a leadership role at a school or district',
      value: 'Leader',
      text: 'I want to understand how to start a Landed program',
    }, {
      label: 'I\'m a teacher or staff member at a school',
      value: 'Customer',
      text: 'I want to learn more about how Landed would work at my school',
    }, {
      label: 'I don\'t fit those categories',
      value: 'Post-Offer',
      text: 'But I still want to learn more about Landed!',
    }]; */

    // Render option
    const renderOption = (option) =>
      <span className={s['select-option']}>
        <p className={s['select-label']}>{option.label}</p>
        <p className={s['select-text']}>{option.text}</p>
      </span>;

    return (
      <section className={s.root}>
        <Row className={s.header}>
          <p
            className={s.title}
            dangerouslySetInnerHTML={{ __html:
              'Bring Landed to your school',
            }}
          />
          <p
            className={s.info}
            dangerouslySetInnerHTML={{ __html:
              'We\'re adding new schools every week. Have your school be next!',
          }}
          />
        </Row>

        {
          success &&
            <span className={s.success}>
              <p className={s.title}>
                Thanks!
              </p>
              <p className={s.text}>
                We'll be in touch soon with next steps.
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
                      s[`position-${slider}-${other}`]
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
                        What’s your email?
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
                        How would you describe yourself?
                      </p>
                      <Select
                        className={s['stage-style']}
                        searchable={false}
                        name="form-field-stage"
                        options={optionsPersonType}
                        optionRenderer={renderOption}
                        valueRenderer={renderOption}
                        value={persontype}
                        onChange={(val) => this.setState({ persontype: val })}
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
                        At what school do you work?
                      </p>
                      <Autocomplete
                        style={{
                          border: '1px solid rgba(0, 155, 105, .33)',
                          padding: '11px 30px 11px 20px',
                          display: 'inline-block',
                          width: '100%',
                          outline: 'none',
                        }}
                        placeholder="School Name"
                        onPlaceSelected={(place) => {
                          console.log(place);
                          this.setState({ school: place.name });
                        }}
                        types={['establishment']}
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
                        What’s your phone number?
                      </p>
                      <input
                        type="text"
                        placeholder="Your phone number"
                        onChange={(event) =>
                          this.setState({ number: event.target.value })
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
                        Why are you interested in learning more about Landed?
                      </p>
                      <Select
                        className={s['stage-style']}
                        searchable={false}
                        name="form-field-stage"
                        options={optionsOtherType}
                        optionRenderer={renderOption}
                        valueRenderer={renderOption}
                        value={othertype}
                        onChange={(val) => this.setState({ othertype: val })}
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
                      slider === 1 && persontype === '' ||
                      slider === 2 && (school === '' && othertype === '') ||
                      slider === 3 && !isPhoneValid(number) === ''
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
