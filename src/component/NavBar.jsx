import { Link, useNavigate } from "react-router-dom"
import logo from "../images.module/white1.webp"
import { BiChevronDown } from "react-icons/bi"
import { BiChevronUp, BiSearch } from "react-icons/bi"
import { useContext, useEffect, useState } from "react"
import { AiOutlineClose } from "react-icons/ai"
import { BiMenuAltLeft } from "react-icons/bi"
import { AuthenContext } from "../context/AuthenContext"
import axios from "axios"
import { Countries, genres } from "../types"
import { DOMAIN } from "../domain/domain"
import NavLink from "./NavLink/NavLink"
import Button from "./NavLink/Button"
const NavBarTMDB = () => {
    return (
        <div className="w-auto">
            <NavBar />
        </div>
    )
}

// const Box = () => {
//     const [hidenMenu, setHidenMenu] = useState(false)
//     const { state, fetchSearch } = useContext(AuthenContext)
//     console.log(state);
//     const [IsSubmenu, setIsSubMenu] = useState("hidden")
//     const [IsTop, setIsTop] = useState("")
//     const [isCancel, setIsCanCel] = useState(false)
//     const [types, setTypes] = useState("hidden")
//     const [Film, setFilm] = useState([])
//     const [search, setSearch] = useState("hidden")
//     const AllMovie = []
//     const [isOpen, setIsOpen] = useState(false);
//     const [clickCount, setClickCount] = useState(0);
//     const handleClick = () => {
//         setClickCount((prevCount) => prevCount + 1);
//         if (clickCount % 2 === 1) {
//             setIsOpen(false);
//         } else {
//             setIsOpen(true);
//         }
//     };
//     const [listmovie, setListMovie] = useState([])
//     const navigation = useNavigate()
//     const [query, setQuery] = useState("")
//     const HandlerValue = (e) => {
//         e.preventDefault()
//         const [name, value] = e.target
//         setQuery({ ...query, [name]: value })
//     }
//     const [enchole, setEnchole] = useState(null)
//     const HandlerClick = () => {
//         setHidenMenu("block")
//     }
//     let currentPage = 1
//     const LayPhim = async () => {
//         for (let i = 1; i <= 1; i++) {
//             const response = await axios.get(`https://ophim1.com/danh-sach/phim-moi-cap-nhat?page=${i}`)
//             const newMovie = response.data.items

//         }
//     }
//     const HandlerKeyPress = (e) => {
//         if (e.key === 'Enter') {
//             SearchMovie()
//             navigation(`/search/movie/${query}`)
//         }
//     }
//     const SearchMovie = () => {
//         fetchSearch(query)
//     }
//     useEffect(() => {
//         LayPhim()
//     }, [currentPage])
//     useEffect(() => {
//         axios.get(`/_next/data/s4OlXy8jONoHVWAT5vg7b/tim-kiem.json?keyword=` + encodeURIComponent(query))
//             .then(res => {
//                 setFilm(res.data.pageProps.data.items);
//             })
//             .catch(er => {
//                 console.log(er);
//             })
//     }, [query])
//     return (
//         <div className="relative" onClick={() => { }}>

//             <nav className="flex text-white items-center justify-around font-medium">
//                 <div className="flex items-center">
//                     <img className="w-16 md:cursor-pointer" src={logo} alt="" />
//                     <Link className="text-white/80 font-bold hover:text-yellow-400" to={"/"}>SYS CMS</Link>
//                 </div>

//                     <ul className="md:flex hidden uppercase items-center gap-8 font-[Popins]">
//                         <li>
//                             <Link to={"/"} className="hover:text-yellow-400 hover:no-underline py-7 px-3 inline-block" about="">Loại Phim</Link>
//                         </li>
//                         <li>


//                             <Link to={""} className="hover:text-yellow-400 hover:no-underline flex flex-row  items-center" onClick={handleClick} about="">Thể Poại   <BiChevronDown /></Link>


//                             {
//                                 isOpen &&
//                                 <ul className="grid grid-cols-4 mt-0 bg-black/90  gap-2 absolute">
//                                     {
//                                         genres.length > 0 && genres.map((category, index) => (
//                                             <li className="" key={index}>
//                                                 <Link to={`/movie/${category.category}/${category.slug}`} className="line-clamp-1 hover:no-underline">{category.name}</Link>
//                                             </li>
//                                         ))
//                                     }
//                                 </ul>
//                             }
//                         </li>
//                         <li>
//                             <Link to={""} className="hover:text-yellow-400 hover:no-underline group relative cursor-pointer" about="">Quốc Gia</Link>
//                             {
//                                 <ul className="grid grid-cols-4 mt-0 absolute group-hover:visible">
//                                     {
//                                         Countries.length > 0 && Countries.map((countrie, index) => (
//                                             <li className="" key={index}>
//                                                 <Link to={`/movie/${countrie.slug}`} className="line-clamp-1 duration-100">{countrie.name}</Link>
//                                             </li>
//                                         ))
//                                     }
//                                 </ul>
//                             }
//                         </li>
//                         <li>
//                             <Link to={""} className="hover:text-yellow-400 hover:no-underline" about="">Tv Show</Link>
//                         </li>
//                         <li>
//                             <Link to={"/"} className="hover:text-yellow-400 hover:no-underline" about="">Sắp Chiếu</Link>
//                         </li>
//                     </ul>

//                 <div className="">
//                     {
//                         isCancel ?
//                             <AiOutlineClose
//                                 color="white"
//                                 fontFamily="bold"
//                                 size={"25px"}
//                                 onClick={() => {
//                                     setIsCanCel(false)
//                                     setTypes("hidden")
//                                     setSearch("hidden")
//                                 }} />
//                             :
//                             <BiSearch
//                                 color="white"
//                                 size={"25px"}
//                                 onClick={() => {
//                                     setIsCanCel(true)
//                                     setTypes("text")
//                                     setSearch("block")
//                                 }} />

//                     }
//                 </div>
//                 <div className="">
//                     <input type="button " className="w-20 rounded-xl bg-green-400 text-center items-center px-6 py-2 hover:bg-blue-400" value={"Login"} />
//                 </div>
//                 {/* Menu mobile */}
//                 <ul className="md:hidden block bg-white absolute w-full h-full bottom-0 text-black  z-50 py-24 pl-4">
//                     <li>
//                         <Link className="py-7 inline-block px-3" to={"/"}>
//                             Home
//                         </Link>
//                     </li>
//                     <li>
//                         <Link>Home</Link>
//                     </li>
//                     <li>
//                         <Link>Home</Link>
//                     </li>
//                 </ul>

//                 <div className="">
//                     {
//                         hidenMenu ?
//                             <AiOutlineClose
//                                 color="white"
//                                 size={"30px"}
//                                 onClick={() => {
//                                     setHidenMenu(false)
//                                     setIsTop("top-[-400%]")
//                                 }} />

//                             :
//                             <BiMenuAltLeft
//                                 color="white"
//                                 size={"30px"}
//                                 onClick={() => {
//                                     setHidenMenu(true)
//                                     setIsTop("top-[110%]")
//                                 }}
//                             />
//                     }
//                 </div>
//             </nav>
//             <div className="">
//                 <input type={`text`} onKeyPress={HandlerKeyPress} className={`form-control rounded-lg w-full mx-auto ${types}`} placeholder="Vui lòng nhập tên phi cần tìm kiếm" name="query" value={query} onChange={(e) => { setQuery(e.target.value) }} id="" />

//             </div>
//             <div className={` bg-black/90 text-white z-10 w-9/12 flex flex-col h-[300px] overflow-y-auto justify-between mx-auto ${search}`}>
//                 <p className="">Top phim hay</p>
//                 {
//                     Film.length > 0 && Film.map((item, idx) => {
//                         return (
//                             <div key={idx} className="border-b-2 uppercase">
//                                 <Link to={`/movie/detail-movie/${item.slug}`} className="flex items-center hover:no-underline justify-between" onClick={() => {
//                                     setSearch("hidden")
//                                 }} >
//                                     <div className="flex flex-row items-center gap-2 my-2">
//                                         <img className="w-16 bg-cover bg-no-repeat object-cover h-auto" src={`https://img.ophim9.cc/uploads/movies/${item.thumb_url}`} alt="" />
//                                         <div className="">
//                                             <p>{item.name}</p>
//                                         </div>
//                                     </div>
//                                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
//                                         <path d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
//                                     </svg>

//                                 </Link>
//                             </div>
//                         )
//                     })
//                 }
//             </div>

//         </div>
//     )
// }
const NavBar = () => {
    const [displayBgColor, setDisplayBgColor] = useState(false)

    useEffect(() => {
        function checkPositionHandler() {
            if (window.scrollY == 0) setDisplayBgColor(false);
            else setDisplayBgColor(true);
        }
        checkPositionHandler();
        window.addEventListener('scroll', checkPositionHandler);
        return () => window.removeEventListener('scroll', checkPositionHandler);
    }, []);
    const { open, setOpen } = useContext(AuthenContext)
    const [hidenMenu, setHidenMenu] = useState(false)
    const { state, fetchSearch } = useContext(AuthenContext)
    console.log(state);
    const [IsSubmenu, setIsSubMenu] = useState("hidden")
    const [IsTop, setIsTop] = useState("")
    const [isCancel, setIsCanCel] = useState(false)
    const [types, setTypes] = useState("hidden")
    const [Film, setFilm] = useState([])
    const [search, setSearch] = useState("hidden")
    const AllMovie = []
    const [isOpen, setIsOpen] = useState(false);
    const [clickCount, setClickCount] = useState(0);
    const handleClick = () => {
        setClickCount((prevCount) => prevCount + 1);
        if (clickCount % 2 === 1) {
            setIsOpen(false);
        } else {
            setIsOpen(true);
        }
    };
    const [listmovie, setListMovie] = useState([])
    const navigation = useNavigate()
    const [query, setQuery] = useState("")
    const HandlerValue = (e) => {
        e.preventDefault()
        const [name, value] = e.target
        setQuery({ ...query, [name]: value })
    }
    const [enchole, setEnchole] = useState(null)
    const HandlerClick = () => {
        setHidenMenu("block")
    }
    let currentPage = 1
    const LayPhim = async () => {
        for (let i = 1; i <= 1; i++) {
            const response = await axios.get(`https://ophim1.com/danh-sach/phim-moi-cap-nhat?page=${i}`)
            const newMovie = response.data.items

        }
    }
    const HandlerKeyPress = (e) => {
        if (e.key === 'Enter') {
            SearchMovie()
            navigation(`/search/movie/${query}`)
        }
    }
    const SearchMovie = () => {
        fetchSearch(query)
    }
    useEffect(() => {
        LayPhim()
    }, [currentPage])
    useEffect(() => {
        axios.get(`/_next/data/s4OlXy8jONoHVWAT5vg7b/tim-kiem.json?keyword=` + encodeURIComponent(query))
            .then(res => {
                setFilm(res.data.pageProps.data.items);
            })
            .catch(er => {
                console.log(er);
            })
    }, [query])
    {
        return (
            <nav className={`${displayBgColor ? 'bg-black/90' : 'bg-black'} md:py-3 md:fixed md:top-0 md:inset-x-0 md:z-40 md:duration-300  text-white`}>
                <div className=" flex items-center justify-around font-medium h-[50px]">
                    <div className="flex justify-between z-50  md:w-auto w-full items-center">
                        <Link to={"/movie/homepage"} className="flex justify-between hover:no-underline items-center">
                            <img className="h-9 md:cursor-pointer" src={logo} alt="" />
                            <p>SYS CMS</p>
                        </Link>
                        <div className="text-3xl md:hidden" onClick={() => { setOpen(!open) }}>
                            <ion-icon name={`${open ? 'close' : 'menu'}`}></ion-icon>
                        </div>
                    </div>
                    <ul className="md:flex hidden uppercase items-center gap-8 font-[Poppins]">
                        <li>
                            <Link to={"/movie/homepage"} className="py-7 hover:no-underline px-3 inline-block">Home</Link>
                        </li>
                        <NavLink />
                    </ul>
                    <div className="z-50">


                        {
                            isCancel ?
                                <AiOutlineClose
                                    color="white"
                                    fontFamily="bold"
                                    size={"25px"}
                                    onClick={() => {
                                        setIsCanCel(false)
                                        setTypes("hidden")
                                        setSearch("hidden")
                                    }} />
                                :
                                <BiSearch
                                    color="white"
                                    size={"25px"}
                                    onClick={() => {
                                        setIsCanCel(true)
                                        setTypes("text")
                                        setSearch("block")
                                    }} />

                        }
                    </div>
                    <div className="md:block hidden">
                        <Button />

                    </div>

                    {/* Thêm menu cho mobile */}
                    <ul className={` overflow-y-auto
                    md:hidden absolute bg-black w-full h-full pl-4 z-20 bottom-0
                    py-24 duration-500 ${open ? 'left-0' : 'left-[-100%]'}
                    `}>
                        <li>
                            <Link to={"/movie/homepage"} className="py-7 px-3 inline-block">Home</Link>
                        </li>
                        <NavLink />
                        <div className="py-5">
                            <Button />
                        </div>
                    </ul>

                </div>
                <div className="z-auto">
                    <input type={`text`} onKeyPress={HandlerKeyPress} className={`form-control rounded-lg w-full mx-auto ${types}`} placeholder="Vui lòng nhập tên phi cần tìm kiếm" name="query" value={query} onChange={(e) => { setQuery(e.target.value) }} id="" />

                </div>
                <div className={` bg-black/90 text-white z-50 w-9/12 flex flex-col h-[300px] overflow-y-auto justify-between mx-auto ${search}`}>
                    <p className="">Top phim hay</p>
                    {
                        Film.length > 0 && Film.map((item, idx) => {
                            return (
                                <div key={idx} className="border-b-2 uppercase">
                                    <Link to={`/movie/detail-movie/${item.slug}`} className="flex items-center hover:no-underline justify-between" onClick={() => {
                                        setSearch("hidden")
                                    }} >
                                        <div className="flex flex-row items-center gap-2 my-2">
                                            <img className="w-16 bg-cover bg-no-repeat object-cover h-auto" src={`https://img.ophim9.cc/uploads/movies/${item.thumb_url}`} alt="" />
                                            <div className="">
                                                <p>{item.name}</p>
                                            </div>
                                        </div>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                                            <path d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                        </svg>

                                    </Link>
                                </div>
                            )
                        })
                    }
                </div>
            </nav >
        )
    }
}

export default NavBarTMDB