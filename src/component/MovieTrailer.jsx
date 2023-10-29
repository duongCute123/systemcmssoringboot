import axios from "axios"
import { useEffect, useState } from "react";

const MovieTrailer = ({ id }) => {
    const [keyMovie, setKeyMovie] = useState([])
    const LayKey = () => {
        axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}`)
            .then(res => {
                setKeyMovie(res.data.results[0].key)
                console.log(res.data.results);
            })
            .catch(err => {
                console.log(err);
            })
    }
    useEffect(() => {
        LayKey()
    }, [])
    return (
        <div className="">
            <iframe
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${keyMovie}`}
                frameBorder="0"
                allowFullScreen
            ></iframe>
        </div>
    )
}
export default MovieTrailer