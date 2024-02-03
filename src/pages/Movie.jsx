import styles from './Movie.module.css';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import background from '../assets/background.jpeg';
import { FaChevronLeft } from "react-icons/fa";

export const Movie = () => {
  const [movie, setMovie] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate(); 

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMDlhOTkyOTkzNTQwODVkODgwZjgyMmZjOTRjYWM2MCIsInN1YiI6IjY1YWVjOTliZDEwMGI2MDBjYjgxMTBmZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8eEmNfFSivU_ZxiaXmEybD9cRkJs_BVtVZTgWTh5HAE'
    }
  };

  const getMovie = async (url) => {
    const res = await fetch(url, options);
    const data = await res.json();
    setMovie(data);
  };

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/movie/${id}?language=pt-br`;
    getMovie(url);
  }, [id]);

  const handleGoHome = () => {
    navigate('/cinepedia');
  };

  return (
    <div className={styles.movieContainer}>
      <img src={background} alt="Background" className={styles.background} />

      {movie && (
        <div className={styles.movie}>
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
          <div className={styles.textos}>
            <h2><span className={styles.texto_amarelo}>Nome: </span>{movie.title}</h2>
            <p>{movie.overview}</p>
            <h3><span className={styles.texto_amarelo}>Linguagem original: </span> {movie.original_language}</h3>
            <h3><span className={styles.texto_amarelo}>Avaliação:</span> {movie.vote_average}</h3>
            <h3><span className={styles.texto_amarelo}>Data de lançamento: </span>{movie.release_date}</h3>
            <button onClick={handleGoHome} className={styles.btn} type='button'><FaChevronLeft /> Home</button>
          </div>
        </div>
      )}
    </div>
  );
};
