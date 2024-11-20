import React from "react";
import NewsCard from "../NewsCard/NewsCard";
import "./NewsCardList.css";

function NewsCardList({ articles, visibleArticles, openModal, isLoggedIn }) {
  return (
    <ul className="news-card-list">
      {articles.slice(0, visibleArticles).map((article, index) => (
        <li key={index}>
          <NewsCard article={article} openModal={openModal} isLoggedIn={isLoggedIn} />
        </li>
      ))}
    </ul>
  );
}

export default NewsCardList;
