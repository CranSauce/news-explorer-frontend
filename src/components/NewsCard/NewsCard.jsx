import { useState } from "react";
import "./NewsCard.css";

function NewsCard({ article, isSavedNews, openModal, isLoggedIn }) {
  const { title, description, urlToImage, publishedAt, author } = article;

  const [isSaved, setIsSaved] = useState(false);

  const formattedDate = new Date(publishedAt).toLocaleDateString();

  const handleSaveToggle = () => {
    if (isSavedNews) {
      console.log("Removing article:", title); // Replace with actual delete functionality
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

        {isSavedNews && <div className="card__keyword">Keyword</div>}

        <div className="card__save-btn-container">
          <button
            className={
              isSavedNews
                ? "card__delete-btn"
                : `card__save-btn ${isSaved ? "card__save-btn_filled" : ""}`
            }
            onClick={handleSaveToggle}
            aria-label={
              isSavedNews
                ? "Remove article"
                : isSaved
                ? "Unsave article"
                : "Save article"
            }
          ></button>

          {!isSaved && !isSavedNews && !isLoggedIn && (
            <button
              className="card__slide-out-btn"
              onClick={() => openModal("login")}
            >
              Sign in to save articles
            </button>
          )}

          {isSavedNews && (
            <button className="card__delete-slide" onClick={handleSaveToggle}>
              Remove from saved
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
