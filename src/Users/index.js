import { useGetUsers } from "./hooks/useGetUsers";
import UserCard from "../Atoms/Usercard";
import '.'

const Users = ({IsloggedIn}) => {
  const { users, error, loading } = useGetUsers();
  console.log(users);

  return (
    <div>
      {IsloggedIn}
    <div>
      {loading && <h2>Loading Users...</h2>}
      {error.length > 0 && <h2>{error}</h2>}
      {users.length > 0
        ? users.map((user) => (
            <UserCard
              key={user.id}
              image={user.image}
              fullName={`${user.firstName} ${user.lastName}`}
            />
          ))
        : !loading && <h2>No users found </h2>}
    </div>
<div>
  <p>You have to login</p>
</div>
    </div>
  );
};

export default Users;
