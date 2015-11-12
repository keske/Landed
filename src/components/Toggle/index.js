import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

/* actions */
import * as actionCreators from 'actions/toggle';

/* component styles */
import styles from './styles';

@connect(state => state.toggle)
export class Toggle extends Component {

  static propTypes = {
    dispatch: React.PropTypes.func,
    status: React.PropTypes.string,
    data: React.PropTypes.object,
  }

  constructor(props) {
    super(props);

    this.actions = bindActionCreators(actionCreators, this.props.dispatch);

    this.handlePosition = this.handlePosition.bind(this);
  }

  handlePosition(position) {
    this.actions.set(position);
  }

  render() {
    const { status } = this.props;

    const data = {
      renting: {
        monthlypayments: 'HIGHEST',
        upfrontcosts: 'LOWEST',
        degreeofcontrol: 'LEAST',
        taxbenefits: 'NONE',
      },
      landed: {
        monthlypayments: 'LOWER THAN RENTING',
        upfrontcosts: 'LOWER THAN OWNING',
        degreeofcontrol: 'SIMILAR TO OWNING',
        taxbenefits: 'SOME',
      },
      owning: {
        monthlypayments: 'LOWEST',
        upfrontcosts: 'HIGHEST',
        degreeofcontrol: 'MOST',
        taxbenefits: 'MOST',
      },
    };

    return (
      <section className={ `${styles}` }>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <h2 className="white">
                Why split a home investment?
              </h2>
              <p className="centered text-center">
                Buying a new home in many cities concentrates too much of your wealth into one asset, and often owning is too costly to access in the first place. Renting gives you no ability to use your home to build your wealth, and it offers you little control over your physical space and duration of occupancy.
              </p>

              <div className="toggle">
                <div className="bar" />
                <div className={ ` ${ status } circle` } ref="circle"/>
                <div className="labels">
                  <span className="label">
                    Renting
                  </span>
                  <span className="label">
                    <span className="logo" />
                  </span>
                  <span className="label">
                    Owning
                  </span>
                </div>
                <div className="active-zones">
                  <div onClick={ () => { this.handlePosition('renting'); } } />
                  <div onClick={ () => { this.handlePosition('landed'); } } />
                  <div onClick={ () => { this.handlePosition('owning'); } } />
                </div>
                <br />
                <div className={ ` ${ status } states` }>
                  <div className="state">
                    <span className="state-circle monthly-payments" />
                    <p className="state-title">
                      Monthly payments:
                    </p>
                    <p className="state-describe">
                      { data[`${ status }`].monthlypayments }
                    </p>
                  </div>
                  <div className="state">
                    <span className="state-circle upfront-costs" />
                    <p className="state-title">
                      Upfront costs:
                    </p>
                    <p className="state-describe">
                      { data[`${ status }`].upfrontcosts }
                    </p>
                  </div>
                  <div className="state">
                    <span className="state-circle degree-of-control" />
                    <p className="state-title">
                      Degree of control:
                    </p>
                    <p className="state-describe">
                      { data[`${ status }`].degreeofcontrol }
                    </p>
                  </div>
                  <div className="state hidden-xs hidden-sm">
                    <span className="state-circle tax-benefits" />
                    <p className="state-title">
                      Tax Benefits:
                    </p>
                    <p className="state-describe">
                      { data[`${ status }`].taxbenefits }
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
              <p className="toggle-title">
                Landed is an option between renting and owning,  that is so much needed.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
