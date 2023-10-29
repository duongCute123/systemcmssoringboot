import { BrowserRouter, Routes, Route } from "react-router-dom"
import LoginPage from "../auth/LoginPage"
import { useContext } from "react"
import { AuthenContext } from "../context/AuthenContext"
import AdminPage from "../pages/AdminPage"
import App from "../App"
import AddUserPage from "../pages/AddUserPage"
import ListAccountPage from "../pages/ListAccountpage"
import EditAccount from "../pages/EditAccount"
import ProfilePage from "../pages/ProfilePage"
import Test from "../pages/Test"
import ResetPass from "../auth/ResetPassWord"
import MovieList from "../component/MoviePage"
import DetailMoviePage from "../component/DetailMoviePage"
import WatchMovie from "../component/WatchMovie"
import RegisterPage from "../auth/RegisterPage"
import SearchMovie from "../component/SearchMovie"
import CategoryMovie from "../component/CategoryMovie/CategoryMovie"
import CountriesMovie from "../component/CountriesMovie.jsx/CountriesMovie"
import MovieTypes from "../component/MovieType/MovieType"
import TVShow from "../component/TVShow/TvShowPage"
const USER_ROLE = {
    PUBLIC_USER: "ROLE_USER",
    ADMIN_USER: "ROLE_ADMIN"
}
const RouterPage = () => {
    const { role } = useContext(AuthenContext)
    return (
        <div className="relative w-full mx-auto min-h-screen  bg-slate-950/90">
            <BrowserRouter>
                <Routes>
                    <Route path="" element={< Test />} />
                    <Route path="/movie/homepage" element={<MovieList />} />
                    <Route path="/movie/:category/:slug" element={<CategoryMovie />} />
                    <Route path="/movie/detail-movie/:slug" element={<DetailMoviePage />} />
                    <Route path="/movie/watch-movie/:slug/tap/:name" element={<WatchMovie />} />
                    <Route path="/" element={<Test />} />
                    <Route path="/movie/movie_type/:slug" element={<MovieTypes />} />
                    <Route path="/movie/:countrie/:slug" element={<CountriesMovie />} />
                    <Route path="/search/movie/:query" element={<SearchMovie />} />
                    <Route path="/movie/type_movie/tv-shows" element={<TVShow />} />
                    <Route path="/user/login" element={<LoginPage />} />
                    <Route path="/user/register" element={<RegisterPage />} />
                    <Route path="/user/reset-pass" element={<ResetPass />} />
                    <Route path="/admin/homepage" element={<App />}>
                        <Route index element={
                            <AdminElementPage role={role}>
                                <AdminPage />
                            </AdminElementPage>

                        } />
                    </Route>
                    <Route path="/admin/add-user" element={<App />}>
                        <Route index element={
                            <AdminElementPage role={role}>
                                <AddUserPage />
                            </AdminElementPage>

                        } />
                    </Route>
                    <Route path="/admin/list-user" element={<App />}>
                        <Route index element={
                            <AdminElementPage role={role}>
                                <ListAccountPage />
                            </AdminElementPage>

                        } />
                    </Route>
                    <Route path="/admin/edit-user/:id" element={<App />}>
                        <Route index element={
                            <AdminElementPage role={role}>
                                <EditAccount />
                            </AdminElementPage>
                        } />
                    </Route>
                    <Route path="/admin/profile" element={<App />}>
                        <Route index element={
                            <AdminElementPage role={role}>
                                <ProfilePage />
                            </AdminElementPage>

                        } />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}
const USERElement = ({ children, role }) => {
    if (role === USER_ROLE.PUBLIC_USER) {
        return (
            <div>
                {children}
            </div>
        )
    } else {
        return (
            <div>Bạn không có quyền truy cập vào</div>
        )
    }
}
const AdminElementPage = ({ children, role }) => {
    if (role === USER_ROLE.ADMIN_USER) {
        return (
            <div>
                {children}
            </div>
        )
    } else {
        return (
            <div className="">
                Bạn không có quyền truy cập
            </div>
        )
    }
}
export default RouterPage