
import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Shopcategory } from './Pages/Shopcategory';
import { Product } from './Pages/Product';
import { LoginSIgnup } from './Pages/LoginSIgnup';
import { Cart } from './Pages/Cart';
import { Shop } from './Pages/Shop';
import { Footer } from './Components/Footer/Footer';
import men_banner from './Components/Assets/mensb.JPG';
import women_banner from './Components/Assets/womenb.JPG';
import shoes_banner from './Components/Assets/shoesb.JPG';




function App() {
  return (
    <div >
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/mens' element={<Shopcategory  banner={men_banner} category="mens"/>}/>
        <Route path='/womens' element={<Shopcategory banner={women_banner} category="women"/>}/>
        <Route path='/Shoes' element={<Shopcategory banner={shoes_banner} category="shoes"/>}/>

        <Route path="/product" element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>

        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSIgnup/>}/>

      </Routes>
      <Footer/>
     
      </BrowserRouter>
    </div>
  );
}

export default App;
