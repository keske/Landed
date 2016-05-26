import React, { Component } from 'react';
import { Link } from 'react-router';

/* components */
import { IntroImage } from '../IntroImage';
import { ImageBlock } from '../ImageBlock';
// import { HowItWorks } from '../HowItWorks';
import { Employer } from './_employer';
import { Alumni } from './_alumni';
import { Schools } from './_schools';

/* component styles */
import { styles } from './styles/styles.scss';

export class ProductsPage extends Component {

  static propTypes = {
    showQuiz: React.PropTypes.func,
  };

  constructor(props) {
    super(props);
    this.state = {
      schoolsExpand: false,
      employerExpand: false,
      alumniExpand: false,
    };

    this.showSchools = this.showSchools.bind(this);
    this.showEmployer = this.showEmployer.bind(this);
    this.showAlumni = this.showAlumni.bind(this);
  }

  showSchools() {
    this.setState({ schoolsExpand: true });
  }

  showEmployer() {
    this.setState({ employerExpand: true });
  }

  showAlumni() {
    this.setState({ alumniExpand: true });
  }

  render() {
    const { schoolsExpand, employerExpand, alumniExpand } = this.state;

    const intro = {
      title: 'Want to help your community live near where they work?</br> Start a Landed Fund.',
      text: "Not everyone has wealthy parents to help them with a downpayment. Landed support can provide a similar boost to help start building wealth. </br></br> Help people you care about.</br> Own a diversified real estate portfolio.",
      image: 'services',
    };

    const imageBlockProps = {
      text: 'Have other </br>Landed Fund ideas?</br></br>Let us know!',
      imageClass: 'services',
    };

    return (
      <section>
        <IntroImage { ...intro } />
        <div className={ `${styles}` }>
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div className="hidden-md hidden-lg sign-up-block">
                  <Link to="quiz">
                    <span className="button">
                      Learn More.
                    </span>
                  </Link>
                </div>
                <div className="hidden-xs hidden-sm sign-up-block">
                  <span className="button" onClick={ () => this.props.showQuiz(true) }>
                    Learn More.
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="container family">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                <span className="loan-icon" />
                <p className="title">
                  Schools<br />and Districts
                </p>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <p className="info-text">
                  The Landed story started with supporting schools and school districts recruit and retain faculty. Social impact funds and family offices want to invest in supporting educators; Landed gives them a way.
                </p>

                <span
                  className={ `button ${ schoolsExpand && 'hide' }` }
                  onClick={ this.showSchools }
                >
                  Learn More
                </span>

                <p className={`more-known ${!schoolsExpand && 'hide'}`}>
                  Partnering with Landed is as simple as 1, 2, 3. Outside of helping identify potential sources of capital, starting a Landed Fund requires no ongoing cost or overhead:
                </p>
                <div className={`expandet-list list ${!schoolsExpand && 'hide'}`}>
                  <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 text-right hidden-xs">
                    <span className="list-number">1.</span>
                  </div>
                  <div className="col-xs-12 col-sm-11 col-md-11 col-lg-11">
                    <p>
                      <strong>Engage Landed.</strong>  Understand the potential demand and determine who the benefit applies to (all faculty, tenured faculty, etc).
                    </p>
                  </div>
                </div>

                <div className={`expandet-list list ${!schoolsExpand && 'hide'}`}>
                  <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 text-right hidden-xs">
                    <span className="list-number">2.</span>
                  </div>
                  <div className="col-xs-12 col-sm-11 col-md-11 col-lg-11">
                    <p>
                      <strong>Work with Landed to recruit the funds.</strong> In addition to your school's network, Landed has strong relationships with wealth sources across the country.
                    </p>
                  </div>
                </div>
                <div className={`expandet-list list ${!schoolsExpand && 'hide'}`}>
                  <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 text-right hidden-xs">
                    <span className="list-number">3.</span>
                  </div>
                  <div className="col-xs-12 col-sm-11 col-md-11 col-lg-11">
                    <p>
                      <strong>Launch the benefit.</strong> Once the benefit is launched, faculty, staff and investors will deal directly with Landed. Landed will manage all legal and regulatory compliance in addition to homebuyer support.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          { schoolsExpand && <Schools /> }
          <hr />
          <div className="container family">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                <span className="lease-icon" />
                <p className="title">
                  Unions &<br /> Employers
                </p>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <p className="info-text">
                  Your employees and members need help to start building a life in their communities, and you know them best.  Whether out of ERISA funds or employer reserves, help your own while achieving return targets.
                </p>
                <span
                  className={ `button ${ employerExpand && 'hide' }` }
                  onClick={ this.showEmployer }
                >
                  Details and Examples
                </span>

                <p className={`more-known ${!employerExpand && 'hide'}`}>
                  Often known as fractional equity financing, it involves two main parts:
                </p>
                <div className={`expandet-list list ${ !employerExpand && 'hide'}`}>
                  <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 text-right hidden-xs">
                    <span className="list-number">1.</span>
                  </div>
                  <div className="col-xs-12 col-sm-11 col-md-11 col-lg-11">
                    <p>
                    <strong>An agreement (know as an option) that gives your supporter the ability to make money if the value of the home goes up.</strong> For example, you might accept half of the down payment for 25% of the growth in the value of the home when you sell or refinance. This option is recorded with the relevant authorities.
                  </p>
                  </div>
                </div>

                <div className={`expandet-list list ${ !employerExpand && 'hide'}`}>
                  <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 text-right hidden-xs">
                    <span className="list-number">2.</span>
                  </div>
                  <div className="col-xs-12 col-sm-11 col-md-11 col-lg-11">
                    <p>
                      <strong>A set of agreements to protect you and your co-investor.</strong> A lien is recorded against the property to protect your buying partner's investment in the case you go bankrupt. A separate agreement outlines the conditions under which your buying partner can ask for their investment back.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          { employerExpand && <Employer /> }
          <hr />
          <div className="container family">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                <span className="ownership-icon" />
                <p className="title">
                  Alumni<br />Networks
                </p>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <p className="info-text">
                  Want to give back to your alumni community without providing a gift? Young alumni need investment partners to start building their life. Build a diversified urban real estate portfolio of responsible partners.
                </p>

                <span
                  className={ `button ${ alumniExpand && 'hide' }` }
                  onClick={ this.showAlumni }
                >
                  Details and Examples
                </span>

                <p className={`more-known ${!alumniExpand && 'hide'}`}>
                  A shared ownership agreement involves two main parts:
                </p>
                <div className={`expandet-list list ${ !alumniExpand && 'hide'}`}>
                  <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 text-right hidden-xs">
                    <span className="list-number">1.</span>
                  </div>
                  <div className="col-xs-12 col-sm-11 col-md-11 col-lg-11">
                    <p>
                      <strong>A shared ownership agreement that splits the responsibilities of ownership.</strong>  The two parties hold the property on title as Tenants-In-Common. The ownership percentages between the two parties are usually calculated by how much they put in as down-payment.  Typically, all financials (paying the mortgage, insurance, repairs) are split according to ownership interest.  The Resident Owner is even allowed to slowly purchase more of the property over time.
                    </p>
                  </div>
                </div>

                <div className={`expandet-list list ${ !alumniExpand && 'hide'}`}>
                  <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 text-right hidden-xs">
                    <span className="list-number">2.</span>
                  </div>
                  <div className="col-xs-12 col-sm-11 col-md-11 col-lg-11">
                    <p>
                      <strong>A lease to the Resident Owner.</strong> The two parties lease the property to the Resident Owner who receives all the typical living rights enjoyed by a homeowner.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          { alumniExpand && <Alumni /> }
        </div>
        <ImageBlock { ...imageBlockProps } />
      </section>
    );
  }
}
