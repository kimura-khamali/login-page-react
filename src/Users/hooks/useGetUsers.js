// import getUser from "../utils";
import { useEffect, useState } from "react";
import { getUsers } from "../utils";

export const useGetUsers = () => {
  const [users, setUser] = useState([]);
  const [error, seterror] = useState("");
  const [loading, setloading] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setloading(true);
        const result = await getUsers();
        console.log({ result });
        setUser(result.users);
        setloading(false);
      } catch (error) {
        seterror(`error: ${error.message}`);
        setloading(false);
      }
    };
    fetchUsers();
  }, []);

  return { users, error, loading };
};

//useeffect takes callback function and ependancy array as sth to happen immedialely page loads
