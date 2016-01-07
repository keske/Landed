import React, { Component } from 'react';
import $ from 'jquery';
import ga from 'react-ga';

/* component styles */
import styles from './styles';

export class JoinUs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      name: '',
      phone: '',
      city: '',
      mmerge: '',
      whenMove: '',
      investor: false,
      ownership: '',
      comments: '',
      succes: false,
    };
  }

  handleRequest() {
    const {
      email, name, phone, city, mmerge, whenMove, investor, ownership, comments,
    } = this.state;

    const req = {
      email: email,
      data: {
        FNAME: name,
        PHONE: phone,
        CITY: city,
        MMERGE4: mmerge,
        WHENMOVE: whenMove,
        MMERGE8: investor,
        MMERGE7: ownership,
        MMERGE9: comments,
      },
    };

    console.log(req);

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
    ga.initialize('UA-72154127-1');
    ga.event({category: 'user', action:'Sign up'}); //google analytics event

    // const http = new XMLHttpRequest();
    // http.open('POST', 'http://gradusdevelopment.com/mail.php', true);
    // http.send(JSON.stringify(req));

  }

  render() {
    const { succes } = this.state;

    return (
      <section className={ `${styles}` }>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 col-md-offset-2 col-lg-offet-12 header">
              <p className="title"
                 dangerouslySetInnerHTML={{ __html: 'Join Landed\'s home buyer community' }} />
              <p className="info"
                 dangerouslySetInnerHTML={{ __html: 'We\'ll be in touch before you know it!' }} />
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 col-md-offset-2 col-lg-offet-12 body">
              { /* Full name */ }
              <label>
                What's your full name?
                <input type="text" onChange={ (event) => this.setState({ name: event.target.value }) } />
              </label>

              { /* What's your email address? */ }
              <label>
                What's your email address?
                <input type="email" onChange={ (event) => this.setState({ email: event.target.value }) } />
              </label>

              { /* Phone */ }
              <label>
                What's your phone number?
                <span className="hint">
                  Some of the process is easier to talk through with a real life expert.
                </span>
                <input type="phone" onChange={ (event) => this.setState({ phone: event.target.value }) } />
              </label>
            </div>
          </div>
          <div className="row">

            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-md-offset-2 col-lg-offet-2 popup-california-title">
              <span className="labels">
                Is the home located in the United States?
              </span>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2 popup-california-yes-no">
              <input type="radio" id="california-yes" name="california" onChange={ () => this.setState({ mmerge: 'Yes' }) } />
              <label className="gray big" htmlFor="california-yes">
                Yes
              </label>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2 popup-california-yes-no">
              <input type="radio" id="california-no" name="california" onChange={ () => this.setState({ mmerge: 'No' }) } />
              <label className="gray big" htmlFor="california-no">
                No
              </label>
            </div>

            <br /><br /><br /><br />

            <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 col-md-offset-2 col-lg-offet-12 body">
              { /* City */ }
              <label>
                In which city are you interested in buying a home?
                { /* ' */ }
                <input type="text" onChange={ (event) => this.setState({ city: event.target.value }) } />
              </label>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 col-md-offset-2 col-lg-offet-2">
              <h3>
                When are you interested in moving to a new home?
              </h3>
            </div>
          </div>

          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2 col-md-offset-2 col-lg-offet-2 popup-moving">
              <input type="radio" id="move-asap" name="move"
                     onChange={ () => this.setState({ whenMove: 'As soon as posstible' }) } />
              <label className="gray" htmlFor="move-asap">
                I'm already living in the home
              </label>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2 popup-moving">
              <input type="radio" id="move-next-month" name="move"
                     onChange={ () => this.setState({ whenMove: 'In the next month' }) } />
              <label className="gray" htmlFor="move-next-month">
                As soon as possible
              </label>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2 popup-moving">
              <input type="radio" id="move-three-month" name="move"
                     onChange={ () => this.setState({ whenMove: 'In the next 3 months' }) } />
              <label className="gray" htmlFor="move-three-month">
                In the next 3 months
              </label>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2 popup-moving">
              <input type="radio" id="move-nex-year" name="move"
                     onChange={ () => this.setState({ whenMove: 'In the next year' }) } />
              <label className="gray" htmlFor="move-nex-year">
                In the next year
              </label>
            </div>
          </div>

          <br />

          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-md-offset-2 col-lg-offet-2 popup-investor-title">
              <span className="labels">
                Is the investor or lender already identified?
              </span>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2 popup-investor-yes-no">
              <input type="radio" id="investor-yes" name="investor" onChange={ () => this.setState({ investor: 'Yes' }) } />
              <label className="gray big" htmlFor="investor-yes">
                Yes
              </label>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2 popup-investor-yes-no">
              <input type="radio" id="investor-no" name="investor" onChange={ () => this.setState({ investor: 'No' }) } />
              <label className="gray big" htmlFor="investor-no">
                No
              </label>
            </div>
          </div>

          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 col-md-offset-2 col-lg-offet-2">
              <h3>
                Which type of support structure are you interested in learning more about?
              </h3>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 col-md-offset-2 col-lg-offet-2 popup-ownership">
              <input type="radio" id="ownership-lease" name="ownership"
                     onChange={ () => this.setState({ ownership: 'Lease To Own' }) } />
              <label className="gray" htmlFor="ownership-lease">
                Lease To Own
              </label>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 popup-ownership">
              <input type="radio" id="ownership-shared" name="ownership"
                     onChange={ () => this.setState({ ownership: 'Shared Ownership' }) } />
              <label className="gray" htmlFor="ownership-shared">
                Shared Ownership
              </label>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 popup-ownership">
              <input type="radio" id="ownership-more" name="ownership"
                     onChange={ () => this.setState({ ownership: 'I Need More Information' }) } />
              <label className="gray" htmlFor="ownership-more">
                Family Loan
              </label>
            </div>
          </div>

          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 col-md-offset-2 col-lg-offet-2">
              <h3>
                Other Comments:
              </h3>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-10 col-lg-10 col-md-offset-2 col-lg-offet-2 popup-comments">
              <textarea id="comments" name="comments"
                        onChange={ (event) => this.setState({ comments: event.target.value }) } />
            </div>
          </div>

          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
              { !succes
                ? <input type="submit" value="Talk to our experts" onClick={ () => this.handleRequest() }/>
                : <span className="succes">
                    <p className="title">
                      Thanks, and welcome to the Landed community!
                    </p>
                    <p className="text">
                      We'll be in touch soon explaining your next steps.
                    </p>
                  </span>
              }
            </div>
          </div>
        </div>
      </section>
    );
  }
}
