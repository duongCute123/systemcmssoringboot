import { useContext, useEffect, useState } from "react";
import logo from "../images.module/white1.webp"
import { AuthenContext } from "../context/AuthenContext";
import axios from "axios"
import { Link, useNavigate } from "react-router-dom";
const RegisterPage = () => {
    return (
        <div className="w-auto h-auto bg-[url('./images.module/back-login.png')] bg-no-repeat bg-cover">
            <Box />
        </div>
    )
}
const Box = () => {
    const list = useContext(AuthenContext)
    // const [validUserName, setValidUserName] = useState()
    // const [validUserPass, setValidUserPass] = useState()
    const { role, setRole } = useContext(AuthenContext)
    const { auth, setAuth } = useContext(AuthenContext)
    const navigation = useNavigate()
    
    const SubmitHandler = async (e) => {
        e.preventDefault()
        // const rexUsername = /^[a-zA-Z0-9_]{8}$/
        // if (rexUsername.test(list.username)) {
        //     setValidUserName("")
        // } else {
        //     setValidUserName("Vui lòng nhập mật khẩu có độ dài là 8 ")
        // }
        // const regexPass = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/
        // if (regexPass.test(list.password)) {
        //     setValidUserPass("")
        // } else {
        //     setValidUserPass("Vui lòng nhập mật khẩu có độ dài là 8 hoặc lớn hơn")
        // }
        await axios.post(`${process.env.REACT_APP_GATEWAY_CREATE_ACCOUNT}`, list.forms)
            .then(res => {
                setAuth(res.data)
                navigation("/user/login")
            })
            .catch(err => {
                console.log(err);
            })
    }
    return (
        <div className="">
            <div className="flex">
                <div className="basis-2/3 my-16">
                    <img className="mx-16 w-[100px]" src={logo} alt="" />
                    <p className="text-white mx-8"></p>
                </div>
                <div className="bg-white w-96 shadow-lg shadow-cyan-500/50 my-16 h-[580px] rounded-2xl">
                    <div className="text-center items-center basis-1/3 flex flex-col">
                        <img className="items-center text-center w-[100px]" src={logo} alt="" />
                        <h1 className="uppercase mt-5 mb-4">Đăng Nhập</h1>
                    </div>
                    <div className="border-solid rounded mx-6" >
                        <form action="" method="post">
                            <div className="forms-group">
                                <label htmlFor="">Nhập tên đăng nhập</label>
                                <input type="text" className="form-control" placeholder="Vui lòng nhập tên đăng nhập" name="username" value={list.username} onChange={list.laygtri} id="" />
                                {/* <p>{validUserName}</p> */}
                            </div>
                            <div className="form-group relative">
                                <label htmlFor="">Nhập mật khẩu</label>
                                <input type="text" className="form-control" placeholder="Vui lòng nhập mật khẩu" name="password" value={list.password} onChange={list.laygtri} id="" />
                                {/* <p>{validUserPass}</p> */}
                            </div>
                            <div className="forms-group">
                                <label htmlFor="">Nhập địa chỉ email </label>
                                <input type="text" className="form-control" placeholder="Vui lòng nhập địa chỉ email" name="email" value={list.email} onChange={list.laygtri} id="" />
                                {/* <p>{validUserName}</p> */}
                            </div>
                            <input type="submit" onClick={SubmitHandler} className="form-control border rounded hover:bg-slate-400 items-center text-center font-semibold text-xl" value="Đăng Nhập" />
                            <p className="my-3">Bạn đã có tài khoản?<Link to={"/user/login"} >Login?</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default RegisterPage