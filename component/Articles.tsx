import axios from "axios";
import { useEffect, useState } from "react";
import { Article } from "../pages";

interface ArticlesProps {
  articles: Article[];
}

export const Articles = () => {
  const [articles, setArticles] = useState<Article[]>();
  useEffect(() => {
    const getArticles = async () => {
      const result = await axios.get(
        "https://63a6a469f8f3f6d4ab0f5e08.mockapi.io/api/article"
      );
      setArticles(result.data);
    };
    getArticles();
  }, []);

  return (
    <>
      <h2>Articles List</h2>
      {articles?.map((item) => (
        <li key={item.id}>
          <a href={item.url}>{item.title}</a>
        </li>
      ))}
    </>
  );
};
