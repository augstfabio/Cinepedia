import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import MoviesBlocks from "../components/MoviesBlocks";
import styles from './Search.module.css'
import backgroundImage from '../assets/background.jpeg';

export const Search = () => {
  const [searchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const query = searchParams.get('q');

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMDlhOTkyOTkzNTQwODVkODgwZjgyMmZjOTRjYWM2MCIsInN1YiI6IjY1YWVjOTliZDEwMGI2MDBjYjgxMTBmZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8eEmNfFSivU_ZxiaXmEybD9cRkJs_BVtVZTgWTh5HAE'
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`, options);
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.error(error);
      }

    }
    fetchData()
  })

  return (
    <div className={styles.container}>
      <img src={backgroundImage} alt="Background" className={styles.background} />
      <h2 className={styles.title}>Resultados para '<span className={styles.query_text}>{query}</span>' :</h2>
      <div className={styles.movies}>
                {movies.map(filme => (
                    <MoviesBlocks
                        key={filme.id}
                        filme={filme}
                        posterPath={`https://image.tmdb.org/t/p/w500${filme.poster_path}`}
                    />
                ))}
            </div>
    </div>
  );
};
