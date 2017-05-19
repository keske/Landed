import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import R from 'ramda';
import Select from 'react-select';
import $ from 'jquery';
import cx from 'classnames';
import Autocomplete from 'react-google-autocomplete';

// Utils
import { isEmailValid } from 'utils/validate.js';

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
      school: '',
      firstname: '',
      lastname: '',
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
    const { email, persontype, school, firstname, lastname, state } = this.state;

    const req = {
      email,
      data: {
        PERSONTYPE: persontype === '' ? "not provided" : persontype,
        OTHERTYPE: firstname === '' ? "na" : firstname,
        SCHOOL: school === '' ? "na" : school,
        NUMBER: lastname === '' ? "not provided" : lastname,
        STATE: state === '' ? "na" : state,
      },
    };

    const request = $.ajax({
      url: '/mail.php',
      type: 'post',
      data: req,
    });

    this.setState({ success: true });

    request.fail((jqXHR, textStatus, errorThrown) => {
      console.log('The following error occurred: ' +
        textStatus, errorThrown
      );
    });
  }

  render() {
    const { slider, other, email, persontype, school, state, firstname, lastname, success } = this.state;


    // Stage options
    const optionsPersonType = [{
      label: 'I am a school or district leader',
      value: 'Leader',
      text: 'I want to understand how to start a Landed program',
    }, {
      label: 'I am a faculty or staff member at a school',
      value: 'Customer',
      text: 'I want to learn more about how Landed works',
    }, {
      label: 'I am an accredited community investor',
      value: 'Investor',
      text: 'I want to learn more about Landed investment products',
    }, {
      label: 'I don\'t fit these categories',
      value: 'Other',
      text: 'But I\'d still like to talk to someone at Landed',
    }];


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
              'Learn more about Landed',
            }}
          />
          <p
            className={s.info}
            dangerouslySetInnerHTML={{ __html:
              'We\'re adding new funds every week.',
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
                        onChange={(val) => this.setState({ persontype: val.value })}
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
                        Where do you work?
                      </p>
                      <Autocomplete
                        style={{
                          border: '1px solid rgba(0, 155, 105, .33)',
                          padding: '11px 30px 11px 20px',
                          display: 'inline-block',
                          width: '100%',
                          outline: 'none',
                        }}
                        placeholder="School or Employer Name"
                        onPlaceSelected={(place) => {
                          //console.log(place.address_components[5].short_name);
                          this.setState({ school: place.name, state: place.address_components[5].short_name});
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
                        What’s your name?
                      </p>
                      <input
                        type="firstname"
                        placeholder="First Name"
                        onChange={(event) =>
                          this.setState({ firstname: event.target.value })
                        }
                      />
                      <input
                        type="lastname"
                        placeholder="Last Name"
                        onChange={(event) =>
                          this.setState({ lastname: event.target.value })
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
                      slider === 0 && persontype === '' ||
                      slider === 1 && school === '' ||
                      slider === 2 && lastname === '' ||
                      slider === 3 && !isEmailValid(email)
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
