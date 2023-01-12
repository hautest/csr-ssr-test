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

const Home = () => {
  return (
    <div>
      <Users />
      <Articles />
    </div>
  );
};

export default Home;
