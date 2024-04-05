import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Article() {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    fetchArticle();
  }, [id]);

  const fetchArticle = async () => {
    try {
    const response = await axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=db1e1b0b97454032920f4680018a9674');
      setArticle(response.data);
    } catch (error) {
      console.error('Ошибка при загрузке новости:', error);
    }
  };

  if (!article) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{article.title}</h2>
      <p>{article.content}</p>
      {/* {дополнительный контент для статьи} */}
    </div>
  );
}

export default Article;
