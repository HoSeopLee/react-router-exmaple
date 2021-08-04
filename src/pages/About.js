import React from 'react';
import queryString from 'query-string';
const About = (props) => {
  const searchParams = props.location.search;
  // const obj = new URLSearchParams(searchParams);
  const query = queryString.parse(searchParams);
  return (
    <div>
      <he>Avout 페이지 입니다.</he>
      {query.name && <p>{query.name} 입니다.</p>}
    </div>
  );
};

export default About;
