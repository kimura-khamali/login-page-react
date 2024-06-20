import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchUsers } from './utls';
// import './UserList.css';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchUsers();
      setUsers(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2>User List</h2>
      <ul className="user-list">
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/user/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;