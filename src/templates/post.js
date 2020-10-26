import React from 'react';
import { Link } from 'gatsby';

export default ({ pageContext: { post } }) => (
  <div>
    <h1>{post.data.project_name[0].text}</h1>
<p>{post.data.description[0].text}</p>
    <Link to="/prismic">Back</Link>
  </div>
);