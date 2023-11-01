import { useContext, useEffect, useState } from "react"
import { AuthenContext } from "../../context/AuthenContext"

const MovieFavourite = () => {
    const { state, dispatch } = useContext(AuthenContext)
    const { MovieFavourite } = state
    console.log(MovieFavourite);
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
        <div className="">
            {
                IsFavourite ?
                    <>
                        {
                            MovieFavourite && MovieFavourite.map((movie, index) => (
                                <div className="" key={index}>

                                </div>
                            ))
                        }
                    </>
                    :
                    <>
                        <h1>Vui lòng thêm phim bạn yêu thích vào</h1>
                    </>
            }
        </div>
    )
}
export default MovieFavourite