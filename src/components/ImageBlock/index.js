import React, { Component } from 'react';

/* component styles */
import styles from './styles';

export class ImageBlock extends Component {
  render() {
    return (
      <section className={ `${styles}` }>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-11 col-lg-11 col-md-offset-1 col-lg-offset-1">
              <h1>
                Split your homeinvestment,<br />
                not the space
              </h1>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
