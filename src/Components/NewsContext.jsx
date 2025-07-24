// NewsContext.js
import React, { createContext, useReducer, useEffect,useContext } from 'react';

const NewsContext = createContext(); 

// Define initial state for the reducer
const initialState = {
  newsData: null,
  loading: false,
  error: null,
};


function newsReducer(state, action) {
  switch (action.type) {
    case 'FETCH_NEWS_REQUEST':
      return { ...state, loading: true, error: null };
    case 'FETCH_NEWS_SUCCESS':
      return { ...state, loading: false, newsData: action.payload };
    case 'FETCH_NEWS_FAILURE':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}


export function NewsProvider({ children }) {
  const [state, dispatch] = useReducer(newsReducer, initialState);

  useEffect(() => {
    async function fetchNews() {
      console.log('API call initiated.'); 
      dispatch({ type: 'FETCH_NEWS_REQUEST' }); 
      try {
        const response = await fetch('https://saurav.tech/NewsAPI/top-headlines/category/health/in.json');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const jsonData = await response.json();
        console.log('API call successful. Data:', jsonData); 
        dispatch({ type: 'FETCH_NEWS_SUCCESS', payload: jsonData }); 
      } catch (err) {
        console.error('API call failed:', err.message);
        dispatch({ type: 'FETCH_NEWS_FAILURE', payload: err.message });
      }
    }

    if (!state.newsData && !state.loading) { 
      console.log('Checking for cached data, initiating fetch if needed.'); 
      fetchNews(); 
    } else if (state.newsData) {
      console.log('News data already present in context, skipping API call.');
    }
  }, [state.newsData, state.loading]); 

  return (
    <NewsContext.Provider value={state}>
      {children}
    </NewsContext.Provider>
  );
}


export function useNews() {
  return useContext(NewsContext);
}
