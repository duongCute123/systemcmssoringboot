import { Link } from "react-router-dom"
import { useContext, useEffect, useState } from "react"
import { AuthenContext } from "../context/AuthenContext"
import axios from "axios"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import './styles.css';
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Navigation, Autoplay } from 'swiper/modules';
import { BsFillPlayFill } from "react-icons/bs"
import { BiTime, BiCaptions } from "react-icons/bi"
const Carousel = () => {
    const [Film, setFilm] = useState([])
    let currentPage = 1
    let totalPages = 1014
    const LayPhim = async () => {

        await axios.get(`https://ophim1.com/danh-sach/phim-moi-cap-nhat?page=${currentPage}`)
            .then(res => {
                setFilm(res.data.items)
                currentPage++

            })
            .catch(err => {
                console.log(err);
            })

    }
    useEffect(() => {
        LayPhim()
    }, [currentPage])
    return (

        <Swiper autoplay={{ delay: 4000 }} modules={[Navigation, Autoplay]} className="mySwiper">
            {
                Film.length > 0 && Film.map((list,idx) => (

                    <SwiperSlide key={idx}>
                        <div className="bg-cover bg-no-repeat w-full object-cover min-h-screen relative bg-center max-h-[650px] lg:min-h-0 lg:aspect-video bg-black " style={{
                            backgroundImage: `url('https://img.ophim9.cc/uploads/movies/${list.poster_url}')`
                        }}>
                            <div className="absolute inset-0 bg-black/80 md:bg-black/90 flex items-center">
                                <div className="flex w-full max-w-7xl mx-auto gap-8 items-center justify-between">
                                    <div className="flex mx-5 flex-col gap-2">
                                        <h1 className="text-white font-bold flex flex-row text-4xl lg:text-5xl hover:text-yellow-400">{list.origin_name}</h1>
                                        <p className="flex flex-row text-white">{list.name}</p>
                                        <div className="mt-5">
                                            <DetaiFil slug={list.slug} />
                                        </div>
                                        <Link to={`/movie/detail-movie/${list.slug}`} className="flex no-underline hover:no-underline flex-row my-2 text-white w-32 h-10 text-center items-center justify-center hover:bg-yellow-500 border-solid border-2 border-red-700 rounded-xl">
                                            <BsFillPlayFill color="white" /> Xem Ngay
                                        </Link>
                                    </div>
                                    <div className="md:block mr-1 rounded-3xl overflow-hidden hidden w-full h-full items-center max-w-[320px] aspect-[2/3] bg-stone-900">
                                        <img className="object-cover  bg-no-repeat bg-cover w-full h-full" width={"320px"} height={"480px"} src={`https://img.ophim9.cc/uploads/movies/${list.thumb_url}`} alt="" />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </SwiperSlide>

                ))
            }
        </Swiper>


    )
}
const DetaiFil = ({ slug }) => {
    const [detailFil, setDetailFil] = useState([])
    useEffect(() => {
        axios.get(`https://ophim1.com/phim/${slug}`)
            .then(res => {
                setDetailFil(res.data.movie)
            })
            .catch(err => {
                console.log(err);
            })
    }, [slug])
    return (
        <div className="flex flex-row w-full  mx-auto items-center gap-2">
            <p className="flex flex-row justify-center bg-gray-700 gap-2 text-white border w-10 text-center items-center">{detailFil.quality}</p>
            <ul className="flex flex-row gap-2 text-sm text-white">{
                detailFil.category !== undefined && detailFil.category.map((it, idx) => (
                    <p className="" key={idx}>{it.name}</p>
                ))
            }</ul>

            <p className="flex items-center gap-1 text-white"><BiTime color="yellow" />{detailFil.time}</p>
            <p className="flex items-center gap-1 text-white"> <BiCaptions color="yellow" />{detailFil.lang}</p>

        </div>
    )
}
export default Carousel