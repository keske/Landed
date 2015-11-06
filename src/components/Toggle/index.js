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
        </div>
      </section>
    );
  }
}
