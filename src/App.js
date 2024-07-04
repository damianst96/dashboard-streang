import { BrowserRouter } from 'react-router-dom';
import './App.css';
import ProductList from './assets/components/ProductList';
import CategoryProducts from './assets/components/CategoryProducts';
import LatestProduct from './assets/components/LatestProduct';
import LatestUser from './assets/components/LatestUser';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <ProductList />
        <CategoryProducts />
        <LatestProduct />
        <LatestUser />
      </BrowserRouter>
    </div>
  )
}

export default App;
