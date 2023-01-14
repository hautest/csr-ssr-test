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
      <ul>
        {users?.map((item) => (
          <li key={item.id}>
            <span>{item.name}</span>
          </li>
        ))}
      </ul>
    </>
  );
};
