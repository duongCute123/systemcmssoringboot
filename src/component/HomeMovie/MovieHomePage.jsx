import axios from "axios"
import { useEffect, useState } from "react"
import MovieTrailer from "../MovieTrailer"
const MovieHomePage = () => {
    return (
        <div className="">
            <Movie />
            
        </div>
    )
}
const Movie = () => {
    const [movie, setMovie] = useState([])
    const LayMovie = () => {
        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}`)
            .then(res => {
                setMovie(res.data.results)
            })
            .catch(err => {
                console.log(err);
            })
    }

    useEffect(() => {
        LayMovie()
    }, [])
    return (
        <div className="">
            <div>
                <div className=" flex items-center text-center my-3 mx-7">
                    <h1 className="font-bold text-black text-xl">Trending</h1>
                    <div className=" flex border-solid border-2 border-sky-950 ml-5 rounded-full gap-4">
                        <input type="button" className="rounded-full bg-slate-900 text-white w-[90px]" value="Today" />
                        <input type="button" className="rounded-full bg-slate-900 text-white" value="This Week" />
                    </div>
                </div>
                <div className="flex flex-row overflow-x-auto w-full h-auto">
                    {
                        movie.map((movies) => {
                            return (
                                <div className="mx-2 w-full" key={movies.id}>
                                    <div className="w-[150px] h-[225px]">
                                        <img className="rounded-xl" src={`https://image.tmdb.org/t/p/w500/${movies.poster_path}`} alt="" />
                                    </div>
                                    <p className="font-bold ">{movies.original_title}</p>
                                    <p className="font-medium">{movies.release_date}</p>
                                    <MovieTrailer id={movies.id}/>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
// const Videos = ({ id }) => {
//     const [movie, setMovie] = useState([])
//     const LayMovie = () => {
//         axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}`)
//             .then(res => {
//                 setMovie(res.data.results[0].key)

//             })
//             .catch(err => {
//                 console.log(err);
//             })
//     }

//     useEffect(() => {
//         LayMovie()
//     }, [])
//     return (
//         <div className="">
//             {/* <div className=" flex items-center text-center my-3 mx-7">
//                 <h1 className="font-bold text-black text-xl">Latest Trailers</h1>
//                 <div className=" flex border-solid border-2 border-sky-950 ml-5 rounded-full gap-4">
//                     <input type="button" className="rounded-full bg-slate-900 text-white w-[90px]" value="Popular" />
//                     <input type="button" className="rounded-full bg-slate-900 text-white" value="In Theater" />
//                 </div>
//             </div>
//             <div className="flex flex-row overflow-x-auto w-full h-auto">

//             </div> */}


//             {/* <ReactPlayer
//                 controls={true}
//                 url={`https://www.youtube.com/watch?v=${movie}`}
//                 playing={true}
//                 volume={1}
//                 width="100%"
//                 height="100%"
//                 pip={true}
//             /> */}
//         </div>
//     )
// }
export default MovieHomePage