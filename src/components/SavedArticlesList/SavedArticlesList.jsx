import React from "react";
import NewsCard from "../NewsCard/NewsCard";
import "./SavedArticlesList.css";

function SavedArticlesList({ articles, isLoggedIn, removeArticle }) {
  return (
    <ul className="saved-articles-list">
      {articles.map((article, index) => (
        <li key={index}>
          <NewsCard
            article={article}
            isSavedNews={true}
            keyword={article.keyword || "Saved"}
            isLoggedIn={isLoggedIn}
            handleRemove={() => removeArticle(article.id)}
          />
        </li>
      ))}
    </ul>
  );
}

export default SavedArticlesList;
