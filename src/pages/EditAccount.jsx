import { useEffect, useState } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"

const EditAccount = () => {
    const { id } = useParams()
    const list = {
        username: "",
        password: "",
        email: ""
    }
    const [items, setItems] = useState(list)
    const LayValue = (e) => {
        const { name, value } = e.target
        setItems({ ...items, [name]: value })
    }
    const LayAccount = async (e) => {
        await axios.get(`${process.env.REACT_APP_GATEWAY_GET_ACCOUNT_ID}` + id)
            .then(res => {
                setItems(res.data)
            })
            .catch(err => {
                console.log(err);
            })
    }
    const UpdateAccount = async (e) => {
        e.preventDefault()
        await axios.put(`${process.env.REACT_APP_GATEWAY_UPDATE_ACCOUNT}` + id,items)
            .then(res => {
                console.log(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }
    useEffect(() => {
        LayAccount()
    }, [id])
    const { username, password, email } = items
    console.log(items);
    return (
        <div className="">
            <h1 className="text-center items-center text-3xl font-semibold uppercase mt-7">Thêm tài khoản</h1>
            <div className="mx-32">
                <form action="" method="post">
                    <div className="form-group">
                        <label htmlFor="">Nhập tên đăng nhập</label>
                        <input type="text" className="form-control" placeholder="Vui lòng nhập tên đăng nhập" name="username" value={username} onChange={LayValue} id="" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Nhập mật khẩu đăng nhập</label>
                        <input type="text" placeholder="Vui lòng nhập mật khẩu" name="password" value={password} onChange={LayValue} id="" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Nhập địa chỉ email</label>
                        <input type="text" className="form-control" placeholder="Vui lòng nhập địa chỉ" name="email" value={email} onChange={LayValue} id="" />
                    </div>
                    <div className="flex justify-between mt-7">
                        <div className="">
                            <input type="submit" onClick={UpdateAccount} className="bg-red-500 text-blue-100 h-[36px] w-[200px] text-center items-center hover:bg-slate-500 border-solid rounded-md" value="Thêm tài khoản" />
                        </div>
                        <div className="">
                            <input type="button" className="bg-red-500 text-blue-100 h-[36px] w-[200px] text-center items-center hover:bg-slate-500 border-solid rounded-md" value="Huỷ bỏ" />
                        </div>
                        <div className="">
                            <input type="button" className="bg-red-500 text-blue-100 h-[36px] w-[200px] text-center items-center hover:bg-slate-500 border-solid rounded-md" value="Quay lại" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default EditAccount