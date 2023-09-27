import { useEffect, useState } from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { getQuery } from "api";
import film from 'img/Film-Clapboard.png'


const Movies = () => {
    const [resultList, setResultList] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const q = searchParams.get("q");
    const location = useLocation();
  
    useEffect(() => {

      if (q === "" || q === null) {
        return; 
    }
  
      async function fetchQuery() {
        const response = await getQuery(q);
        setResultList(response);
      }
  
      fetchQuery();
    }, [q]);
  
    const handleSubmit = e => {
      e.preventDefault();
      const form = e.currentTarget;
      setSearchParams({ q: form.elements.query.value });
      form.reset();
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" name="query" />
                <button type="submit">Search</button>
            </form>
            <ul>
                {resultList.map(movie => (
                    <li key={movie.id}>
                        <Link to={`/movies/${movie.id}`} state={{ from: location }}>
                            {movie.poster_path === null ? <img 
                            src={film}
                            alt="default"
                            width='150px'
                            /> 
                            : 
                            <img 
                            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} 
                            alt={`${movie.id}`} 
                            width='150px'/>}
                            <p>{movie.title}</p>
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default Movies;