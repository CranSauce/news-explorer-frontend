import "./SavedNewsHeader.css";


function SavedNewsHeader() {
  return (
    <header className="saved-news-header">
     
      <div className="saved-news-header__content">
        <p className="saved-news-header__title">Saved articles</p>
        <h1 className="saved-news-header__user-message">
          Elise, you have 5 saved articles
        </h1>
        <p className="saved-news-header__keywords">
          By keywords: <span>Nature, Yellowstone, and 2 other</span>
        </p>
      </div>
    </header>
  );
}

export default SavedNewsHeader;