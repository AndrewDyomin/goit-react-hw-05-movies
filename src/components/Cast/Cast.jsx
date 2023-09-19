import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieCredits } from "api";
import avatar from 'img/Man-Avatar.jpg'

export const Cast = () => {

const { movieId } = useParams();
const [movieCast, setMovieCast] = useState(null);

useEffect(() => {
    async function fetchCast() {
        const response = await getMovieCredits(movieId);
        if (movieCast === null) {
            setMovieCast(response);
        }
    };
    fetchCast();
}, []);

    return (
        <> 
        {movieCast === null || movieCast.length === 0 ? 
            <p>We don't have cast for this movie.</p> :
        <ul>
            {movieCast.map(actor => (
                    <li key={actor.id}>
                        {actor.profile_path === null ? <img 
                        src={avatar}
                        alt="default image"
                        width='150px'
                        /> 
                        : 
                        <img 
                        src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`} 
                        alt={`${actor.id} photo`} 
                        width='150px'/>}
                        <p>{actor.name}</p>
                        <p>Character: {actor.character}</p>
                    </li>
            ))}    
        </ul>}
        </>
    );
};