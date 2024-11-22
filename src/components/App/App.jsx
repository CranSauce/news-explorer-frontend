import { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../Header/Header";
import Main from "../Main/Main";
import About from "../About/About";
import Footer from "../Footer/Footer";
import SavedNews from "../SavedNews/SavedNews";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import LoginForm from "../LoginForm/LoginForm";
import SignupForm from "../SignupForm/SIgnupForm";
import { fetchArticles } from "../../utils/NewsExplorerApi";
import "./App.css";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState("");
  const modalRef = useRef();

  const [isLoggedIn] = useState(false); //Change Logged in state here
  const [isRegistrationComplete, setIsRegistrationComplete] = useState(false);
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [visibleArticles, setVisibleArticles] = useState(3);
  const [savedArticles, setSavedArticles] = useState([]);

  const handleSearch = async (query) => {
    if (!query.trim()) {
      setError("Please enter a keyword");
      return;
    }

    setError(null);
    setLoading(true);

    try {
      const articles = await fetchArticles(query);
      setArticles(articles);
    } catch (err) {
      setError(
        "Sorry, something went wrong during the request. Please try again later."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = () => {
    setIsRegistrationComplete(true); 
  };
  
  // const saveArticle = (article) => {
  //   setSavedArticles((prev) => [...prev, article]);
  // };

  const removeArticle = (articleId) => {
    setSavedArticles((prev) => prev.filter((article) => article.id !== articleId));
  };

  const openModal = (type) => {
    setModalType(type);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsRegistrationComplete(false);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleClickOutside = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      closeModal();
    }
  };

  useEffect(() => {
    if (isModalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isModalOpen]);

  return (
    <div className="page">
      <div className="page__content">
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Header openModal={openModal} onSearch={handleSearch} isLoggedIn={isLoggedIn} />
                  <Main
                    articles={articles}
                    loading={loading}
                    error={error}
                    visibleArticles={visibleArticles}
                    setVisibleArticles={setVisibleArticles}
                    openModal={openModal}
                    isLoggedIn={isLoggedIn}
                  />
                  <About />
                </>
              }
            />
            <Route
              path="/saved-news"
              element={<SavedNews 
                isLoggedIn={isLoggedIn}
                openModal={openModal}
                savedArticles={savedArticles}
                removeArticle={removeArticle} />}
            />
          </Routes>
          <Footer />
        </Router>

        {isModalOpen && (
         <ModalWithForm
           ref={modalRef}
           isOpen={isModalOpen}
           onClose={closeModal}
           openModal={openModal}
           onSubmit={handleSubmit}
           title={modalType === "login" ? "Sign in" : "Sign up"}
           buttonText={modalType === "login" ? "Sign in" : "Sign up"}
           isLogin={modalType === "login"}
           isRegistrationComplete={isRegistrationComplete}
         >
           {modalType === "login" ? (
             <LoginForm /> 
           ) : (
             <SignupForm onSubmit={handleSubmit} />
           )}
         </ModalWithForm>
        )}
      </div>
    </div>
  );
}

export default App;
