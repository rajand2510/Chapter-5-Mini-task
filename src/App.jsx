import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Profile from './Components/Profile'
import { AuthProvider } from './Components/AuthContext';
import { ThemeProvider } from './Components/ThemeContext';
import { CartProvider } from './Components/CartContext';
import ProductList from './Components/ProductList';
import Cart from './Components/Cart';
import News from './Components/News';
import { NewsProvider } from './Components/NewsContext';
import UserListWithData from './Components/UserListWithData';
function App() {

  return (
    <>
      <AuthProvider>
        <CartProvider>
          <ThemeProvider>
            <NewsProvider>
              <Router>
                <Navbar />
                <Routes>
                  <Route path="/" element={<Profile />} />
                  <Route path="/ProductList" element={<ProductList />} />
                  <Route path="/Cart" element={<Cart />} />
                  <Route path="/News" element={<News />} />
                  <Route path='/userlist' element={<UserListWithData/>} />
                </Routes>
              </Router>
            </NewsProvider>
          </ThemeProvider>
        </CartProvider>
      </AuthProvider>
    </>
  )
}

export default App
