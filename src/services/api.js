// // Listado de usuarios
// export const fetchUsers = async function(){
//     await fetch('http://localhost:3000/apis/users')
//     .then(function(response){
//         return response.json();
//     })
//     .then(function(users){
//         return response.json(users);
//     })
// };

// // Total de productos por categoría
// export const fetchCategoryProducts = async function(category){
//     const response = await fetch(`http://localhost:3000/products/categories/${category}`);
//     return response.json();
// };

// // Listado de productos
// export const fetchProductList = async function(){
//     await fetch('http://localhost:3000/apis/products')
//     .then(function(response){
//         return response.json();
//     })
//     .then(function(products){
//         return response.json(products);
//     })
// };

// Total de productos, usuarios y categorías
// export const fetchTotals = async function(){
//     const response = await fetch('https://tu-api.com/totals');
//     return response.json();
// };

// Último producto o usuario
// export const fetchLatestItem = async function(type){
//     const response = await fetch(`https://api.com/latest/${type}`);
//     return response.json();
// };

// Total de productos en cada categoría