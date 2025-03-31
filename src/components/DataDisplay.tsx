import React from 'react';

interface User {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  email: string;
  image: string;
  highlight?: boolean;
  address: {
    address: string;
    city: string;
    state: string;
    stateCode: string;
    postalCode: string;
    coordinates: {
      lat: number;
      lng: number;
    };
  };
}

interface DataDisplayProps {
  users: User[];
}

const DataDisplay: React.FC<DataDisplayProps> = ({ users = [] }) => {
  return (
    <div className="user-cards ">
      {users.map((user) => (
        <div
          key={user.id}
          className={`user-card ${user.highlight ? 'highlight' : ''}`}
        >
          <img src={user.image} alt={user.firstName} className="user-image" />
          <div className="user-details ">
            <h3>{user.firstName} {user.lastName}</h3>
            <p>Email: {user.email}</p>
            <p>City: {user.address.city}</p>
            <p>Age: {user.age}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DataDisplay;
