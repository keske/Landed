import React, { Component } from 'react';
import { Link } from 'react-router';

/* component styles */
import styles from './styles';

const QuestionsAndAnswers = [{
  question: "How do I sell my portion of a home if I don't own the whole thing?",
  answer: "With Landed, you agree to hold the property for at least five years. If you need to relocate before then, you have two options: </br>1) you can sublease the property until the end of the term or </br>2) you can buy-out your investors and sell the entire property. </br>In the case of the second option, you’ll pay a 2% penalty for early termination. <br /><br /> Otherwise, you can sell the property exactly as you would your own home and pay your co-investors 75% of the proceeds. We can help you sell just your share of the home to another Landed occupant so you walk away with more money in your pocket. You can also choose to buy out your investors without any penalty as soon as the five years are up.",
}, {
  question: "Companies fail all the time.  What happens if Landed goes bankrupt or gets acquired?",
  answer: "With Landed, you own the property (your name is on title!) -- we just help coordinate the interactions between all the parties. In the unlikely event that we cease to exist, you'll still own your share of the house, the contract with your co-investors will still be valid and there are contingency plans in place to ensure your investment is protected.",
}, {
  question: "Is this really like owning a home?  How is this different?",
  answer: "With Landed, you’re sharing your home investment, not your home experience.  You can paint the walls, fix up the kitchen, build a new deck, AirBnB, sublet or get a puppy; we’re just an alternative financing choice.<br />The only thing that will require approval is major structural changes to the property.  If you want to tear down some walls or build an extension, we just want to partner with you to make sure it’s adding value to the property.",
}, {
  question: "Does rent change year to year?  How do you set the buy-out price?",
  answer: "Rent changes year-to-year based on nearby home sales.  Before closing on your home, we'll sit down with you and agree to a method for assessing rent (either through an online rent index or through property appraisals).  To determine how much Landed's co-investment is worth, we'll use a local home price index to track the appreciation of the home.",
}];

export class FAQ extends Component {

  constructor(props) {
    super(props);
    this.state = {
      currentQuestion: 0,
    };
  }

  render() {
    const { currentQuestion } = this.state;

    return (
      <section className={ `${styles}` }>
        <div className="container">

          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <h2 className="green">
                Cold hard facts
              </h2>
            </div>
          </div>

          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
              <ul className="questions">
                {
                  QuestionsAndAnswers.map(({ question }, key) =>
                  <li key={ key }>
                    <span
                      className={ currentQuestion === key && 'active' }
                      onClick={ () => { this.setState({ currentQuestion: key }); } }>
                      <span dangerouslySetInnerHTML={{ __html: question }} />
                      <div className="answer-mobile hidden-md hidden-lg"
                           dangerouslySetInnerHTML={{ __html: QuestionsAndAnswers[key].answer }}>
                    </div>
                    </span>
                  </li>)
                }
              </ul>
            </div>
            <div className="col-md-1 col-lg-1 hidden-xs hidden-sm">
              <span className={ `arrow arrow-${ currentQuestion }` } />
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 hidden-xs hidden-sm">
              <ul className="answers">
                {
                  QuestionsAndAnswers.map(({ answer }, key) =>
                  <li
                    className={ currentQuestion === key && 'active' }
                    key={ key }>
                    <span dangerouslySetInnerHTML={{ __html: answer }} />
                    <br /><br />
                    <a href="http://landed.zendesk.com" target="_blank">
                      See complete F.A.Q.
                    </a>
                  </li>)
                }
              </ul>
            </div>
          </div>

        </div>
      </section>
    );
  }
}
