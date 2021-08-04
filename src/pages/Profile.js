import React from 'react';

const Profile = (props) => {
  const { params } = props?.match;
  return (
    <div>
      <h2>Profile 페이지 입니다.</h2>
      {params?.id && <p> {params.id}</p>}
    </div>
  );
};

export default Profile;
