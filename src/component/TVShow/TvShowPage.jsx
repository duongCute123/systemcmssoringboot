import { DOMAIN } from "../../domain/domain"
import useFetch from "../../hook/useFetch"
import NavBarTMDB from "../NavBar"
import { Link } from "react-router-dom"
import { BiTimeFive } from "react-icons/bi"
import Footer from "../Footer"
const TVShow = () => {
    const url = `${DOMAIN}/danh-sach/tv-shows.json?slug=tv-shows`
    const data = useFetch(url)
    console.log(data);
    return (
        <div className="bg-black/95 duration-200 bg-cover w-full bg-no-repeat text-white  min-h-screen">
            <NavBarTMDB/>
            <div className="font-bold mx-3 mt-10 items-center flex">
                <h1 className="font-bold text-xl">TvShow</h1>
            </div>
            <div className="h-max w-full mx-auto grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-1 mt-10">
                {
                    data.map((list, index) => (
                        <div className="rounded-xl mx-3 my-4" key={index}>
                            <div className="bg-stone-900 overflow-hidden aspect-[2/3]">
                                <Link to={`/movie/detail-movie/${list.slug}`} >
                                    <img width={"350px"} height={"400px"} className="duration-300 rounded-xl w-full mx-auto h-full bg-no-repeat object-cover bg-cover" src={`https://img.ophim9.cc/uploads/movies/${list.thumb_url}`} alt="" />
                                </Link>

                            </div>
                            <div className="">
                                <div className="flex flex-row justify-between mt-2">
                                    <div className="">
                                        <p className="line-clamp-1 text-lg font-bold">{list.name}</p>
                                    </div>
                                    <div className=" hidden md:block">
                                        <p className="text-yellow-400 font-bold">{list.year}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-row justify-between">
                                <div className="flex gap-2">
                                    <p className="text-yellow-400 font-bold">
                                        {list.quality}
                                    </p>
                                    <p className="border line-clamp-1 font-bold text-sm h-auto hidden md:block hover:bg-yellow-300 bg-gray-400  border-solid items-center text-center">
                                        {list.lang}
                                    </p>
                                </div>
                                <div className="flex flex-row items-center justify-center gap-1">
                                    <BiTimeFive color="yellow" /> {list.time}
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <Footer />
        </div>
    )
}
export default TVShow