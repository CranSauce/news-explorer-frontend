import React from "react";
import NewsCardList from "../NewsCardList/NewsCardList";
import Preloader from "../Preloader/Preloader";
import "./Main.css";

function Main({
  articles,
  loading,
  error,
  visibleArticles,
  setVisibleArticles,
  openModal,
  isLoggedIn
}) {
  const handleShowMore = () => {
    setVisibleArticles((prev) => prev + 3);
  };

  return (
    <main className="main">
      <div className="main__content">
        <h1 className="main__title">Search Results</h1>
        {error && <p style={{ color: "red" }}>{error}</p>}

        {loading && <Preloader />}

        {articles.length === 0 && !loading && !error && (
          <p>No results found.</p>
        )}

        {/* Wrap search results in a <section> */}
        {articles.length > 0 && (
          <section className="main__search-results">
            <NewsCardList
              articles={articles}
              visibleArticles={visibleArticles}
              openModal={openModal}
              isLoggedIn={isLoggedIn}
            />
            {articles.length > visibleArticles && (
              <button
                type="button"
                className="main__more-btn"
                onClick={handleShowMore}
              >
                Show more
              </button>
            )}
          </section>
        )}
      </div>
    </main>
  );
}

export default Main;