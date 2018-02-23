import React from 'react';
import { parse } from 'query-string';

import { getPlayers } from '../api';
import Sidebar from './Sidebar';

class Players extends React.Component {
  state = {
    loading: true,
    players: [],
  };

  componentDidMount() {
    const { location } = this.props;

    if (location.search) {
      this.fetchPlayers(parse(location.search).teamId);
    } else {
      this.fetchPlayers();
    }
  }

  fetchPlayers = (teamId) => {
    getPlayers(teamId).then(players =>
      this.setState(() => ({
        loading: false,
        players,
      })));
  };

  render() {
    const { loading, players } = this.state;
    const { location } = this.props;
    return (
      <div className="container two-column">
        <Sidebar
          loading={loading}
          title="Players"
          list={players.map(player => player.name)}
          {...this.props}
        />
        {loading === false && location.pathname === '/players' ? (
          <div className="sidebar-instruction">Select a player</div>
        ) : null}
      </div>
    );
  }
}

export default Players;
