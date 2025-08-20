export const TMDB_CONFIG = {
    BASE_URL : 'https://api.themoviedb.org/3',
    API_KEY : process.env.EXPO_PUBLIC_MOVIE_API_KEY,
    headers:{
        accept: 'application/json',
        Authorization: `Bearer ${process.env.EXPO_PUBLIC_MOVIE_API_KEY}`
    }
}

export const fetchPopularMovies = async ({ query}: {query:string})=>{
    // THIS FUNCTION WILL FETCH THE POPULAR MOVIES OR THE MOVIES QUERIED BY THE USER!

    const endpoint =query 
    ?`${TMDB_CONFIG.BASE_URL}/search/movie?query=${encodeURIComponent(query)}` 
    :`${TMDB_CONFIG.BASE_URL}/discover/movie?sort_by = popularity.desc`;

    const response = await fetch(endpoint, {
        method: "GET",
        headers: TMDB_CONFIG.headers,
    });
    
    if (!response.ok){
        //@ts-ignore
        throw new Error ('Failed to fetch movies', response.statusText);

    }

    const data = await response.json();
}
// const url = 'https://api.themoviedb.org/3/authentication';
// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NjhkMjQ3MzY0YTIwMWY3NjhkN2IzZTQ0ZjMwMTY0MSIsIm5iZiI6MTc1NTcwNjYyOC4xMjQsInN1YiI6IjY4YTVmNTA0NTdmY2EyOGFkZmZkMjdiMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rcvQn0x7PiCS2JYlKJLAg-mNUX8jOFS5J1V94I_nUX4'
//   }
// };

// fetch(url, options)
//   .then(res => res.json())
//   .then(json => console.log(json))
//   .catch(err => console.error(err));