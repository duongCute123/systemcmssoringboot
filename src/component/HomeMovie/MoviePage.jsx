import axios from 'axios';
import React, { useState, useEffect, useContext } from 'react';
import ReactPaginate from 'react-paginate';
import { Link } from 'react-router-dom';
import { AuthenContext } from '../../context/AuthenContext';
import NavBarTMDB from '../Menu/NavBar';
import { BiChevronRight, BiTimeFive } from "react-icons/bi"
import Carousel from '../Carousel/Carousel';
import { MdOutlineFavorite } from "react-icons/md"
import Footer from '../Footer/Footer';
import { DOMAIN } from '../../domain/domain';
import useFetch from '../../hook/useFetch';
import { genres } from '../../types';
function MovieList() {
    const [limited, setLimited] = useState(8)
    const [movies, setMovies] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0); // Thêm state mới
    const [itemsPerPage, setItemsPerPage] = useState(0)
    const { setFilm, state, dispatch } = useContext(AuthenContext)
    useEffect(() => {
        axios.get(`https://ophim1.com/danh-sach/phim-moi-cap-nhat?page=${currentPage}`)
            .then(res => {
                setMovies(res.data.items)
                setTotalPages(res.data.pagination.totalPages);
                setItemsPerPage(res.data.totalItemsPerPage)
                setFilm(res.data.items)
                setLimited(8)

            })
            .catch(err => {
                console.log(err);
            })
    }, [currentPage]);
    const url = `https://cors-anywhere.herokuapp.com/https://ophim9.cc/_next/data/s4OlXy8jONoHVWAT5vg7b/danh-sach/hoat-hinh.json?slug=hoat-hinh`
    const data = useFetch(url)
    const urls = `https://cors-anywhere.herokuapp.com/https://ophim9.cc/_next/data/s4OlXy8jONoHVWAT5vg7b/the-loai/phim-18.json?page=2&slug=phim-18`
    const datas = useFetch(urls)
    const handlePageChange = (selectedPage) => {
        setCurrentPage(selectedPage.selected);
    };
    const AddFavouriteMovie = (detailMovie) => {
        dispatch({ type: 'ADD_MOVIE_FAVOURITE', payload: detailMovie })
    }
    return (
        <div className='bg-black/80 overflow-y-auto'>
            <NavBarTMDB />
            <Carousel />
            <div className='w-11/12 mx-auto justify-center'>

                <div className=" flex items-center text-center my-3 mx-7">
                    <h1 className="font-bold  text-xl text-white">Trending</h1>
                </div>
                <div className="flex gap-3 flex-row overflow-x-auto w-full h-auto">
                    {
                        movies.map((movie, idx) => {
                            return (
                                <div className="w-full" key={idx}>
                                    <div className="w-[150px] h-[225px]">
                                        <img className="rounded-xl" src={`https://img.ophim9.cc/uploads/movies/${movie.thumb_url}`} alt="" />
                                    </div>
                                    <p className="font-bold text-white ">{movie.name}</p>
                                </div>
                            )
                        })
                    }
                </div>
                <div className='my-4'>
                    <p className='font-bold text-white my-2 hover:text-yellow-400 text-3xl'>Danh sách phim</p>
                </div>

                <div className='grid grid-cols-2 xl:grid-cols-4 w-full gap-2 md:gap-4 text-white h-auto  mx-auto lg:grid-cols-3 md:grid-cols-4 sm:grid-cols-2'>
                    {
                        movies.slice(0, limited).map((movie, index) => {
                            return (
                                <div className='flex  mx-auto flex-col  rounded-xl' key={index}>
                                    <Link to={`/movie/detail-movie/${movie.slug}`}>
                                        <img className='lg:w-[350px] aspect-[2/3] lg:h-[400px] rounded-xl object-fill bg-cover bg-no-repeat' src={`https://img.ophim9.cc/uploads/movies/${movie.thumb_url}`} alt="" />
                                    </Link>
                                    <h1 className=' font-semibold text-xl line-clamp-1'>{movie.name}</h1>
                                    <div className='flex justify-between items-center'>
                                        <h1 className=' text-gray-600 line-clamp-1'>{movie.origin_name}</h1>
                                        <h1>{movie.year}</h1>
                                    </div>
                                    <div className='flex justify-between'>
                                        <div className="flex gap-2">
                                            <p className="text-yellow-400 font-bold">
                                                {movie.quality}
                                            </p>
                                            <p className="border line-clamp-1 font-bold text-sm h-auto hidden md:block hover:bg-yellow-300 bg-gray-400  border-solid items-center text-center">
                                                {movie.lang}
                                            </p>
                                        </div>
                                        <div className="flex flex-row items-center justify-center gap-1">
                                            <MdOutlineFavorite onClick={() => AddFavouriteMovie(movie)} color='yellow' />      <BiTimeFive color="yellow" /> {movie.time}
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className='my-5'>
                    <p className='font-bold text-white my-2 hover:text-yellow-400 text-3xl'>Anime</p>
                </div>

                <div className='grid grid-cols-2 xl:grid-cols-4 w-full gap-2 md:gap-4 text-white h-auto  mx-auto lg:grid-cols-3 md:grid-cols-4 sm:grid-cols-2'>
                    {
                        data && data.items && data.items.slice(0, limited).map((movie, index) => {
                            return (
                                <div className='flex  mx-auto flex-col  rounded-xl' key={index}>
                                    <Link to={`/movie/detail-movie/${movie.slug}`}>
                                        <img className='lg:w-[350px] aspect-[2/3] lg:h-[400px] rounded-xl object-fill bg-cover bg-no-repeat' src={`https://img.ophim9.cc/uploads/movies/${movie.thumb_url}`} alt="" />
                                    </Link>
                                    <h1 className=' font-semibold text-xl line-clamp-1'>{movie.name}</h1>
                                    <div className='flex justify-between items-center'>
                                        <h1 className=' text-gray-600 line-clamp-1'>{movie.origin_name}</h1>
                                        <h1>{movie.year}</h1>
                                    </div>
                                    <div className='flex justify-between'>
                                        <div className="flex gap-2">
                                            <p className="text-yellow-400 font-bold">
                                                {movie.quality}
                                            </p>
                                            <p className="border line-clamp-1 font-bold text-sm h-auto hidden md:block hover:bg-yellow-300 bg-gray-400  border-solid items-center text-center">
                                                {movie.lang}
                                            </p>
                                        </div>
                                        <div className="flex flex-row items-center justify-center gap-1">
                                            <MdOutlineFavorite onClick={() => AddFavouriteMovie(movie)} color='yellow' />   <BiTimeFive color="yellow" /> {movie.time}
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className=' flex flex-row items-center text-center justify-center mt-5'>
                    <Link to={"/movie/movie_type/hoat-hinh"} className='font-bold text-xl border-2 border-red-600 border-solid text-white hover:no-underline w-[180px] h-9 items-center text-center justify-center flex hover:bg-yellow-400'>Xem Tất Cả <BiChevronRight color="white" size={"25px"} /></Link>
                </div>
                <div className='my-5'>
                    <p className='font-bold text-white my-2 hover:text-yellow-400 text-3xl'>Phim 18+</p>
                </div>

                <div className='grid grid-cols-2 xl:grid-cols-4 w-full gap-2 md:gap-4 text-white h-auto  mx-auto lg:grid-cols-3 md:grid-cols-4 sm:grid-cols-2'>
                    {
                        datas && datas.items && datas.items.slice(0, limited).map((movie, index) => {
                            return (
                                <div className='flex  mx-auto flex-col  rounded-xl' key={index}>
                                    <Link to={`/movie/detail-movie/${movie.slug}`}>
                                        <img className='lg:w-[350px] aspect-[2/3] lg:h-[400px] rounded-xl object-fill bg-cover bg-no-repeat' src={`https://img.ophim9.cc/uploads/movies/${movie.thumb_url}`} alt="" />
                                    </Link>
                                    <h1 className=' font-semibold text-xl line-clamp-1'>{movie.name}</h1>
                                    <div className='flex justify-between items-center'>
                                        <h1 className=' text-gray-600 line-clamp-1'>{movie.origin_name}</h1>
                                        <h1>{movie.year}</h1>
                                    </div>
                                    <div className='flex justify-between'>
                                        <div className="flex gap-2">
                                            <p className="text-yellow-400 font-bold">
                                                {movie.quality}
                                            </p>
                                            <p className="border line-clamp-1 font-bold text-sm h-auto hidden md:block hover:bg-yellow-300 bg-gray-400  border-solid items-center text-center">
                                                {movie.lang}
                                            </p>
                                        </div>
                                        <div className="flex flex-row items-center justify-center gap-1">
                                            <MdOutlineFavorite onClick={() => AddFavouriteMovie(movie)} color='yellow' /> <BiTimeFive color="yellow" /> {movie.time}
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <div className=' flex flex-row items-center text-center justify-center mt-5'>
                    <Link to={`/movie/${genres[genres.length - 1].category}/${genres[genres.length - 1].slug}`} className='font-bold text-xl border-2 border-red-600 border-solid text-white hover:no-underline w-[180px] h-9 items-center text-center justify-center flex hover:bg-yellow-400'>Xem Tất Cả <BiChevronRight color="white" size={"25px"} /></Link>
                </div>
                {/* <div className=''>
                    <ReactPaginate className='bg-white flex absolute right-10 text-2xl tracking-widest border mt-3 mb-3 border-sky-500'
                        pageCount={totalPages} // Tổng số trang
                        pageRangeDisplayed={5} // Số lượng nút phân trang hiển thị
                        marginPagesDisplayed={2} // Số lượng nút phân trang hiển thị ở hai đầu
                        onPageChange={handlePageChange} // Xử lý sự kiện khi người dùng chuyển trang
                        containerClassName="pagination"
                        activeClassName="active"
                    />
                </div> */}
            </div>
            <Footer />
        </div>

    );
}
export default MovieList