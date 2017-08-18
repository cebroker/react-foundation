import React, { Component } from 'react';
import { connect } from 'react-redux';

import { actions, selectors } from '../../store/loggedInUser';
import { App } from '../../components';

class AppContainer extends Component {
  componentDidMount() {
    const { userFetchStatus, fetchLoggedInUser } = this.props;
    if (userFetchStatus === 'notLoaded') {
      fetchLoggedInUser();
    }
  }
  render() {
    return <App user={this.props.user} />;
  }
}

function mapStateToProps(state) {
  const loggedInUser = selectors(state);
  return {
    user: loggedInUser.getUser(),
    userFetchStatus: loggedInUser.getFetchStatus()
  };
}

export default connect(mapStateToProps, {
  fetchLoggedInUser: actions.fetch
})(AppContainer);
