import { useState, useEffect } from "react";
import MoviesBlocks from "../components/MoviesBlocks";
import { BiCameraMovie } from 'react-icons/bi';
import styles from './Home.module.css';

import backgroundImage from '../assets/background.jpeg';

export const Home = () => {
    const [filmes, setFilmes] = useState([]);
    const quantidadeDeFilmesExibidos = 5;
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMDlhOTkyOTkzNTQwODVkODgwZjgyMmZjOTRjYWM2MCIsInN1YiI6IjY1YWVjOTliZDEwMGI2MDBjYjgxMTBmZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8eEmNfFSivU_ZxiaXmEybD9cRkJs_BVtVZTgWTh5HAE' // Substitua isso pelo seu código de API real
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=pt-BR&page=1&sort_by=popularity.desc&limit=${quantidadeDeFilmesExibidos}`, options);
                const data = await response.json();
                setFilmes(data.results);
            } catch (error) {
                console.error(error);
            } 
        };

        fetchData();
    }, [options, quantidadeDeFilmesExibidos]);

    return (
        <div className={styles.home}>
            <img src={backgroundImage} alt="Background" className={styles.background} />

            <div className={styles.descricao}>
                <h2><BiCameraMovie /> Cinepedia</h2>
                <p>
                    Bem-vindo ao <span>Cinepedia</span>, onde a magia do cinema se encontra com a praticidade da tecnologia. Aqui, utilizamos a poderosa API do TMDB para proporcionar a você uma experiência cinematográfica única. Navegue por uma vasta seleção de filmes, desde os clássicos atemporais até as últimas produções de sucesso. Descubra informações detalhadas sobre cada filme. Aproveite a facilidade de explorar tendências e descobrir lançamentos. Deixe-se envolver pela sétima arte, e permita que nossa plataforma, alimentada pela robusta API do TMDB, seja seu guia no fascinante mundo do cinema. Prepare-se para uma jornada cinematográfica incomparável, tudo ao alcance de seus dedos.
                </p>
            </div>

            <h3>Filmes sugeridos:</h3>
            <div className={styles.movies}>
                {filmes.map(filme => (
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
