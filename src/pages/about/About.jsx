import './App.css';
import Header from './components/Header/Header';
import Footer from './components/footer/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeBage from './pages/home/HomeBage';
import About from './pages/about/About';
import Authors from './pages/authors/Authors';
import Cart from './pages/cart/Cart';
import Book from './pages/book/Book';
function App() {
    return (
        <BrowserRouter>
            <Header />
         <Routes>
            <Route path="/" element={<HomeBage/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/athors" element={<Authors/>}/>
            {/* <Route path="/cart" element={<Cart/>}/>   */}
            <Route path="/book/:id" element={<Book/>}/>  
           
         </Routes>
            <Footer/>
        </BrowserRouter>
    );
}

export default App;
