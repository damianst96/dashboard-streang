import React from 'react';
// import TotalInfo from './TotalInfo';
// import LatestItem from './LatestItem';
// import CategoryProducts from './CategoryProducts';
import ProductList from './ProductList';
// import { fetchTotals, fetchLatestItem, fetchCategoryProducts, fetchProductList } from '../../services/api';

const Dashboard = function() {
  // const [totals, setTotals] = useState({});
  // const [latestProduct, setLatestProduct] = useState({});
  // const [latestUser, setLatestUser] = useState({});
  // const [categoryProducts, setCategoryProducts] = useState([]);
  // const [productList, setProductList] = useState([]);

  // useEffect(function(){
  //   const getData = async function(){
  //     const totalsData = await fetchTotals();
  //     setTotals(totalsData);

  //     const latestProductData = await fetchLatestItem('product');
  //     setLatestProduct(latestProductData);

  //     const latestUserData = await fetchLatestItem('user');
  //     setLatestUser(latestUserData);

  //     const categoryProductsData = await fetchCategoryProducts();
  //     setCategoryProducts(categoryProductsData);

  //     const productListData = await fetchProductList('http://localhost:3000/apis/products')
  //     .then(response => response.json())
  //     .then(data => console.log(data))
  //     setProductList(productListData);
  //   };

  //   getData();
  // }, []);

  return (
    <div>
      {/* <TotalInfo totals={totals} />
      <LatestItem item={latestProduct} title="Último Producto" />
      <LatestItem item={latestUser} title="Último Usuario" />
      <CategoryProducts categories={categoryProducts} /> */}
      <ProductList />
    </div>
  );
};

export default Dashboard;