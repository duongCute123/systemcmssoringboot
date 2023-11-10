import { useContext, useEffect, useState } from "react";
import logo from "../images.module/white1.webp"
import { AuthenContext } from "../context/AuthenContext";
import axios from "axios"
import { Link, useNavigate } from "react-router-dom";
const LoginPage = () => {
    return (
        <div className="w-auto min-h-screen  bg-[url('./images.module/back-login.png')] bg-no-repeat bg-cover">
            <Box />
        </div>
    )
}
const Box = () => {
    const list = useContext(AuthenContext)
    const [validUserName, setValidUserName] = useState()
    const [validUserPass, setValidUserPass] = useState()
    const { role, setRole } = useContext(AuthenContext)
    const { auth, setAuth } = useContext(AuthenContext)
    const navigation = useNavigate()
    const SubmitHandler = async (e) => {
        e.preventDefault()
        const rexUsername = /^[a-zA-Z0-9]{6,}$/
        if (rexUsername.test(list.username)) {
            setValidUserName("")
        } else {
            setValidUserName("Vui lòng nhập mật khẩu có độ dài là 8 ")
        }
        const regexPass = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/
        if (list.password) {
            if (regexPass.test(list.password)) {
                setValidUserPass("")
            } else {
                setValidUserPass("Vui lòng nhập mật khẩu có độ dài là 8 hoặc lớn hơn")
            }
        } else {
            alert("Lỗi")
        }
        await axios.post(`${process.env.REACT_APP_GATEWAY_LOGIN}`, list.forms)
            .then(res => {
                setAuth(res.data)
                setRole(res.data.roles.slice()[0])
                if (role === "ROLE_USER") {
                    navigation("/movie/homepage")
                }
                if (role === "ROLE_ADMIN") {
                    navigation("/admin/homepage")
                }
            })
            .catch(err => {
                console.log(err);
            })
    }
    return (
        <div className="min-h-screen mx-4">
            <div className="flex">
                <div className="basis-2/3 hidden md:block my-16">
                    <img className="mx-16" src={logo} alt="" />
                    <p className="text-white mx-8"></p>
                </div>
                <div className="bg-white w-96 mx-auto justify-center shadow-lg shadow-cyan-500/50 my-16 h-[580px] rounded-2xl">
                    <div className="text-center items-center basis-1/3 flex flex-col">
                        <img className="items-center text-center" src={logo} alt="" />
                        <h1 className="uppercase mt-5 mb-4">Đăng Nhập</h1>
                    </div>
                    <div className="border-solid rounded mx-6" >
                        <form action="" method="post">
                            <div className="forms-group">
                                <label htmlFor="">Nhập tên đăng nhập</label>
                                <input type="text" className="form-control" placeholder="Vui lòng nhập tên đăng nhập" name="username" value={list.username} onChange={list.laygtri} id="" />
                                <p>{validUserName}</p>
                            </div>
                            <div className="form-group relative">
                                <label htmlFor="">Nhập mật khẩu</label>
                                <input type="text" className="form-control" placeholder="Vui lòng nhập mật khẩu" name="password" value={list.password} onChange={list.laygtri} id="" />
                                <p>{validUserPass}</p>
                            </div>
                            <input type="submit" onClick={SubmitHandler} className="form-control border rounded hover:bg-slate-400 items-center text-center font-semibold text-xl" value="Đăng Nhập" />
                            <p className="my-1">Bạn quên mật khẩu hãy tìm lại nó?<Link to={"/user/reset-pass"} >Rest Pass?</Link></p>
                            <p className="my-1">Bạn chưa có tài khoản?<Link to={"/user/register"} >Register?</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default LoginPage