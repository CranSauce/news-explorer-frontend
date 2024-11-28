import "./SavedNews.css";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import Navigation from "../Navigation/Navigation";
import SavedArticlesList from "../SavedArticlesList/SavedArticlesList";

function SavedNews({ openModal, savedArticles, isLoggedIn, removeArticle }) {
  return (
    <div className="saved-news">
      <Navigation isSavedNews={true} openModal={openModal} isLoggedIn={isLoggedIn} />
      <SavedNewsHeader />
      <SavedArticlesList
        articles={savedArticles}
        isLoggedIn={isLoggedIn}
        removeArticle={removeArticle}
      />
    </div>
  );
}

export default SavedNews;
