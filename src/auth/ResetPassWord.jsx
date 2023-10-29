import { useContext, useEffect, useState } from "react";
import logo from "../images.module/white1.webp"
import { AuthenContext } from "../context/AuthenContext";
import axios from "axios"
import { useNavigate } from "react-router-dom";
const ResetPass = () => {
    return (
        <div className="w-auto h-auto bg-[url('./images.module/back-login.png')] bg-no-repeat bg-cover">
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
    useEffect(() => {
        axios.get("http://localhost:8802/api/test/all")
            .then(res => {
            })
            .catch(err => {
                console.log(err);
            })
    }, [])
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
        await axios.post(`${process.env.REACT_APP_GATEWAY_RESETPASS}`, list.forms)
            .then(res => {
                setAuth(res.data)
                setRole(res.data.roles)
                if (auth.roles === "ROLE_USER") {
                    navigation("/user/homepage")
                }
                if (auth.roles === "ROLE_ADMIN") {
                    navigation("/admin/homepage")
                }
            })
            .catch(err => {
                console.log(err);
                alert("Lỗi đăng nhập")
            })
    }
    return (
        <div className="">
            <div className="flex">
                <div className="basis-2/3 my-16">
                    <img className="mx-16" src={logo} alt="" />
                    <p className="text-white mx-8"></p>
                </div>
                <div className="bg-white w-96 shadow-lg shadow-cyan-500/50 my-16 h-[600px] rounded-2xl">
                    <div className="text-center items-center basis-1/3 flex flex-col">
                        <img className="items-center text-center" src={logo} alt="" />
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
                                <label htmlFor="">Nhập mật khẩu mới</label>
                                <input type="text" className="form-control" placeholder="Vui lòng nhập mật khẩu" name="password" value={list.password} onChange={list.laygtri} id="" />
                                {/* <p>{validUserPass}</p> */}
                            </div>
                            <div className="form-group relative">
                                <label htmlFor="">Nhập lại mật khẩu mới</label>
                                <input type="text" className="form-control" placeholder="Vui lòng nhập lại mật khẩu mật khẩu" name="password" value={list.password} onChange={list.laygtri} id="" />
                                {/* <p>{validUserPass}</p> */}
                            </div>
                            <input type="submit" onClick={SubmitHandler} className="form-control border rounded hover:bg-slate-400 items-center text-center font-semibold text-xl" value="Reset Pass" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ResetPass