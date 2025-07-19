import React, { useContext } from 'react';
import UserContext from './UserContext';

const UserDetails = () => {
  const user = useContext(UserContext);

  if (!user) {
    return <div>No user data available.</div>;
  }

  return (
    <div>
      <h2>{user.name}</h2>
      <p>Age: {user.age}</p>
      <p>Bio: {user.bio}</p>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default UserDetails;
