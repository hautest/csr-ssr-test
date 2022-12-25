import Image from "next/image";
import { Article } from "../pages";

interface ArticlesProps {
  articles: Article[];
}

export const Articles = ({ articles }: ArticlesProps) => {
  return (
    <>
      <h2>Articles List</h2>
      {articles.map((item) => (
        <li key={item.id}>
          <a href={item.url}>{item.title}</a>
        </li>
      ))}
    </>
  );
};
