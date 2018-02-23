import React from 'react';
import { Route, Link } from 'react-router-dom';
import T from 'prop-types';
import slug from 'slug';

const CustomLink = ({ to, children }) => (
  <Route
    path={to.pathname}
    children={({ match }) => (
      <li style={{ listStyleType: 'none', fontWeight: match ? 'bold' : 'normal' }}>
        <Link to={to}>{children}</Link>
      </li>
    )}
  />
);
const Sidebar = ({
  title, list, loading, location, match,
}) =>
  (loading === true ? (
    <h3>Loading</h3>
  ) : (
    <div>
      <h3 className="header">{title}</h3>
      <ul className="sidebar-list">
        {list.map(item => (
          <CustomLink
            key={item}
            to={{
              pathname: `${match.url}/${slug(item)}`,
              search: location.search,
            }}
          >
            {item.toUpperCase()}
          </CustomLink>
        ))}
      </ul>
    </div>
  ));

Sidebar.propTypes = {
  title: T.string.isRequired,
  list: T.array.isRequired,
  loading: T.bool.isRequired,
};

export default Sidebar;
