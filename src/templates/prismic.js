import React from 'react';

export default ({ pageContext: { data } }) => (
  <ul>
      {data.map(item => (
        <li
          key={item.uid}
        >
          {item.slugs[0]}
        </li>
      ))}
    </ul>
);