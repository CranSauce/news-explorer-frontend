import React, { useState } from "react";
import "./SearchForm.css";

function SearchForm({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <div className="search-form">
      <input
        type="text"
        className="search-form__input"
        placeholder="Search news..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className="search-form__btn" onClick={handleSubmit}>
        Search
      </button>
    </div>
  );
}

export default SearchForm;
