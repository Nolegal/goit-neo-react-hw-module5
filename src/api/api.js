import axios from "axios";



const API_KEY= "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMDI5YzdhNThlZWU0ZjFiOTgzOTRlMmQwYjM3ZmM1OSIsIm5iZiI6MTc0MTE2OTUyMS43MDg5OTk5LCJzdWIiOiI2N2M4MjM3MTBjNjVlZTlhYmFlNmZmOTkiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.-xZhWOb826k7C32qDCAN0H44gF6Iv1aD8YKOigygb6Y";

axios.defaults.baseURL=" https://api.themoviedb.org/3"
axios.defaults.headers.common["Authorization"] = `Bearer ${API_KEY}`


export async function fetchMovies() {
  const response = await axios.get("/trending/movie/day?language-en-US")
  return response.data
  
}
















// const url = 'https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1';

// const options = {
//   headers: {
// 	// Замість api_read_access_token вставте свій токен
//     Authorization: 'Bearer c029c7a58eee4f1b98394e2d0b37fc59'
//   }
// };

// axios.get(url, options)
//   .then(response => console.log(response))
//   .catch(err => console.error(err));