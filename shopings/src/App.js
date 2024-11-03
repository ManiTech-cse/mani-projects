import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './header';
import Home from './Home';
import Electronics, { Laptops, Mobile, Tv } from './electronic';
import Beautyproducts from './Beautyproducts';
import Groceries from './Groceries';
import Mobilesdata from './mobilesdata';
import BuyNowComponent from './map';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />

          <Route path="Electronics" element={<Electronics />}>
            <Route path="Mobile" element={<Mobile />}>
            <Route path="BuyNowComponent" element={<BuyNowComponent/>}></Route>
            </Route>
            <Route path="Laptops" element={<Laptops />} /> 
            <Route path="Tv" element={<Tv />} />
          </Route>

          <Route path="Beautyproducts" element={<Beautyproducts />} />
          <Route path="Groceries" element={<Groceries />} />
        </Route>

        <Route path="Mobile/:id" element={<Mobilesdata />} /> 
      </Routes>
    </BrowserRouter>

  );
}

export default App;
