import axios from "axios";
import { Articles } from "../component/Articles";
import { Users } from "../component/Users";

export interface Article {
  createdAt: Date;
  title: string;
  id: string;
  url: string;
}
export interface User {
  avatar: string;
  createdAt: Date;
  id: string;
  name: string;
}

interface HomeProps {
  users: User[];
  articles: Article[];
}

const Home = ({ users, articles }: HomeProps) => {
  return (
    <div>
      <h1>SSR</h1>
      <button
        onClick={() => {
          throw new Error("Sentry Frontend Error");
        }}
      >
        Throw error
      </button>
      <Users users={users} />
      <Articles articles={articles} />
    </div>
  );
};

export async function getServerSideProps() {
  const userResult = await axios.get(
    "https://63a6a469f8f3f6d4ab0f5e08.mockapi.io/api/users"
  );
  const articleResult = await axios.get(
    "https://63a6a469f8f3f6d4ab0f5e08.mockapi.io/api/article"
  );

  return { props: { users: userResult.data, articles: articleResult.data } };
}

export default Home;
