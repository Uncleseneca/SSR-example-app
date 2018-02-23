import React from 'react';
import { Route, Link } from 'react-router-dom';

import { getTeamNames } from '../api';
import Sidebar from './Sidebar';
import TeamLogo from './TeamLogo';
import Team from './Team';

class Teams extends React.Component {
  state = {
    teamNames: [],
    loading: true,
  };

  componentDidMount() {
    getTeamNames().then((teamNames) => {
      this.setState(() => ({
        loading: false,
        teamNames,
      }));
    });
  }

  render() {
    const { teamNames, loading } = this.state;
    const { match, location } = this.props;
    return (
      <div className="container two-column">
        <Sidebar title="teams" list={teamNames} loading={loading} {...this.props} />
        {loading === false && location.pathname === '/teams' ? (
          <div className="sidebar-instruction">Select a team</div>
        ) : null}
        <Route
          path={`${match.url}/:teamId`}
          render={({ match }) => (
            <div className="panel">
              <Team id={match.params.teamId}>
                {team =>
                  (team === null ? (
                    <h1>Loading</h1>
                  ) : (
                    <div style={{ width: '100%' }}>
                      <TeamLogo id={match.params.teamId} className="center" />
                      <h1 className="medium-header">{team.name}</h1>
                      <ul className="info-list row">
                        <li>
                          Established <div>{team.established}</div>
                        </li>
                        <li>
                          Manager <div>{team.manager}</div>
                        </li>
                        <li>
                          Coach <div>{team.coach}</div>
                        </li>
                      </ul>
                      <Link to={`/${match.params.teamId}`} className="center btn-main">
                        {team.name} Team Page
                      </Link>
                    </div>
                  ))
                }
              </Team>
            </div>
          )}
        />
      </div>
    );
  }
}

export default Teams;
