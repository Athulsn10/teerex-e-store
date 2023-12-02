import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Wish from './pages/Wish';

function App() {
  return (
   <>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path='/cart' element={<Cart/>} />
    <Route path='/wishlist' element={<Wish/>} />

   </Routes>
   </>
  );
}

export default App;
