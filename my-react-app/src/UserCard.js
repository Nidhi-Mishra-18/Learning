import React from 'react';
import UserDetails from './UserDetails';

const cardStyle = {
  border: '1px solid black',
  borderRadius: '8px',
  padding: '16px',
  width: '300px',
  boxShadow: '0 2px 8px',
};

const UserCard = ({ user }) => {
  return (
    <div style={cardStyle}>
      <h2>{user.name}</h2>
      <UserDetails 
      email={user.email}
      dob={user.dob} 
      age={user.age} 
      phone={user.phoneNumber} 
      location={user.location} 
      />
    </div>
  );
};

export default UserCard;
