import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomeScreen from './components/HomeScreen';
import ProductListingScreen from './components/ProductsListScreen';
import ProductScreen from './components/ProductScreen';
import BreadCrumb from './components/BreadCrumb';

const App = () => {
  return <BrowserRouter>
    <BreadCrumb />
    <Routes>
      <Route path='/' element={<HomeScreen />}/>
      <Route path='/products' element={<ProductListingScreen />}/>
      <Route path='/products/:id' element={<ProductScreen />}/>
    </Routes>
  </BrowserRouter>
}

export default App;
