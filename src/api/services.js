import axios from "axios";

const baseURL = "http://localhost:3001/products/";

// const createUser = (user) => {
//   const request = axios.post(baseURL + "auth/register", user);
//   return request.then((response) => response.data);
// };

// const login = (user) => {
//   const request = axios.post(baseURL + "auth", user);
//   return request.then((response) => response.data);
// };

// const searchUsers = (params) => {
//   const request = axios.get(baseURL + "api/users", { params });
//   return request.then((response) => response.data);
// };

const getProducts = () => {
  const request = axios.get(baseURL);
  return request.then((response) => response.data);
};

// const submitConversation = (title) => {
//   const request = axios.post(`${baseURL}api/conversations/`, title);
//   return request.then((response) => response.data);
// };

// const getConversationDetails = (id) => {
//   const request = axios.get(`${baseURL}api/conversations/${id}`);
//   return request.then((response) => response.data);
// };

// const submitMessage = (id, message) => {
//   const request = axios.post(`${baseURL}api/conversations/${id}`, message);
//   return request.then((response) => response.data);
// };

// const deleteMessage = (convID, messageID) => {
//   const request = axios.delete(
//     `${baseURL}api/conversations/${convID}/${messageID}`
//   );
//   return request.then((response) => response.data);
// };

// const updateMessage = (convID, messageID, newValue) => {
//   const request = axios.put(
//     `${baseURL}api/conversations/${convID}/${messageID}`,
//     { likes: newValue }
//   );
//   return request.then((response) => response.data);
// };

export default {
  getProducts
};
