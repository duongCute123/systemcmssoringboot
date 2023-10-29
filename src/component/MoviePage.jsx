import axios from 'axios';
import React, { useState, useEffect, useContext } from 'react';
import ReactPaginate from 'react-paginate';
import { Link } from 'react-router-dom';
import { AuthenContext } from '../context/AuthenContext';
import NavBarTMDB from './NavBar';
import Carousel from './Carousel';
import Footer from './Footer';
function MovieList() {
    const [limited, setLimited] = useState(8)
    const [movies, setMovies] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0); // Thêm state mới
    const [itemsPerPage, setItemsPerPage] = useState(0)
    const { setFilm } = useContext(AuthenContext)
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

    const handlePageChange = (selectedPage) => {
        setCurrentPage(selectedPage.selected);
    };
    return (
        <div className='bg-black/80 overflow-y-auto'>
            <NavBarTMDB />
            <Carousel />
            <div className='w-11/12 mx-auto justify-center'>

                <div className=" flex items-center text-center my-3 mx-7">
                    <h1 className="font-bold text-black text-xl">Trending</h1>
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
                <div className=''>
                    <p className='font-bold text-white my-2 hover:text-yellow-400 text-3xl'>Danh sách phim</p>
                </div>

                <div className='grid grid-cols-2 xl:grid-cols-4 w-full gap-2 md:gap-4 text-white h-auto  mx-auto lg:grid-cols-3 md:grid-cols-4 sm:grid-cols-2'>
                    {
                        movies.slice(0, limited).map((movie, index) => {
                            return (
                                <div className='flex  mx-auto flex-col  rounded-xl' key={index}>
                                    <Link to={`/movie/detail-movie/${movie.slug}`}>
                                        <img className='lg:w-[350px] lg:h-[400px] rounded-xl object-fill bg-cover bg-no-repeat' src={`https://img.ophim9.cc/uploads/movies/${movie.thumb_url}`} alt="" />
                                    </Link>
                                    <h1 className=' font-semibold text-xl line-clamp-1'>{movie.name}</h1>
                                    <h1 className=' text-gray-600 line-clamp-1'>{movie.origin_name}</h1>
                                    <div className='flex justify-between'>
                                        <p className='w-3/4 '>{movie.year}</p>
                                        <div className='flex'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                                                <path d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                            </svg>
                                            <p className='mx-2'>100</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
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