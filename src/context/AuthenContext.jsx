import { createContext, useReducer } from "react";
import { useState } from "react";
import axios from "axios"
import { DOMAIN } from "../domain/domain";
const AuthenContext = createContext();
const initialState = {
    MovieTimKiem: [],
    MovieCategory: [],
    MovieFavourite: []
}
const reducer = (state, action) => {
    switch (action.type) {
        case 'SEARCH_SUCCESS':
            return {
                ...state, MovieTimKiem: action.payload
            }
            break;
        case 'GET_CATEGORY_MOVIE':
            return {
                ...state, MovieCategory: action.payload
            }
            break
        case "ADD_MOVIE_FAVOURITE":
            let movie = {
                id: action.payload._id,
                name: action.payload.name,
                slug: action.payload.slug,
                origin_name: action.payload.origin_name,
                thumb_url: action.payload.thumb_url,
                poster_url: action.payload.poster_url,
                year: action.payload.year,
                quality: action.payload.quality,
                lang: action.payload.lang,
                time: action.payload.time
            }
            // Kiểm tra xem bộ phim đã tồn tại trong danh sách yêu thích hay chưa
            const isMovieAlreadyAdded = state.MovieFavourite?.some((list) => list.id === movie.id);

            // Nếu bộ phim đã tồn tại, không thực hiện thêm
            if (isMovieAlreadyAdded) {
                return state;
            }

            // Nếu bộ phim chưa tồn tại, thêm nó vào danh sách yêu thích
            const updatedMovieFavourite = [...state.MovieFavourite, movie];

            // Lưu danh sách yêu thích đã được cập nhật vào localStorage
            localStorage.setItem("movie-favourite", JSON.stringify(updatedMovieFavourite));

            // Trả về danh sách yêu thích mới
            return {
                ...state,
                MovieFavourite: updatedMovieFavourite
            };
            break
        case "GET_MOVIE_FAVOURITE":
            const phim = JSON.parse(localStorage.getItem("movie-favourite"))
            console.log(phim);

            return {
                ...state,
                MovieFavourite: phim
            }
            break
        case "XOA_MOVIE_FAVOURITE":
            // const phims = JSON.parse(localStorage.getItem("movie-favourite"))
            // state.MovieFavourite=phim
            // return {
            //     ...state,
            //     MovieFavourite: state.MovieFavourite.filter(movie => {
            //         { console.log(action.payload) }
            //         return movie.id != state.MovieFavourite[action.payload]?.id
            //     })

            // }
            // Tìm kiếm bộ phim trong danh sách yêu thích
            const movieIdToDelete = action.payload; // ID của bộ phim cần xóa
            const updatedMovieFavourites = state.MovieFavourite.filter(movie => movie.id != movieIdToDelete);

            // Lưu danh sách yêu thích đã được cập nhật vào localStorage
            localStorage.setItem("movie-favourite", JSON.stringify(updatedMovieFavourites));
            // Trả về danh sách yêu thích mới
            return {
                ...state,
                MovieFavourite: updatedMovieFavourites
            };
            break
        default:
            throw ("Invalid reques")
            break;
    }
}
const AuthenProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const fetchSearch = async (query) => {
        await axios.get(`${DOMAIN}/tim-kiem.json?keyword=` + encodeURIComponent(query))
            .then(res => {
                const data = res.data.pageProps.data
                dispatch({ type: 'SEARCH_SUCCESS', payload: data })
            })
            .catch(err => {
                console.log(err);
            })
    }
    const fetchCategory = async () => {
        await axios.get(`${DOMAIN}/_next/data/s4OlXy8jONoHVWAT5vg7b/tim-kiem.json?keyword=`)
            .then(res => {
                const data = res.data.pageProps.data
                dispatch({ type: 'SEARCH_SUCCESS', payload: data })
            })
            .catch(err => {
                console.log(err);
            })
    }
    const list = {
        username: "",
        password: "",
        email: ""
    }
    // Khi người dùng đăng nhập thì set User cho nó
    const [open, setOpen] = useState(false)
    const [auth, setAuth] = useState({})
    const [Film, setFilm] = useState([])
    const [infoMovie, setInfoMovie] = useState([])
    const [MovieId, setMovieId] = useState("")
    // Lấy thông tin role khi người dùng đăng nhập
    const [role, setRole] = useState([])
    const [forms, setForms] = useState(list)
    const laygtri = (e) => {
        const { name, value } = e.target
        setForms({ ...forms, [name]: value })
    }
    const { username, password, email } = forms
    const value = {
        username,
        password,
        email,
        forms,
        role,
        setRole,
        laygtri,
        auth,
        setAuth,
        MovieId,
        setMovieId,
        Film,
        setFilm,
        infoMovie,
        setInfoMovie,
        state,
        fetchSearch,
        open, setOpen, dispatch

    }
    return (
        <AuthenContext.Provider value={value}>
            {children}
        </AuthenContext.Provider>
    )
}
export { AuthenContext, AuthenProvider }