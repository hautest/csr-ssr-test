import Image from "next/image";
import { User } from "../pages";

interface Users {
  users: User[];
}

export const Users = ({ users }: Users) => {
  console.log("d");
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
