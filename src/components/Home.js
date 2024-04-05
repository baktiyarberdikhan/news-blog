// function Home() {
//   return (
//     <div>
//       <h2>Добро пожаловать на домашнюю страницу! еле сделал</h2>
//       <p>Но еще не совсем понял что к чему</p>
//     </div>
//   );
// }

// export default Home;



// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function Home() {
//   const [articles, setArticles] = useState([]);

//   useEffect(() => {
//     const fetchArticles = async () => {
//       try {
//         const response = await axios.get('https://alphaedu.portfolio-adilzhexenov.kz/news');
//         setArticles(response.data);
//       } catch (error) {
//         console.error('Ошибка при загрузке статей:', error);
//       }
//     };

//     fetchArticles();
//   }, []);

//   return (
//     <div>
//       <h2>Добро пожаловать на домашнюю страницу!</h2>
//       <p>Вот список статей:</p>
//       <ul>
//         {articles.map(article => (
//           <li key={article._id}>{article.title}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Home;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Home() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get('https://alphaedu.portfolio-adilzhexenov.kz/news');
        setArticles(response.data);
      } catch (error) {
        console.error('Ошибка при загрузке статей:', error);
      }
    };

    fetchArticles();
  }, []);

  return (
    <div>
      <h2>Добро пожаловать на домашнюю страницу!</h2>
      <p>Вот список статей:</p>
      <ul>
        {articles.map(article => (
          <li key={article._id}>{article.title}</li>
        ))}
      </ul>
      <p>Перейти на другие страницы:</p>
      <ul>
        <li><Link to="/news">Новости</Link></li>
        <li><Link to="/about">О нас</Link></li>
        <li><Link to="/contact">Контакты</Link></li>
      </ul>
    </div>
  );
}

export default Home;
