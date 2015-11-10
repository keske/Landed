import React, { Component } from 'react';

import alex from './files/alex.png';
import jonathan from './files/jonathan.png';

export class WhoIsLanded extends Component {
  render() {
    return (
      <div className="row whoIsLanded">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
          <h2 className="green">
            Who is Landed?
          </h2>
        </div>
        <div className="row whoIsLanded paragraphs">
          <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 col-md-offset-2 col-lg-offset-2 text-center">
          <p>
            We're a dedicated team of urban real estate and investing enthusiasts who believe everyone should have the ability to achieve the dream of building wealth by owning property – whether as a resident or investor – in smarter, simpler and more accessible ways than exist today.
          </p>
          </div>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 col-md-offest-3 col-lg-offset-3 text-center">
          <img src={ alex } />
          <p className="name">
            Alex Lofton
          </p>
          <p className="position">
            co-founder
          </p>
          <p className="sign">
            Advocate by day.<br />
             Dancer by night.
          </p>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 text-center">
          <img src={ jonathan } />
          <p className="name">
            Jonathan Asmis
          </p>
          <p className="position">
            co-founder
          </p>
          <p className="sign">
            Econ-geek by day.<br />
            Foodie by night.
          </p>
        </div>
      </div>
    );
  }
}
