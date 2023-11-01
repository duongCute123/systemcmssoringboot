import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom"
import { BsFillPlayFill, BsYoutube } from "react-icons/bs"
import { GiRoyalLove } from "react-icons/gi"
import { IoArrowRedoSharp } from "react-icons/io5"
import { AuthenContext } from "../../context/AuthenContext";
import NavBarTMDB from "../Menu/NavBar";
import ModalSocial from "../ModalSocial/ModalSocial";

const DetailMoviePage = () => {
    const { slug } = useParams()
    const { state, dispatch } = useContext(AuthenContext)
    const MovieFavourite = state
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
    const navigation=useNavigate()
    useEffect(() => {
        LayPhim()
    }, [slug])
    useEffect(() => {
        listTap.map((tap) => {
            setTap(tap.server_data)
        })
    }, [listTap])
    const [showModal, setShowModal] = useState(false)
    const HandlerCloseModal = () => {
        setShowModal(false)
    }
    const AddFavouriteMovie = () => {
        dispatch({ type: 'ADD_MOVIE_FAVOURITE', payload: detailMovie })
    }
    return (
        <div className={`text-gray-400 min-h-screen flex flex-col relative`}>
            <NavBarTMDB />
            <div className={`w-full relative  lg:max-h-[800px] lg:min-h-0  bg-cover  object-cover bg-center lg:aspect-video bg-black`} style={{ backgroundImage: `url('${detailMovie.poster_url}')` }} >
                <div className="lg:absolute px-4 pb-10 pt-24  inset-0 bg-black/90 md:bg-black/80 flex items-center">
                    <div className="md:grid  md:grid-rows-3 md:grid-flow-col md:gap-4 flex flex-col justify-between   bg-cover  object-cover bg-center w-full  max-w-7xl mx-auto items-center">
                        <div className="flex flex-col mx-auto text-center gap-2  items-center row-span-3 ">
                            <img className="rounded-xl" height={"350px"} width={"300px"} src={detailMovie.thumb_url} alt="" />
                            <Link to={`/movie/watch-movie/${slug}/tap/${tap || '01' || 'Full'}`} className="flex flex-row w-[150px] hover:no-underline h-auto border-solid border-2 border-red-600 hover:bg-yellow-500 rounded-2xl gap-2 justify-center items-center">
                                <BsFillPlayFill color="white" />
                                <input type="button" value="Xem Phim" className=" h-7 rounded-2xl text-white  my-2 items-center text-center flex justify-center" />
                            </Link>
                        </div>
                        <div className="row-span-3 col-span-3">
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
                                <div className="block">
                                    <p className="flex font-bold hover:text-yellow-400">Quốc Gia: {countrys.map((qg, idx) => (
                                        <p key={idx} className="font-bold hover:text-yellow-400">{qg.name}</p>
                                    ))}</p>
                                    <p className="font-bold text-lg md:text-xl hover:text-yellow-500">Đạo diễn: Chưa có</p>
                                    <p className="font-bold text-lg md:text-xl hover:text-yellow-500">Thời lượng: {detailMovie.time}</p>
                                    <p className="font-bold text-lg md:text-xl hover:text-yellow-500">Lượt xem: {detailMovie.view}</p>
                                </div>
                            </div>
                            <div className="flex bg-black/90 opacity-80 inset-0 mt-10 h-16 md:w-[450px] items-center justify-center text-center gap-4 flex-row">
                                <div className="flex border-r-2 pr-3 flex-col hover:text-yellow-400 items-center justify-center">
                                    <IoArrowRedoSharp className="hover:text-yellow-400" color="white" />
                                    <p className="font-bold hover:text-yellow-400 text-lg text-white" onClick={() => { setShowModal(true) }}>Share</p>
                                </div>
                                <div className="flex items-center flex-row justify-center gap-4">
                                    <div className="flex flex-row justify-center items-center text-center gap-1">
                                        <BsYoutube color="white" />
                                        <p className="font-bold text-lg text-white">Trailer</p>
                                    </div>
                                    <div className="flex border-2 border-solid border-red-500 h-[45px] rounded-xl bg-yellow-400 w-[150px] flex-row items-center justify-center gap-2">
                                        <GiRoyalLove color="white" />
                                        {/* Lỗi vẫn chưa thêm vào đc nè
                                        onClick={AddFavouriteMovie({ movie:detailMovie})} */}
                                        <p className="font-bold text-lg text-white" onClick={AddFavouriteMovie} >Yêu Thích</p>
                                    </div>
                                    <button onClick={()=>{navigation("/movie/phim-yeu-thich")}}>Phim yêu thích</button>
                                </div>
                            </div>
                            <ModalSocial closed={HandlerCloseModal} visible={showModal} />
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
                                <div key={index}>
                                    <Link to={`/movie/watch-movie/${slug}/tap/${items.name}`} className="" >

                                        <input className="w-[70px] bg-slate-400  hover:bg-yellow-500 text-white border rounded-lg gap-4 m-2" type="button" value={items.name} />
                                    </Link>
                                </div>
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