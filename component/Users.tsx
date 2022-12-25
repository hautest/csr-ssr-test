import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import { User } from "../pages";

export const Users = () => {
  const [users, setUsers] = useState<User[]>();
  useEffect(() => {
    const getUsers = async () => {
      const result = await axios.get(
        "https://63a6a469f8f3f6d4ab0f5e08.mockapi.io/api/users"
      );
      setUsers(result.data);
    };
    getUsers();
  }, []);
  return (
    <>
      <h2>User List</h2>
      <ul>
        {users?.map((item) => (
          <li key={item.id}>
            <Image
              width={40}
              height={40}
              src={item.avatar}
              alt={`${item.name} img`}
            />
            <span>{item.name}</span>
          </li>
        ))}
      </ul>
    </>
  );
};
