import { getMovieDetails } from "api";
import { useEffect, useState, Suspense } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
import film from 'img/Film-Clapboard.png'

const MovieDetails = () => {

const params = useParams();
const movieId = params.movieId;
const [movie, setMovie] = useState(null);
const location = useLocation();
const backLinkHref = location.state?.from ?? "/products";;

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

    return (
        <>
            {movie && 
            <div>
                <Link to={backLinkHref}><button>Go back</button></Link>
                <div>
                    {movie.poster_path === null ? <img 
                    src={film}
                    alt="default"
                    width='150px'
                    /> 
                    : 
                    <img 
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} 
                    alt={`${movie.title}`} 
                    width='250px'/>}
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
                            <Link to='cast' state={{ from: backLinkHref }}>Cast</Link>
                        </li>
                        <li>
                            <Link to='reviews' state={{ from: backLinkHref }}>Reviews</Link>
                        </li>
                    </ul>
                </div>
                <hr/>
                <Suspense fallback={<p>Loading...</p>}>
                    <Outlet />
                </Suspense>
            </div>}
        </>
    );
};

export default MovieDetails;