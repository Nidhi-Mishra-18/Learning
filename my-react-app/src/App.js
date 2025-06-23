import React from 'react';
import UserCard from './UserCard';

const App = () => {
  const user = {
    name: 'Aayush Mishra',
    email: 'aayush@example.com',
    dob:'18/03/2002',
    age: 23,
    phoneNumber: '7866324564',
    location: 'India',
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>User Profile</h1>
      <UserCard user={user} />
    </div>
  );
};

export default App;
