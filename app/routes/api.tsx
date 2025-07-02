import { useState, useEffect } from "react";
const KEY = "92f1689b";
interface Movie {
    imdbID: string;
    Title: string;
    Year: string;
    Poster: string;
    Director: string;
    Plot:string;
    Genre:string;
  }
  interface OMDbResponse {
    Search?: Movie[];
    totalResults?: string;
    Response: "True" | "False";
    Error?: string;
  }
  
export default function Api (){
    const [movies, setMovies] = useState<Movie[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const res = await fetch(`http://www.omdbapi.com/?apikey=${KEY}&s=interstellar`);
        const data: OMDbResponse = await res.json();

        if (data.Response === "True" && data.Search) {
          setMovies(data.Search);
        } else {
          setError(data.Error || "Unknown error occurred");
        }
      } catch (err) {
        setError("Failed to fetch data");
        console.error(err);
      }
    }

    fetchMovies();
  }, []);

  // useEffect(()=> {
  //     async function fetchMovies (){
  //       try {
  //         const res = await fetch(`http://www.omdbapi.com/?apikey=${KEY}&s=interstellar`);
  //         const data: OMDbResponse = await res.json();

  //         if(data.Response === "True" && data.Search){
  //           setMovies(data.Search);
  //         }else{
  //           setError(data.Error || "unknown error occurred")
  //         }
  //       }
  //       catch(err){
  //         setError("Failed to fetch data")
  //         console.error(err)
  //       }
  //     }
  //     fetchMovies();
  // }, [])
  if (error) return <p>Error: {error}</p>;
    return (

        <div>
            <p>My Api request</p>
            <ul>
      {movies.map((movie) => (
        <li key={movie.imdbID} className="grid grid-cols-3 gap-x-2 justify-center">
          <img
              src={movie.Poster}
              alt={movie.Title}
              style={{ width: "150px" }}
            />
          <h3>{movie.Title} ({movie.Year})</h3>
          <p><strong>Director:</strong> {movie.Director}</p>
            <p><strong>Genre:</strong> {movie.Genre}</p>
            <p><strong>Plot:</strong> {movie.Plot}</p>
            {/* <h4>watch trailer</h4> */}
            {/* <iframe
      width="300"
      height="200"
      src={`https://www.youtube.com/embed?listType=search&list=${encodeURIComponent(
        movie.Title + " trailer"
      )}`}
      title={`${movie.Title} trailer`}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe> */}
        </li>
      ))}
    </ul>

        </div>
    )
}



































// fetch('https://api.example.com/data')
//   .then(res => res.json())
//   .then(data => console.log(data))
//   .catch(err => console.error(err));

// import axios from 'axios';

// axios.get('https://api.example.com/data')
//   .then(res => console.log(res.data))
//   .catch(err => console.error(err));

// if i want to fetch all
// const res = await fetch(`https://www.omdbapi.com/?apikey=${KEY}&i=${movie.imdbID}`);
// const details: MovieDetailResponse = await res.json();
// if (data.Response === "True" && data.Search) {
//   const detailedMovies = await Promise.all(
//     data.Search.map(async (movie) => {
//       const res = await fetch(
//         `https://www.omdbapi.com/?apikey=${KEY}&i=${movie.imdbID}`
//       );
//       const details: MovieDetailResponse = await res.json();

//       return {
//         ...movie,
//         Director: details.Director,
//         Genre: details.Genre,
//         Plot: details.Plot,
//       };
//     })
//   );

//   setMovies(detailedMovies);
// }
