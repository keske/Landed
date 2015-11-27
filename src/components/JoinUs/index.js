import React, { Component } from 'react';

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
      budget: '',
    };
  }

  handleRequest() {
    const { email, name, phone, city, mmerge, whenMove, budget } = this.state;

    const req = {
      email: email,
      data: {
        name: name,
        phone: phone,
        city: city,
        mmerge: mmerge,
        whenMove: whenMove,
        budget: budget,
      },
    };
    
    const http = new XMLHttpRequest();
    http.open('POST', 'http://gradusdevelopment.com/mail.php', true);
    http.send(JSON.stringify(req));
  }

  render() {
    return (
      <section className={ `${styles}` }>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 col-md-offset-2 col-lg-offet-12 header">
              <p className="title"
                 dangerouslySetInnerHTML={{ __html: 'Join Landed\'s home buyer waitlist' }} />
              <p className="info"
                 dangerouslySetInnerHTML={{ __html: 'We\'re adding new users every few weeks and<br />we\'ll be in touch before you know it.' }} />
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
                  Some of the Landed process is easier to talk through with a real life expert.
                </span>
                <input type="phone" onChange={ (event) => this.setState({ phone: event.target.value }) } />
              </label>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-md-offset-2 col-lg-offet-2 popup-california-title">
              <span className="labels">
                Are you specifically interested  in being a homeowner in California?
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
                As soon as posstible
              </label>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2 popup-moving">
              <input type="radio" id="move-next-month" name="move"
                     onChange={ () => this.setState({ whenMove: 'In the next month' }) } />
              <label className="gray" htmlFor="move-next-month">
                In the next month
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

          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 col-md-offset-2 col-lg-offet-2">
              <h3>
                What's your maximum monthly household budget for housing expenses?
                { /* ' */ }
              </h3>
            </div>
          </div>

          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 col-md-offset-2 col-lg-offet-2 popup-budget">
              <input type="radio" id="budget-less-1000" name="budget"
                     onChange={ () => this.setState({ budget: 'Less than $1000' }) } />
              <label className="gray big" htmlFor="budget-less-1000">
                Less than $1000
              </label>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 popup-budget">
              <input type="radio" id="budget-1000-2000" name="budget"
                     onChange={ () => this.setState({ budget: '$1000–$2000' }) } />
              <label className="gray big" htmlFor="budget-1000-2000">
                $1000–$2000
              </label>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 popup-budget">
              <input type="radio" id="budget-2000-3000" name="budget"
                     onChange={ () => this.setState({ budget: '$2000– $3000' }) } />
              <label className="gray big" htmlFor="budget-2000-3000">
                $2000–$3000
              </label>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 col-md-offset-2 col-lg-offet-2 popup-budget">
              <input type="radio" id="budget-3000-4000" name="budget"
                     onChange={ () => this.setState({ budget: '$3000–$4000' }) } />
              <label className="gray big" htmlFor="budget-3000-4000">
                $3000–$4000
              </label>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 popup-budget">
              <input type="radio" id="budget-4000-5000" name="budget"
                     onChange={ () => this.setState({ budget: '$4000–$5000' }) } />
              <label className="gray big" htmlFor="budget-4000-5000">
                $4000–$5000
              </label>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 popup-budget">
              <input type="radio" id="budget-more-5000" name="budget"
                     onChange={ () => this.setState({ budget: 'More than $5000' }) } />
              <label className="gray big" htmlFor="budget-more-5000">
                More than $5000
              </label>
            </div>

          </div>

          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
              <input type="submit" value="Join waitlist" onClick={ () => this.handleRequest() }/>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
