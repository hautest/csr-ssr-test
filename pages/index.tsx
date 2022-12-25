import axios from "axios";
import type { NextPage } from "next";
import Image from "next/image";
import { useEffect, useState } from "react";

interface Users {
  avatar: string;
  createdAt: Date;
  id: string;
  name: string;
}

interface HomeProps {
  user: Users[];
}

const Home = ({ user }: HomeProps) => {
  return (
    <div>
      <h1>User list SSR</h1>
      {user?.map((item) => (
        <div key={item.id}>
          <Image
            width={40}
            height={40}
            src={item.avatar}
            alt={`${item.name} img`}
          />
          <span>{item.name}</span>
        </div>
      ))}
    </div>
  );
};

export async function getServerSideProps() {
  const result = await axios.get(
    "https://63a6a469f8f3f6d4ab0f5e08.mockapi.io/api/users"
  );

  return { props: { user: result.data } };
}

export default Home;
