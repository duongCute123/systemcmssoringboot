import { useContext, useEffect } from "react"
import ava from "../../images.module/avarta.jpg"
import axios from "axios"
import { useState } from "react"
import { AuthenContext } from "../../context/AuthenContext"
const ProfilePage = () => {
    const list = {
        username: "",
        password: "",
        email: ""
    }
    const { auth } = useContext(AuthenContext)
    const id = auth.id
    const [items, setItems] = useState(list)
    const LayValue = (e) => {
        const { name, value } = e.target
        setItems({ ...items, [name]: value })
    }
    const LayAccount = async (e) => {
        await axios.get(`${process.env.REACT_APP_GATEWAY_GET_ACCOUNT_ID}`+id
        )
            .then(res => {
                setItems(res.data)
            })
            .catch(err => {
                console.log(err);
            })
    }
    useEffect(() => {
        LayAccount()
    }, [id])
    const { username, password, email } = items
    return (
        <div className="container">

            <div className="flex flex-col items-center">
                <h1 className="my-4 font-light text-2xl">Thông tin cá nhân</h1>
                <div className="flex flex-col items-center">
                    <div className="text-center">
                        <img className="mx-auto rounded-full" src={ava} alt="" />
                    </div>
                    <h1 className="my-3">Tên bạn là:{username}</h1>
                </div>
            </div>
            <div className="mx-24">
                <form action="" method="post">
                    <div className="form-group">
                        <label htmlFor="">Tên của bạn</label>
                        <input type="text" className="form-control" value={username} onChange={LayValue} placeholder="Vui lòn nhâp họ và tên của bạn" name="fullName" id="" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Địa chỉ email</label>
                        <input type="text" className="form-control" placeholder="Vui lòng nhập địa chỉ email" value={email} onChange={LayValue} name="email" id="" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Mật khẩu</label>
                        <input type="text" className="form-control" value={password} onChange={LayValue} placeholder="Vui lòng nhập lại họ và tên để cập nhật" name="password" id="" />
                    </div>
                    <div className="">
                        <input type="button" value="Lưu" />
                    </div>
                </form>
            </div>
        </div>
    )
}
export default ProfilePage