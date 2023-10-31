import { useContext } from "react"
import { AuthenContext } from "../../context/AuthenContext"
import { useParams } from "react-router-dom"
import { useState } from "react"
import { useEffect } from "react"
import { Link } from "react-router-dom"
import { BsServer } from "react-icons/bs"
import axios from "axios"
import NavBarTMDB from "../Menu/NavBar"
const WatchMovie = () => {
    const { slug } = useParams()
    const { name } = useParams()
    const [selectItem, setSelctItem] = useState()
    const [detailMovie, setDetailMovie] = useState([])
    const [dienvien, setDienVien] = useState([])
    const [listTap, setListTap] = useState([])
    const [countrys, setCountry] = useState([])
    const [theloai, setTheLoai] = useState([])
    const [tapPhim, setTapPhim] = useState()
    const [selectedEpisode, setSelectedEpisode] = useState(null);
    const [taps, setTap] = useState([])
    const { setFilm, setInfoMovie } = useContext(AuthenContext)
    const [tap, setTaps] = useState()
    const [imgeBackGround, setImageBackGround] = useState()
    const theotap = taps.find((ep) => ep.name === name)
    const HandleValue = (e) => {
        const { name, value } = e.target
        setTaps({ ...tap, [name]: value })
        setSelctItem("bg-yellow-400")
    }
    const handleEpisodeClick = (episode) => {
        setSelectedEpisode(episode.selected);
        setSelctItem("bg-yellow-400")
    };
    const LayPhim = async () => {
        await axios.get(`https://ophim1.com/phim/${slug}`)
            .then(res => {
                setDetailMovie(res.data.movie)
                setImageBackGround(res.data.movie.thumb_url)
                setDienVien(res.data.movie.actor)
                setTheLoai(res.data.movie.category)
                setCountry(res.data.movie.country)
                setListTap(res.data.episodes)
                setInfoMovie(res.data.movie)
                setTapPhim(res.data.episodes)
            })
            .catch(err => {
                console.log(err);
            })
    }
    useEffect(() => {
        LayPhim()
    }, [slug])
    useEffect(() => {
        listTap.map((tap) => {
            setTap(tap.server_data)
        })

    }, [listTap])
    console.log(theotap);
    return (
        <div className="bg-black/70 min-h-screen">
            <NavBarTMDB />
            <h1 className="my-3 mx-3 text-white lg:mt-20 hover:text-yellow-500  text-2xl uppercase font-bold">CMS - Phim bộ - {detailMovie.name}</h1>
            <div className="flex flex-col items-center ">
                {
                    theotap != undefined && (
                        <iframe
                            src={`${theotap.link_embed}`}
                            title="Embedded Video"
                            width="97%"
                            className="lg:h-[550px] xl:h-[600px] md:h-[550px] h-[300px]"
                            frameBorder="0"
                            allowFullScreen
                        ></iframe>
                    )
                }
            </div>
            <div className="flex text-white gap-2 flex-row border border-r-2 h-14 items-center">
                <BsServer color="" />
                <p className="font-bold">Chọn Server</p>
                <input type="button" className="ml-4 border hover:bg-yellow-400 border-r-0 w-16 rounded-lg" value="S.PRO" />
                <input type="button" className="ml-2 border hover:bg-yellow-500 border-r-0 w-16 rounded-lg" value="H.PRO" />
            </div>
            <div className="my-3">
                <h1 className=" font-bold mx-3 text-white text-2xl">Danh sách tập phim</h1>
                <div className="flex flex-wrap">
                    {
                        taps.map((items, index) => {
                            return (
                                <div className="" key={index}>
                                    <Link to={`/movie/watch-movie/${slug}/tap/${items.name}`} onClick={handleEpisodeClick} className={` ${theotap.name === items.name ? 'bg-yellow-400' : ''} mx-3 rounded-lg border-solid border-2 hover:no-underline font-bold text-white border-red-500 w-16  hover:bg-yellow-400`}>
                                        <input className={`  w-[50px] mt-2`} type="button" onChange={HandleValue} value={items.name} />

                                    </Link>
                                </div>
                            )
                        })
                    }
                </div>
                {/* <div>
                    {
                        tapPhim && tapPhim.map((item) => (
                            
                                item.server_data.map((list) => {
                                    return (
                                        <div>
                                            <p>{list.link_embed}</p>
                                        </div>
                                    )
                                })
                            
                        ))
                    }
                </div> */}
            </div>
            <div className="">
                <h1 className="font-bold text-white text-2xl my-2">Thông tin chi tiết phim </h1>
                <ContentComponent content={detailMovie.content} />
            </div>
        </div>
    )
}
function ContentComponent({ content }) {
    let contentWithoutPTag = "";

    if (content) {
        contentWithoutPTag = content.replace(/<\/?p>/g, ""); // Loại bỏ thẻ <p> và </p>
    }

    return <div className="indent-10 text-gray-400">{contentWithoutPTag}</div>;
}
export default WatchMovie