// import axios from 'axios';
// import React, { useState, useEffect } from 'react';

// function News() {
//   const [news, setNews] = useState([]);

//   useEffect(() => {
//     fetchNews();
//   }, []);

//   const fetchNews = async () => {
//     try {
//       const response = await axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=db1e1b0b97454032920f4680018a9674');
//       setNews(response.data);
//     } catch (error) {
//       console.error('Ошибка при загрузке новостей:', error);
//     }
//   };

//   return (
//     <div>
//       <h2>Новости</h2>
//       <ul>
//         {news.map((item) => (
//           <li key={item._id}>{item.title}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default News;


import axios from 'axios';
import React, { useState, useEffect } from 'react';

function News() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      const response = await axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=db1e1b0b97454032920f4680018a9674');
      setNews(response.data.articles);
    } catch (error) {
      console.error('Ошибка при загрузке новостей:', error);
    }
  };

  return (
    <div>
      <h2>Новости</h2>
      <ul>
        {news.map((item, index) => (
          <li key={index}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default News;
