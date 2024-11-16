import React, { useState } from 'react';
import { fetchArticles } from './NewsExplorerApi'; 

function TestApiComponent() {
  const [query, setQuery] = useState('');
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    setError(null); 
    try {
      const fetchedArticles = await fetchArticles(query);
      setArticles(fetchedArticles);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <h1>Test News API</h1>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter search keyword"
      />
      <button onClick={handleSearch}>Search</button>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <div>
        <h2>Search Results</h2>
        {articles.length > 0 ? (
          <ul>
            {articles.map((article, index) => (
              <li key={index}>
                <h3>{article.title}</h3>
                <p>{article.description}</p>
                <a href={article.url} target="_blank" rel="noopener noreferrer">
                  Read more
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <p>No articles found.</p>
        )}
      </div>
    </div>
  );
}

export default TestApiComponent;
