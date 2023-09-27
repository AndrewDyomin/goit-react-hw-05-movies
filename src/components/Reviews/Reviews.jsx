import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieReviews } from "api";

const Reviews = () => {

const { movieId } = useParams();
const [movieReviews, setMovieReviews] = useState(null);

useEffect(() => {
    async function fetchReviews() {
        const response = await getMovieReviews(movieId);
        if (movieReviews === null) {
            setMovieReviews(response);
        }
    };
    fetchReviews();
}, [movieId, movieReviews]);

    return (
        <>
        {movieReviews === null || movieReviews.length === 0 ? 
        <p>We don't have any reviews for this movie.</p> : 
        <ul>
            {movieReviews.map(review => (
                    <li key={review.id}>
                        <p>Author: {review.author}</p>
                        <p>{review.content}</p>
                    </li>
            ))}    
        </ul>}
        </>
    );
};

export default Reviews;