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
      },
      landed: {
        monthlypayments: 'LOWER THAN RENTING',
        upfrontcosts: 'LOWER THAN OWNING',
        degreeofcontrol: 'SIMILAR TO OWNING',
      },
      owning: {
        monthlypayments: 'LOWEST',
        upfrontcosts: 'HIGHEST',
        degreeofcontrol: 'MOST',
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
            </div>

            <div className="col-xs-12 col-sm-12 col-md-10 col-lg-10 col-md-offset-1 col-lg-offset-1">
              <p className="centered text-center">
                Owning your home gives you the control that renting doesn't, but it comes at a serious cost. Where home prices are high, a downpayment can be prohibitive and a massive mortgage means too much financial risk. Something between renting and owning is needed
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
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
              <p className="toggle-title">
                Landed delivers the ownership experience without the ownership price tag
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
