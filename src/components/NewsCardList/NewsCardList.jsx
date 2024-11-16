import React from "react";
import NewsCard from "../NewsCard/NewsCard";
import "./NewsCardList.css";

function NewsCardList({ articles, visibleArticles, openModal }) {
  return (
    <div className="news-card-list">
      {articles.slice(0, visibleArticles).map((article, index) => (
        <NewsCard key={index} article={article} openModal={openModal} />
      ))}
    </div>
  );
}

export default NewsCardList;
