import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import Topic from '../Button/Topic';
import Loading from '../Icon/Loading';
import craftTopics from '../../helpers/craftTopics';
import foodTopics from '../../helpers/foodTopics';
import homeTopics from '../../helpers/homeTopics';
import techTopics from '../../helpers/techTopics';
import workTopics from '../../helpers/workTopics';
import './Topics.less';

class Topics extends React.Component {
  static propTypes = {
    favorite: PropTypes.bool,
    topics: PropTypes.arrayOf(PropTypes.string),
    maxItems: PropTypes.number,
    maxCraftTopics: PropTypes.number,
    maxFoodTopics: PropTypes.number,
    maxHomeTopics: PropTypes.number,
    maxTechTopics: PropTypes.number,
    maxWorkTopics: PropTypes.number,
    loading: PropTypes.bool,
  };

  static defaultProps = {
    favorite: false,
    topics: [],
    maxItems: 3,
    maxCraftTopics: 3,
    maxFoodTopics: 3,
    maxHomeTopics: 3,
    maxTechTopics: 3,
    maxWorkTopics: 3,
    loading: false,
  };

  constructor(props) {
    super(props);
    this.state = {
      showMore: false,
      showMoreCraftTopics: false,
      showMoreFoodTopics: false,
      showMoreHomeTopics: false,
      showMoreTechTopics: false,
      showMoreWorkTopics: false,
    };
  }

  changeVisibility(showMore) {
    this.setState({ showMore });
  }

  changeMoreCraftTopicsVisibility(showMoreCraftTopics) {
    this.setState({ showMoreCraftTopics });
  }

  changeMoreFoodTopicsVisibility(showMoreFoodTopics) {
    this.setState({ showMoreFoodTopics });
  }

  changeMoreHomeTopicsVisibility(showMoreHomeTopics) {
    this.setState({ showMoreHomeTopics });
  }

  changeMoreTechTopicsVisibility(showMoreTechTopics) {
    this.setState({ showMoreTechTopics });
  }

  changeMoreWorkTopicsVisibility(showMoreWorkTopics) {
    this.setState({ showMoreWorkTopics });
  }

  render() {
    const { topics, favorite, maxItems, maxCraftTopics, maxFoodTopics, maxHomeTopics, maxTechTopics, maxWorkTopics, loading } = this.props;

    const displayedTopics = this.state.showMore ? topics : topics.slice(0, maxItems);
    const displayedCraftTopics = this.state.showMoreCraftTopics ? craftTopics : craftTopics.slice(0, maxCraftTopics);
    const displayedFoodTopics = this.state.showMoreFoodTopics ? foodTopics : foodTopics.slice(0, maxFoodTopics);
    const displayedHomeTopics = this.state.showMoreHomeTopics ? homeTopics : homeTopics.slice(0, maxHomeTopics);
    const displayedTechTopics = this.state.showMoreTechTopics ? techTopics : techTopics.slice(0, maxTechTopics);
    const displayedWorkTopics = this.state.showMoreWorkTopics ? workTopics : workTopics.slice(0, maxWorkTopics);

    return (
      <div className="Topics">

        <h4>
          <FormattedMessage
            id={'craft_tags'}
            defaultMessage={'Crafts Topics'}
          />
        </h4>
        {loading && <Loading center={false} />}
        {!loading && (
          <ul className="Topics__list">
            {displayedCraftTopics.map(topic => (
              <li key={topic}>
                <Topic name={topic} favorite={favorite} />
              </li>
            ))}
          </ul>
        )}
        {!loading && craftTopics.length > maxCraftTopics && !this.state.showMoreCraftTopics ? (
          <a role="button" tabIndex={0} onClick={() => this.changeMoreCraftTopicsVisibility(true)}>
            <FormattedMessage id="show_more" defaultMessage="View more" />
          </a>
        ) : null}
        {!loading && craftTopics.length > maxCraftTopics && this.state.showMoreCraftTopics ? (
          <a role="button" tabIndex={0} onClick={() => this.changeMoreCraftTopicsVisibility(false)}>
            <FormattedMessage id="show_less" defaultMessage="View less" />
          </a>
        ) : null}

        <h4>
          <FormattedMessage
            id={'food_tags'}
            defaultMessage={'Food Topics'}
          />
        </h4>
        {loading && <Loading center={false} />}
        {!loading && (
          <ul className="Topics__list">
            {displayedFoodTopics.map(topic => (
              <li key={topic}>
                <Topic name={topic} favorite={favorite} />
              </li>
            ))}
          </ul>
        )}
        {!loading && foodTopics.length > maxFoodTopics && !this.state.showMoreFoodTopics ? (
          <a role="button" tabIndex={0} onClick={() => this.changeMoreFoodTopicsVisibility(true)}>
            <FormattedMessage id="show_more" defaultMessage="View more" />
          </a>
        ) : null}
        {!loading && foodTopics.length > maxFoodTopics && this.state.showMoreFoodTopics ? (
          <a role="button" tabIndex={0} onClick={() => this.changeMoreFoodTopicsVisibility(false)}>
            <FormattedMessage id="show_less" defaultMessage="View less" />
          </a>
        ) : null}

        <h4>
          <FormattedMessage
            id={'home_tags'}
            defaultMessage={'Home Topics'}
          />
        </h4>
        {loading && <Loading center={false} />}
        {!loading && (
          <ul className="Topics__list">
            {displayedHomeTopics.map(topic => (
              <li key={topic}>
                <Topic name={topic} favorite={favorite} />
              </li>
            ))}
          </ul>
        )}
        {!loading && homeTopics.length > maxHomeTopics && !this.state.showMoreHomeTopics ? (
          <a role="button" tabIndex={0} onClick={() => this.changeMoreHomeTopicsVisibility(true)}>
            <FormattedMessage id="show_more" defaultMessage="View more" />
          </a>
        ) : null}
        {!loading && homeTopics.length > maxHomeTopics && this.state.showMoreHomeTopics ? (
          <a role="button" tabIndex={0} onClick={() => this.changeMoreHomeTopicsVisibility(false)}>
            <FormattedMessage id="show_less" defaultMessage="View less" />
          </a>
        ) : null}

        <h4>
          <FormattedMessage
            id={'tech_tags'}
            defaultMessage={'Technology Topics'}
          />
        </h4>
        {loading && <Loading center={false} />}
        {!loading && (
          <ul className="Topics__list">
            {displayedTechTopics.map(topic => (
              <li key={topic}>
                <Topic name={topic} favorite={favorite} />
              </li>
            ))}
          </ul>
        )}
        {!loading && techTopics.length > maxTechTopics && !this.state.showMoreTechTopics ? (
          <a role="button" tabIndex={0} onClick={() => this.changeMoreTechTopicsVisibility(true)}>
            <FormattedMessage id="show_more" defaultMessage="View more" />
          </a>
        ) : null}
        {!loading && techTopics.length > maxTechTopics && this.state.showMoreTechTopics ? (
          <a role="button" tabIndex={0} onClick={() => this.changeMoreTechTopicsVisibility(false)}>
            <FormattedMessage id="show_less" defaultMessage="View less" />
          </a>
        ) : null}

        <h4>
          <FormattedMessage
            id={'work_tags'}
            defaultMessage={'Workshop Topics'}
          />
        </h4>
        {loading && <Loading center={false} />}
        {!loading && (
          <ul className="Topics__list">
            {displayedWorkTopics.map(topic => (
              <li key={topic}>
                <Topic name={topic} favorite={favorite} />
              </li>
            ))}
          </ul>
        )}
        {!loading && workTopics.length > maxWorkTopics && !this.state.showMoreWorkTopics ? (
          <a role="button" tabIndex={0} onClick={() => this.changeMoreWorkTopicsVisibility(true)}>
            <FormattedMessage id="show_more" defaultMessage="View more" />
          </a>
        ) : null}
        {!loading && workTopics.length > maxWorkTopics && this.state.showMoreWorkTopics ? (
          <a role="button" tabIndex={0} onClick={() => this.changeMoreWorkTopicsVisibility(false)}>
            <FormattedMessage id="show_less" defaultMessage="View less" />
          </a>
        ) : null}

        <h4>
          <FormattedMessage
            id={favorite ? 'favorite_topics' : 'trending_topics'}
            defaultMessage={favorite ? 'Favorite topics' : 'Steem Topics'}
          />
        </h4>
        {loading && <Loading center={false} />}
        {!loading && (
          <ul className="Topics__list">
            <li key='merasteem'>
              <Topic name='merasteem' favorite={favorite} />
            </li>
            <li key='mera-introduction'>
              <Topic name='mera-introduction' favorite={favorite} />
            </li>
            <li key='mera-application'>
              <Topic name='mera-application' favorite={favorite} />
            </li>
            {displayedTopics.map(topic => (
              <li key={topic}>
                <Topic name={topic} favorite={favorite} />
              </li>
            ))}
          </ul>
        )}
        {!loading && topics.length > maxItems && !this.state.showMore ? (
          <a role="button" tabIndex={0} onClick={() => this.changeVisibility(true)}>
            <FormattedMessage id="show_more" defaultMessage="View more" />
          </a>
        ) : null}
        {!loading && topics.length > maxItems && this.state.showMore ? (
          <a role="button" tabIndex={0} onClick={() => this.changeVisibility(false)}>
            <FormattedMessage id="show_less" defaultMessage="View less" />
          </a>
        ) : null}
      </div>
    );
  }
}

export default Topics;
