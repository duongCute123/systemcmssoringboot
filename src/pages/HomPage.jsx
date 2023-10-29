import { useNavigate } from "react-router-dom"

const HomePage = () => {
    const navigation = useNavigate()

    const HandlerLogin = () => {
        navigation("/user/login")
    }
    return (
        <div className="">
            <h1>Chào bạn đến với homepage</h1>
            <input type="button" value="Login" onClick={HandlerLogin} />
        </div>
    )
}
export default HomePage