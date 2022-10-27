import axios from "axios";

const baseURL = "http://localhost:3001/";

// const createUser = (user) => {
//   const request = axios.post(baseURL + "auth/register", user);
//   return request.then((response) => response.data);
// };

// const login = (user) => {
//   const request = axios.post(baseURL + "auth", user);
//   return request.then((response) => response.data);
// };

const searchProducts = (params) => {
	const request = axios.get(`${baseURL}api/search`, { params });
	return request.then((response) => response.data);
};

const getProducts = () => {
	const request = axios.get(`${baseURL}api/products`);
	return request.then((response) => response.data);
};

const getProductDetails = (id) => {
	const request = axios.get(`${baseURL}api/products/${id}`);
	return request.then((response) => response.data);
};

const createProduct = (product) => {
	const request = axios.post(`${baseURL}api/products/`, product);
	return request.then((response) => response.data);
};

const deleteProduct = (productID) => {
	const request = axios.delete(`${baseURL}api/products/${productID}`);
	return request.then((response) => response.data);
};

const updateProduct = (productID, newValue) => {
	const request = axios.put(`${baseURL}api/products/${productID}`, newValue);
	return request.then((response) => response.data);
};

// const getCart = (userID) => {
// 	const request = axios.post(`${baseURL}api/cart`, cart);
// 	return request.then((response) => response.data);
// };

// const createCart = (cart) => {
// 	const request = axios.post(`${baseURL}api/cart`, cart);
// 	return request.then((response) => response.data);
// };

// const updateCart = (cart) => {
// 	const request = axios.put(`${baseURL}api/cart`, cart);
// 	return request.then((response) => response.data);
// };

const getOrders = () => {
	const request = axios.get(`${baseURL}api/orders`);
	return request.then((response) => response.data);
};

const checkout = (cart) => {
	const request = axios.post(`${baseURL}create-checkout-session`, cart);
	return request.then((response) => response.data);
};

export default {
	getProducts,
	getProductDetails,
	searchProducts,
	createProduct,
	updateProduct,
	deleteProduct,
	getOrders,
	checkout,
};
