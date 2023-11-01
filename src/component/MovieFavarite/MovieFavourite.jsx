import { useContext, useEffect, useState } from "react"
import { AuthenContext } from "../../context/AuthenContext"
import { BiTime } from "react-icons/bi"
import NavBarTMDB from "../Menu/NavBar"
import { Link } from "react-router-dom"

const MovieFavourite = () => {
    const { state, dispatch } = useContext(AuthenContext)
    const { MovieFavourite } = state
    const [IsFavourite, setIsFavourite] = useState(false)
    useEffect(() => {
        dispatch({ type: 'GET_MOVIE_FAVOURITE' })
    }, [])
    useEffect(() => {
        if (MovieFavourite.length > 0) {
            setIsFavourite(true)
        }
    }, [MovieFavourite])
    return (
        <div className="min-h-screen w-full mx-auto">
            <NavBarTMDB />
            {
                IsFavourite ?
                    <h1 className="font-bold text-2xl text-white my-4 mx-2">Danh sách phim yêu thích</h1>
                    :
                    ''
            }

            {
                IsFavourite ?
                    <div className="grid grid-cols-2 mx-3 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-8">
                        {/* <div className="inset-0 bg-black fixed opacity-30">

                        </div> */}

                        {

                            MovieFavourite && MovieFavourite.map((movie, index) => (

                                <div className="" key={index}>
                                    <div className="">
                                        <Link to={`/movie/detail-movie/${movie.slug}`} className="w-full h-full ">
                                            <img className="w-full h-full aspect-[2/3]" width={"400px"} height={"350px"} src={`${movie.thumb_url}`} alt="" />
                                        </Link>
                                        <div className="">
                                            <div className="flex flex-row justify-between  items-center">
                                                <div>
                                                    <h1 className="font-bold line-clamp-1 text-white mt-2 text-xl">{movie.name}</h1>
                                                </div>
                                                <div className="">
                                                    <h1 className="text-white font-bold">{movie.year}</h1>
                                                </div>
                                            </div>
                                            <p className="line-clamp-1 font-bold text-yellow-400">{movie.origin_name}</p>
                                            <div className="flex flex-row justify-between">
                                                <ul className="flex text-white gap-2">
                                                    <li className="text-yellow-400 font-bold">{movie.quality}</li>
                                                    <li className="font-bold border-2 border-solid bg-slate-600">{movie.lang}</li>
                                                </ul>
                                                <ul className="text-white flex flex-row gap-1 items-center">
                                                    <BiTime color="yellow" />
                                                    <li className="">{movie.time}</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    :
                    <>
                        <h1>Vui lòng thêm phim bạn yêu thích vào</h1>
                    </>
            }
        </div>
    )
}
export default MovieFavourite