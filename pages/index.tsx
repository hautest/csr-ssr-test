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
      <Users />
      <Articles />
    </div>
  );
};

export default Home;
