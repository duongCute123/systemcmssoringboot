import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import { BsFillPlayFill } from "react-icons/bs"
import { AuthenContext } from "../../context/AuthenContext";
import NavBarTMDB from "../Menu/NavBar";

const DetailMoviePage = () => {
    const { slug } = useParams()
    const [detailMovie, setDetailMovie] = useState([])
    const [dienvien, setDienVien] = useState([])
    const [listTap, setListTap] = useState([])
    const [countrys, setCountry] = useState([])
    const [theloai, setTheLoai] = useState([])
    const [taps, setTap] = useState([])
    const { setInfoMovie } = useContext(AuthenContext)
    const [tapPhim, setTapPhim] = useState()
    const tap = 1 || "Full"
    const [imgeBackGround, setImageBackGround] = useState()
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
    return (
        <div className={`text-gray-400 h-full min-h-full flex flex-col relative`}>
            <NavBarTMDB />
            <div className={`xl:grid xl:grid-rows-3 h-full  xl:grid-flow-col xl:gap-4 lg:grid lg:grid-rows-3 lg:grid-flow-col lg:gap-4 md:grid md:grid-rows-3 md:grid-flow-col md:gap-4 sm:flex sm:flex-col sm:justify-between sm:items-center w-full relative min-h-screen max-h-[800px] lg:min-h-0  bg-cover  object-cover bg-center lg:aspect-video bg-black`} style={{ backgroundImage: `url('${detailMovie.poster_url}')` }} >
                <div className="absolute inset-0 bg-black/90 md:bg-black/80 flex items-center">
                    <div className="xl:grid xl:grid-rows-3 xl:grid-flow-col xl:gap-4 lg:grid lg:grid-rows-3 lg:grid-flow-col lg:gap-4 md:grid md:grid-rows-3 md:grid-flow-col md:gap-4 sm:flex sm:flex-col sm:justify-between sm:items-center   bg-cover  object-cover bg-center w-full  max-w-7xl mx-auto items-center">
                        <div className="flex flex-col justify-center items-center row-span-3 ">
                            <img className="rounded-xl  my-3 mx-4" height={"450px"} width={"300px"} src={detailMovie.thumb_url} alt="" />
                            <Link to={`/movie/watch-movie/${slug}/tap/${tap}`} className="flex flex-row w-[150px] hover:no-underline h-auto border-solid border-2 border-red-600 hover:bg-yellow-500 rounded-2xl gap-2 justify-center items-center">
                                <BsFillPlayFill color="white" />
                                <input type="button" value="Xem Phim" className=" h-7 rounded-2xl text-white  my-2 items-center text-center flex justify-center" />
                            </Link>
                        </div>
                        <div className="row-span-3 ml-4  col-span-3">
                            <h1 className="text-3xl text-blue-600 mt-2 font-semibold uppercase">{detailMovie.name}</h1>
                            <div className="flex gap-3">
                                <p className="text-amber-600">{detailMovie.origin_name}</p>
                                <p>{detailMovie.year}</p>
                            </div>
                            <div className="md:grid-cols-2 grid grid-cols-1  text-white text-lg">
                                <div className="">
                                    <p className="font-bold text-lg md:text-xl hover:text-yellow-400">Trạng thái: {detailMovie.episode_current}</p>
                                    <p className="font-bold text-lg md:text-xl hover:text-yellow-500">Sắp chiếu: {detailMovie.episode_total}</p>
                                    <p className="flex-wrap line-clamp-1 font-bold text-lg md:text-xl hover:text-yellow-400">Diễn Viên :{dienvien},</p>
                                    <p className="flex flex-row  font-bold text-lg md:text-xl hover:text-yellow-400">Thể loại: {theloai.map((item) => (
                                        <p className=""> {item.name},</p>
                                    ))}</p>
                                </div>
                                <div className="hidden md:block">
                                    <p className="flex">Quốc Gia: {countrys.map((qg, idx) => (
                                        <p key={idx}>{qg.name}</p>
                                    ))}</p>
                                    <p className="font-bold text-lg md:text-xl hover:text-yellow-500">Đạo diễn: Chưa có</p>
                                    <p className="font-bold text-lg md:text-xl hover:text-yellow-500">Thời lượng: {detailMovie.time}</p>
                                    <p className="font-bold text-lg md:text-xl hover:text-yellow-500">Lượt xem: {detailMovie.view}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className="mt-4">
                <h1 className="mx-2 font-semibold text-2xl uppercase text-white">Danh sách tập phim</h1>
                <div className="flex mx-2 flex-wrap">
                    {
                        taps.map((items, index) => {
                            return (
                                <Link to={`/movie/watch-movie/${slug}/tap/${items.name}`} className="" key={index}>

                                    <input className="w-[70px] bg-slate-400  hover:bg-yellow-500 text-white border rounded-lg gap-4 m-2" type="button" value={items.name} />
                                </Link>
                            )
                        })
                    }
                </div>
            </div>
            <div className="">
                <h1 className="mx-2 font-semibold text-2xl uppercase text-white">Thông tin phim</h1>

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

    return <div className="indent-10">{contentWithoutPTag}</div>;
}
export default DetailMoviePage