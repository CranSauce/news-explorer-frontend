const BASE_URL = 'https://nomoreparties.co/news/v2/everything';
const API_KEY = '23fa119b12674c6bbd5663aaedd4f876';

export const fetchArticles = async (query) => {
  try {
    if (!query) {
      throw new Error('Please enter a keyword');
    }

    const today = new Date();
    const sevenDaysAgo = new Date(today);
    sevenDaysAgo.setDate(today.getDate() - 7);

    const response = await fetch(`${BASE_URL}?q=${encodeURIComponent(query)}&from=${sevenDaysAgo.toISOString()}&to=${today.toISOString()}&pageSize=100&apiKey=${API_KEY}`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch articles');
    }

    const data = await response.json();
    return data.articles;
  } catch (error) {
    console.error("Error fetching articles:", error);
    throw error;
  }
};
