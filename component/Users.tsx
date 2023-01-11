import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import { User } from "../pages";

interface Users {
  users: User[];
}

export const Users = ({ users }: Users) => {
  return (
    <>
      <h2>User List</h2>
      <ul>
        {users?.map((item) => (
          <li key={item.id}>
            <div
              style={{ position: "relative", width: "80vw", height: "80vh" }}
            >
              <Image fill src={item.avatar} alt={`${item.name} img`} />
            </div>
            <span>{item.name}</span>
          </li>
        ))}
      </ul>
    </>
  );
};
