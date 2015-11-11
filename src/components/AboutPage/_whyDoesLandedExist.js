import React, { Component } from 'react';

export class WhyDoesLandedExist extends Component {
  render() {
    return (
      <div className="container">
        <div className="row whyDoesLandedExist">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
            <h2 className="green">
              Why does Landed exist?
            </h2>
          </div>
          <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10 col-xs-offset-1 col-sm-offset-1 col-md-offset-1 col-lg-offset-1 text-center">
            <p>
              Here’s a little story to help tell the tale of why we’re  so focused on changing the housing market, forever:
            </p>
            <p className="black">
              Let’s take a look at two folks, Richie and Susan.
            </p>
          </div>

          <div className="row whyDoesLandedExist two-folks">
            <div className="col-xs-10 col-sm-10 col-md-4 col-lg-4 col-xs-offset-1 col-sm-offset-1 col-md-offset-2 col-lg-offset-2 text-left">
              <p className="black">
                Richie is a married middle-aged man.  Richie has had a pretty successful life.
              </p>
              <p>
                - His family’s net worth is just over $3,000,000 dollars.
                <br />
                - He has less than 20% of his wealth in housing.
                <br />
                - He has extremely low levels of debt relative to what he owns.
                <br />
                - Almost all of his wealth is in diversified financial instruments (stocks, bonds, cash).
              </p>
            </div>
            <div className="col-xs-10 col-sm-10 col-md-4 col-lg-4 col-xs-offset-1 col-sm-offset-1 col-md-offset-2 col-lg-offset-2 text-left">
              <p className="black">
                Susan is a young married woman about to have her first child. She bought a house just two years ago.
              </p>
              <p>
                - She also has been doing really well. Her family’s net worth is almost $250,000.
                <br />
                - She, however, has almost 75% of her wealth in housing.
                <br />
                - She also has high levels of debt.  She’s only paid down a little of her mortgage.
              </p>
            </div>
          </div>

          <div className="row whyDoesLandedExist footer-text">
            <div className="col-xs-10 col-sm-10 col-md-8 col-lg-8 col-xs-offset-1 col-sm-offset-1 col-md-offset-2 col-lg-offset-2 text-left">
              <p>
                During the ‘Great Recession’, people like Susan (a median homebuyer), lost over 35% of their net worth. People less wealthy than Susan lost everything. Many of them owed more on their mortgage then their house was worth (known as ‘being underwater’). In fact, today, almost eight years later, over 15% of US homeowners are still underwater on their homes.
              </p>
              <p>
                So millions of people like Susan buckled down to save money until they were back on solid ground. But saving money means fewer things are being purchased, which means less profits for companies, which means layoffs, which means less money for households, which means less things are being purchased… the economy goes into a tail spin.
              </p>
              <p>
                Now, some of Susan’s friends lost their jobs, which means they couldn’t afford to pay their mortgage. As a result, the bank foreclosed on them, took their money back and left Susan’s friends with nothing.  And who bought these homes? Well, companies that people like Richie disproportionately own through their already diversified portfolio. As a result, people like Richie only lost 10% of their net worth during the recession and quickly recovered.
              </p>
              <p>
                This happens, to a lesser degree, every time the real estate market corrects itself, which, on average, happens every seven years.
              </p>
              <p>
                Buying a house with an overwhelming amount of debt puts you at risk. Everyone buying their homes with significant debt puts the whole economy at risk. And when credit bubbles burst, the wealthy get wealthier at the expense of everyone else. Simply put, it’s time for a change.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
