import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import DocumentMeta from 'react-document-meta';

/* actions */
import * as actionCreators from 'actions/app';

/* application components */
import SmartLoading from 'components/SmartLoading';
import { TopImage } from 'components/TopImage';
import { Subscribe } from 'components/Subscribe';
import { WeWillHelpYou } from 'components/WeWillHelpYou';
// import { Toggle } from 'components/Toggle';
// import { YouCan } from 'components/YouCan';
// import { ImageBlock } from 'components/ImageBlock';
// import { Shared } from 'components/Shared';

const metaData = {
  title: 'Landed. Smarter ownership, for everyone.',
  description: 'I\'m a description. I can to create multiple tags',
  canonical: 'http://example.com/path/to/page',
  meta: {
    charset: 'utf-8',
    name: {
      keywords: 'react,meta,document,html,tags',
    },
  },
};

@connect(
  state => state.app,
  dispatch => bindActionCreators(actionCreators, dispatch)
)
export class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pageLoaded: false,
    };
  }

  componentWillMount() {
    this.setState({
      pageLoaded: true,
    });
  }

  render() {
    const { pageLoaded } = this.state;

    function renderContent() {
      return (
          <section>
            <SmartLoading animation="fade-in"
                          speed={700}
                          wait={1700}>
              <Subscribe />
            </SmartLoading>
            <WeWillHelpYou />
          </section>
      );
    }

    return (
      <section>
        <DocumentMeta { ...metaData } />
        <TopImage { ...this.props } />
          {
            pageLoaded && renderContent()
          }
      </section>
    );
  }
}
