import { useNavigate } from "react-router-dom"

const Button = () => {
    const navigation = useNavigate()
    const LoginPage = () => {
        navigation("/user/login")
    }
    return (
        <div className="flex">
            <button className="bg-purple-500 text-white px-6 py-2 rounded-xl" onClick={LoginPage}>Login</button>
        </div>
    )
}
export default Button