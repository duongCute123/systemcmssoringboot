import { createContext, useReducer } from "react";
import { useState } from "react";
import axios from "axios"
const AuthenContext = createContext();
const initialState = {
    MovieTimKiem: [],
    MovieCategory: []
}
const reducer = (state, action) => {
    switch (action.type) {
        case 'SEARCH_SUCCESS':
            console.log(action.payload);
            return {
                ...state, MovieTimKiem: action.payload
            }
            break;
        case 'GET_CATEGORY_MOVIE':
            return {
                ...state, MovieCategory: action.payload
            }
            break
        default:
            throw ("Invalid reques")
            break;
    }
}
const AuthenProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const fetchSearch = async (query) => {
        console.log(query);
        await axios.get(`/_next/data/s4OlXy8jONoHVWAT5vg7b/tim-kiem.json?keyword=` + encodeURIComponent(query))
            .then(res => {
                const data = res.data.pageProps.data
                console.log(data);
                console.log(res.data.pageProps.data.items);
                dispatch({ type: 'SEARCH_SUCCESS', payload: data })
            })
            .catch(err => {
                console.log(err);
            })
    }
    const  fetchCategory= async () => {
        await axios.get(`/_next/data/s4OlXy8jONoHVWAT5vg7b/tim-kiem.json?keyword=`)
            .then(res => {
                const data = res.data.pageProps.data
                console.log(data);
                console.log(res.data.pageProps.data.items);
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
        open, setOpen

    }
    return (
        <AuthenContext.Provider value={value}>
            {children}
        </AuthenContext.Provider>
    )
}
export { AuthenContext, AuthenProvider }