import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Feed from '../feed/Feed';
import { getIsAuthenticated, getAuthenticatedUser, getFeed } from '../reducers';
import {
  getFeedLoadingFromState,
  getFeedFetchedFromState,
  getFeedHasMoreFromState,
  getFeedFromState,
} from '../helpers/stateHelpers';
import { getFeedContent, getMoreFeedContent } from '../feed/feedActions';
import { showPostModal, hidePostModal } from '../app/appActions';
import EmptyUserProfile from '../statics/EmptyUserProfile';
import EmptyUserOwnProfile from '../statics/EmptyUserOwnProfile';
import PostModal from '../post/PostModalContainer';

@withRouter
@connect(
  state => ({
    authenticated: getIsAuthenticated(state),
    authenticatedUser: getAuthenticatedUser(state),
    feed: getFeed(state),
  }),
  {
    getFeedContent,
    getMoreFeedContent,
    showPostModal,
    hidePostModal,
  },
)
export default class MeraProjects extends React.Component {
  static propTypes = {
    authenticated: PropTypes.bool.isRequired,
    authenticatedUser: PropTypes.shape().isRequired,
    feed: PropTypes.shape().isRequired,
    match: PropTypes.shape().isRequired,
    showPostModal: PropTypes.func.isRequired,
    hidePostModal: PropTypes.func.isRequired,
    limit: PropTypes.number,
    getFeedContent: PropTypes.func,
    getMoreFeedContent: PropTypes.func,
  };

  static defaultProps = {
    limit: 100,
    location: {},
    getFeedContent: () => {},
    getMoreFeedContent: () => {},
  };

  componentDidMount() {
    const { feed } = this.props;
    const username = this.props.match.params.name;
    const content = getFeedFromState('merasteem', username, feed);

    if (_.isEmpty(content)) {
      this.props.getFeedContent({
        sortBy: 'merasteem',
        category: this.props.match.params.name,
        limit: this.props.limit,
      });
    }
  }

  componentWillReceiveProps(nextProps) {
    const { feed } = nextProps;
    const username = nextProps.match.params.name;
    const content = getFeedFromState('merasteem', username, feed);

    if (_.isEmpty(content) && nextProps.match.url !== this.props.match.url) {
      if (window) {
        window.scrollTo(0, 0);
      }
      this.props.getFeedContent({
        sortBy: 'merasteem',
        category: nextProps.match.params.name,
        limit: nextProps.limit,
      });
      this.props.hidePostModal();
    }
  }

  render() {
    const { authenticated, authenticatedUser, feed, limit } = this.props;
    const username = this.props.match.params.name;
    const isOwnProfile = authenticated && username === authenticatedUser.name;
    const content = getFeedFromState('merasteem', username, feed);
    const isFetching = getFeedLoadingFromState('merasteem', username, feed);
    const fetched = getFeedFetchedFromState('merasteem', username, feed);
    const hasMore = getFeedHasMoreFromState('merasteem', username, feed);
    const loadMoreContentAction = () =>
      this.props.getMoreFeedContent({
        sortBy: 'merasteem',
        category: username,
        limit,
      });

    return (
      <div>
        <div className="profile">
          <Feed
            content={content}
            isFetching={isFetching}
            hasMore={hasMore}
            loadMoreContent={loadMoreContentAction}
            showPostModal={this.props.showPostModal}
          />
          {_.isEmpty(content) && fetched && isOwnProfile && <EmptyUserOwnProfile />}
          {_.isEmpty(content) && fetched && !isOwnProfile && <EmptyUserProfile />}
        </div>
        {<PostModal />}
      </div>
    );
  }
}