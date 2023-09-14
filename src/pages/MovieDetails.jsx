import { getMovieDetails } from "api";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const MovieDetails = () => {

const { movieId, cast, reviews } = useParams();

const [movie, setMovie] = useState(null);

useEffect(() => {
    async function fetchMovie () {
    try {
        const response = await getMovieDetails(movieId);
        setMovie(response);
        } catch (error) {
        console.log(error);
        }
    };
    fetchMovie();
    },
    [movieId]);
    console.log(movie);

    return (
        <>
            {movie && 
            <div>
                <div>
                    <img 
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} 
                    alt={`${movie.title} poster`} />
                    <div>
                        <h2>{movie.title}</h2>
                        <p>User score: {Math.round(movie.vote_average * 10)}%</p>
                        <p>Overview</p>
                        <p>{movie.overview}</p>
                        <p>Genres</p>
                        <ul>
                            {movie.genres.map(genre => (
                                <li key={genre.id}>
                                        <p>{genre.name}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <hr/>
                <div>
                    <p>Additional information</p>
                    <ul>
                        <li>
                            <Link to={`/movies/${movie.id}/cast`}>Cast</Link>
                        </li>
                        <li>
                            <Link to={`/movies/${movie.id}/reviews`}>Reviews</Link>
                        </li>
                    </ul>
                </div>
                <hr/>
            </div>}
 
        </>
    );
};

export default MovieDetails;