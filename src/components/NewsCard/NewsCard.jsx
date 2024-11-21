import React, { useState } from "react";
import "./NewsCard.css";

function NewsCard({ article, isSavedNews, keyword, openModal }) {
  const {
    title,
    description,
    urlToImage,
    publishedAt,
    author,
  } = article;

  const [isSaved, setIsSaved] = useState(false);

  const formattedDate = new Date(publishedAt).toLocaleDateString();

  const handleSaveToggle = () => {
    if (isSavedNews) {

      console.log("Removing article:", title); // Replace with actual callback
    } else {
      setIsSaved(!isSaved);
    }
  };

  return (
    <div className="card">
      <div className="card__image-container">
        {urlToImage ? (
          <img src={urlToImage} alt={title} className="card__image" />
        ) : (
          <div className="card__image-placeholder">Image Not Available</div>
        )}

   
        {isSavedNews && (
          <div className="card__keyword">{keyword}</div>
        )}

        {/* Save/Remove button and slide-out */}
        <div className="card__save-btn-container">
          <button
            className={`card__save-btn ${
              isSaved || isSavedNews ? "card__save-btn_filled" : ""
            }`}
            onClick={handleSaveToggle}
            aria-label={isSavedNews ? "Remove article" : isSaved ? "Unsave article" : "Save article"}
          ></button>
          {!isSaved && !isSavedNews && (
            <button className="card__slide-out-btn" onClick={() => openModal("login")}>
              Sign in to save articles
            </button>
          )}
          {isSavedNews && (
            <button className="card__slide-out-btn" onClick={handleSaveToggle}>
              Remove article
            </button>
          )}
        </div>
      </div>

      <div className="card__content">
        <span className="card__date">{formattedDate}</span>
        <h2 className="card__title">{title}</h2>
        <p className="card__description">{description}</p>
        <span className="card__author">{author || "Unknown author"}</span>
      </div>
    </div>
  );
}

export default NewsCard;
