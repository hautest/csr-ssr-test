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

const Home: NextPage = () => {
  const [user, setUser] = useState<Users[]>();
  useEffect(() => {
    const getUser = async () => {
      const result = await axios.get(
        "https://63a6a469f8f3f6d4ab0f5e08.mockapi.io/api/users"
      );
      setUser(result.data);
    };
    getUser();
  }, []);

  return (
    <div>
      <h1>User List CSR</h1>
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

export default Home;
