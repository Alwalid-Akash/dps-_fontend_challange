import React, { useEffect, useState } from 'react';
import axios from 'axios';

// Define the structure of a User object based on the API response
interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  city: string;
  age: number;
  image: string;
}

interface ApiResponse {
  users: User[]; // The 'users' field contains an array of User objects
}

const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]); // State to store users data
  const [loading, setLoading] = useState<boolean>(true); // State to track loading
  const [error, setError] = useState<string | null>(null); // State to track errors

  useEffect(() => {
    // Fetch data from the API
    axios
      .get<ApiResponse>('https://dummyjson.com/users') // Specify the API response type
      .then((response) => {
        setUsers(response.data.users); // Now TypeScript knows that response.data.users is of type User[]
        setLoading(false); // Set loading to false once data is fetched
      })
      .catch((error) => {
        setError(error.message); // Set error message if API call fails
        setLoading(false);
      });
  }, []);

  return (
    <div className="user-list-container">
      <h1>User List</h1>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <div className="user-list">
        {users.map((user) => (
          <div className="user-card" key={user.id}>
            <img src={user.image} alt={`${user.firstName} ${user.lastName}`} className="user-image" />
            <div className="user-details">
              <h3>{user.firstName} {user.lastName}</h3>
              <p>Email: {user.email}</p>
              <p>Phone: {user.phone}</p>
              <p>Age: {user.age}</p>
              <p>city:{user.city}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;
