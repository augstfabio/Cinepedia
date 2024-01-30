import styles from './MoviesBlocks.module.css'
import { Link } from 'react-router-dom';

const MoviesBlocks = ({ filme, posterPath }) => {
    
    return (
      <Link to={`/movie/${filme.id}`}>
      <div className={styles.movies_block}>
        <div className={styles.image_container}>
          {posterPath && (
            <div className={styles.poster_wrapper}>
              <img
                src={posterPath}
                alt={filme.title}
                className={styles.movie_poster}
              />
              <h1 className={styles.movie_title}>{filme.title}</h1>
            </div>
          )}
        </div>
        
      </div>
      </Link>);
  };
export default MoviesBlocks;
