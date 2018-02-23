import React from 'react';
import T from 'prop-types';
import { getTeam } from '../api';

class Team extends React.Component {
  state = {
    team: null,
  };

  componentDidMount() {
    this.fetchTeam(this.props.id);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.id !== nextProps.id) {
      this.fetchTeam(nextProps.id);
    }
  }

  fetchTeam = (id) => {
    this.setState(() => ({ team: null }));
    getTeam(id).then(team => this.setState(() => ({ team })));
  };

  render() {
    return this.props.children(this.state.team);
  }
}

Team.propTypes = {
  id: T.string.isRequired,
  children: T.func.isRequired,
};

export default Team;
