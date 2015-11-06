import React, { Component } from 'react';

/* component styles */
import styles from './styles';

export class Toggle extends Component {
  toggle(el) {
    console.log(el.clientX);
  }
  render() {
    return (
      <section className={ `${styles}` }>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <h2 className="white">
                Why split a home investment?
              </h2>

              <div className="toggle" onClick={ () => { this.toggle(event.target); } }>
                <div className="bar" />
                <div className="circle owning" />
                <div className="labels">
                  <ul>
                    <li>
                      Renting
                    </li>
                    <li>
                      Landed
                    </li>
                    <li>
                      Owning
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
              <p className="centered">
                Buying a new home in many cities concentrates too much of your wealth into one asset, and often owning is too costly to access in the first place. Renting gives you no ability to use your home to build your wealth, and it offers you little control over your physical space and duration of occupancy.
              </p>
              <p className="italic">
                Landed  is an option between renting and owning,  that is so much  needed.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
