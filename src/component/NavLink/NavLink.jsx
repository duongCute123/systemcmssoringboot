import { Link } from "react-router-dom"
import { CategoriMovie, Countries, genres } from "../../types"
const NavLink = () => {
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
                                <div className="w-6 h-6 left-3 absolute mt-1 bg-white rotate-45"></div>
                            </div>
                            <div className="p-3.5 grid grid-cols-3 gap-4 text-black  bg-white">
                                {
                                    CategoriMovie.map((list, ids) => (
                                        <Link className="hover:no-underline hover:text-yellow-400" to={`/movie/${list.slug}`}>{list.name}</Link>
                                    ))
                                }
                            </div>
                        </div>
                        {/* Tren mobile */}
                        <div className="md:hidden">
                            <div className="p-3.5 grid grid-cols-3 text-black bg-white">
                                {
                                    CategoriMovie.map((list, ids) => (
                                        <Link to={`/movie/${list.slug}`} className="hover:no-underline hover:text-yellow-400">{list.name}</Link>
                                    ))
                                }
                            </div>
                        </div>
                    </li>

                    <li className="z-50 group">
                        <h1 className="py-7 hover:text-yellow-400">Thể Loại</h1>
                        <div className="absolute top-10 group-hover:md:block hover:md:block hidden">
                            <div className="py-3">
                                <div className="w-6 h-6 left-3 absolute mt-1 bg-white rotate-45"></div>
                            </div>
                            <div className="p-3.5 grid grid-cols-3 gap-2 text-black bg-white">
                                {
                                    genres.map((gens, ids) => (
                                        <Link to={`/movie/${gens.category}/${gens.slug}`} className="hover:no-underline hover:text-yellow-400">{gens.name}</Link>
                                    ))
                                }
                            </div>
                        </div>
                        {/* Tren mobile */}
                        <div className="md:hidden">
                            <div className="p-3.5 grid grid-cols-3 text-black bg-white">
                                {
                                    genres.map((gens, ids) => (
                                        <Link to={`/movie/${gens.category}/${gens.slug}`} className="hover:text-yellow-400 hover:no-underline">{gens.name}</Link>
                                    ))
                                }
                            </div>
                        </div>
                    </li>

                    <li className="z-50 group">
                        <h1 className="py-7 hover:text-yellow-400">Quốc Gia</h1>
                        <div className="absolute top-10 hidden group-hover:md:block hover:md:block">
                            <div className="py-3">
                                <div className="w-6 h-6 left-3 absolute mt-1 bg-white rotate-45"></div>
                            </div>
                            <div className="p-3.5 grid gap-2 grid-cols-3 text-black bg-white">
                                {
                                    Countries.map((list, ids) => (
                                        <Link to={`/movie/${list.slug}`} className="hover:no-underline hover:text-yellow-400">{list.name}</Link>
                                    ))
                                }
                            </div>
                        </div>
                        {/* Tren mobile */}
                        <div className="md:hidden">
                            <div className="p-3.5 grid grid-cols-3 text-black bg-white">
                                {
                                    Countries.map((list, ids) => (
                                        <Link to={`/movie/${list.slug}`} className="hover:no-underline hover:text-yellow-400">{list.name}</Link>
                                    ))
                                }
                            </div>
                        </div>
                    </li>

                    <h1 className="py-7 hover:text-yellow-400">TV Show</h1>
                    <h1 className="py-7 hover:text-yellow-400">Sắp Chiếu</h1>
                </div>
                {/* Menu tren mobile */}
                <div className="">

                </div>
            </div>


        </>
    )
}
export default NavLink