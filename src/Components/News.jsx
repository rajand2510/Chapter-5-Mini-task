// Profile.js
import React from 'react';
import { useNews } from './NewsContext';

const News = () => {
  const { newsData, loading, error } = useNews();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <div>
        {newsData && newsData.articles && newsData.articles.length > 0 ? (
          <div>
            {newsData.articles.map(article => (
              <ul className='flex flex-row w-[90%] m-5 shadow-sm rounded-2xl p-4' key={article.title}>
                <li>
                  <img className='w-18 h-18 rounded-lg mr-5' src={article.urlToImage} alt="" />
                </li>
                <li>
                  <h3 className='text-sm' >{article.title}</h3>
                  <p className='text-xs text-gray-400'>{article.description}</p>
                </li>
              </ul>
            ))}
          </div>
        ) : (
          <p>No articles found.</p>
        )}
      </div>
    </>
  );
};

export default News;
