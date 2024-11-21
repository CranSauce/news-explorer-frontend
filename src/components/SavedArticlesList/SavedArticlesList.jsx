import React from 'react';
import NewsCard from '../NewsCard/NewsCard'; // Ensure this path matches your setup
import './SavedArticlesList.css';

const mockArticles = [
  { id: 1, title: "Mock Article 1", description: "Description of article 1" },
  { id: 2, title: "Mock Article 2", description: "Description of article 2" },
  { id: 3, title: "Mock Article 3", description: "Description of article 3" },
  { id: 4, title: "Mock Article 4", description: "Description of article 4" }
];

const SavedArticlesList = ({ isLoggedIn }) => {
  return (
    <ul className="saved-articles-list">
      {mockArticles.map((article) => (
        <li key={article.id}>
          <NewsCard isLoggedIn={isLoggedIn} article={article} title={article.title} description={article.description} />
        </li>
      ))}
    </ul>
  );
};

export default SavedArticlesList;
