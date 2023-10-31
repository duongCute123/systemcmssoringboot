import { Link } from "react-router-dom"
import { CategoriMovie, Countries, genres } from "../../types"
import { useContext } from "react"
import { AuthenContext } from "../../context/AuthenContext"
const NavLink = () => {
    const { open, setOpen } = useContext(AuthenContext)
    const handleLinkClick = () => {
        setOpen(false);
    };
    const menu = [
        { name: "Loại Phim" },
        { name: "Thể Loại" },
        { name: "Quốc Gia" },
        { name: "TV Show" },
        { name: "Sắp Chiếu" }
    ]
    return (
        <>

            <div>
                <div className="px-3 flex flex-col  md:flex-row gap-7 text-left  md:cursor-pointer">
                    <li className="z-50 group">
                        <h1 className="py-7 hover:text-yellow-400">Loai Phim</h1>
                        <div className="absolute top-10 hidden group-hover:md:block hover:md:block">
                            <div className="py-3">
                                <div className="w-6 h-6 left-3 absolute  mt-1 bg-black/60 rotate-45"></div>
                            </div>
                            <div className="p-3.5 grid grid-cols-3 gap-4 text-white  bg-black/60">
                                {
                                    CategoriMovie.map((its, ids) => (
                                        <Link key={ids} className={`hover:no-underline hover:text-yellow-400`} to={`/movie/movie_type/${its.slug}`}>{its.name}</Link>
                                    ))
                                }
                            </div>
                        </div>
                        {/* Tren mobile */}
                        <div className="md:hidden">
                            <div className="p-3.5 grid grid-cols-2 md:grid-cols-3 text-white bg-black/60">
                                {
                                    CategoriMovie.map((list, ids) => (
                                        <Link key={ids} to={`/movie/movie_type/${list.slug}`} className={`hover:no-underline hover:text-yellow-400 ${open ? 'left-0' : 'left-[-100%]'}`} onClick={handleLinkClick}>{list.name}</Link>
                                    ))
                                }
                            </div>
                        </div>
                    </li>

                    <li className="z-50 group">
                        <h1 className="py-7 hover:text-yellow-400">Thể Loại</h1>
                        <div className="absolute top-10 group-hover:md:block hover:md:block hidden">
                            <div className="py-3">
                                <div className="w-6 h-6 left-3 absolute mt-1 bg-black/60 rotate-45"></div>
                            </div>
                            <div className="p-3.5 grid grid-cols-3 gap-2 bg-black/60 text-white">
                                {
                                    genres.map((gens, ids) => (
                                        <Link key={ids} to={`/movie/${gens.category}/${gens.slug}`} className="hover:no-underline hover:text-yellow-400">{gens.name}</Link>
                                    ))
                                }
                            </div>
                        </div>
                        {/* Tren mobile */}
                        <div className="md:hidden">
                            <div className="p-3.5 grid grid-cols-2 md:grid-cols-3 bg-black/60 text-white">
                                {
                                    genres.map((gens, ids) => (
                                        <Link key={ids} to={`/movie/${gens.category}/${gens.slug}`} className={`hover:no-underline hover:text-yellow-400 ${open ? 'left-0' : 'left-[-100%]'}`} onClick={handleLinkClick}>{gens.name}</Link>
                                    ))
                                }
                            </div>
                        </div>
                    </li>

                    <li className="z-50 group">
                        <h1 className="py-7 hover:text-yellow-400">Quốc Gia</h1>
                        <div className="absolute top-10 hidden group-hover:md:block hover:md:block">
                            <div className="py-3">
                                <div className="w-6 h-6 left-3 absolute mt-1 bg-black/60 rotate-45"></div>
                            </div>
                            <div className="p-3.5 grid gap-2  md:grid-cols-3 text-white bg-black/60">
                                {
                                    Countries.map((list, ids) => (
                                        <Link key={ids} to={`/movie/${list.countrie}/${list.slug}`} className="hover:no-underline hover:text-yellow-400">{list.name}</Link>
                                    ))
                                }
                            </div>
                        </div>
                        {/* Tren mobile */}
                        <div className="md:hidden">
                            <div className="p-3.5 grid grid-cols-2 md:grid-cols-3 text-white bg-black/60">
                                {
                                    Countries.map((list, ids) => (
                                        <Link key={ids} to={`/movie/${list.countrie}/${list.slug}`} className={`hover:no-underline hover:text-yellow-400 ${open ? 'left-0' : 'left-[-100%]'}`} onClick={handleLinkClick}>{list.name}</Link>
                                    ))
                                }
                            </div>
                        </div>
                    </li>

                    <Link to={"/movie/type_movie/tv-shows"} className="py-7 hover:no-underline hover:text-yellow-400">TV Show</Link>
                    <Link to={"/movie/upcomming_movi/phim-sap-chieu"} className="py-7 hover:no-underline hover:text-yellow-400">Sắp Chiếu</Link>
                </div>
                {/* Menu tren mobile */}
                <div className="">

                </div>
            </div>


        </>
    )
}
export default NavLink