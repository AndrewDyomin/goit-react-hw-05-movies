import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getTrendList } from "api";
import { MovieDetails } from "pages/MovieDetails";


export const Home = () => {

const [ trendList, setTrendList ] = useState([]);

useEffect(() => {
    async function trend () {
    const response = await getTrendList();
    if (trendList.length === 0) {
        setTrendList(response);
    };
    };
    trend();
    
},
    [trendList]);
console.log(trendList);
return (
    <>
        <h1>Tranding today</h1>
        <ul>
            {trendList.map(movie => (
                <li key={movie.id}>
                    <Link to={`/movies/${movie.id}`}>
                        <p>{movie.title}</p>
                    </Link>
                </li>
            ))}
        </ul>
    </>
);
};