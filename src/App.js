import { BrowserRouter } from 'react-router-dom';
import './App.css';
import ProductList from './assets/components/ProductList';
import CategoryProducts from './assets/components/CategoryProducts';
// import Dashboard from './assets/components/Dashboard';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <ProductList />
        <CategoryProducts />
      </BrowserRouter>
    </div>
  )
}

export default App;
