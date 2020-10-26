import React from 'react';
import { Link } from 'gatsby';

export default ({ pageContext: { data } }) => (
  <ul>
      {data.map(item => (
        <li
          key={item.uid}
        >
          <Link to={`/post/${item.slugs[0]}`}>
            {item.slugs[0]}
          </Link>
        </li>
      ))}
    </ul>
);