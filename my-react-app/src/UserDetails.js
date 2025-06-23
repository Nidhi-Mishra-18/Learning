import React from 'react';

const UserDetails = ({ email, dob, age, phone, location }) => {
  return (
    <div>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>DOB:</strong> {dob}</p>
      <p><strong>Age:</strong> {age}</p>
      <p><strong>Phone:</strong> {phone}</p>
      <p><strong>Location:</strong> {location}</p>
    </div>
  );
};

export default UserDetails;
