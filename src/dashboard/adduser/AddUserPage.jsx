import { useContext } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { AuthenContext } from "../../context/AuthenContext"
const AddUserPage = () => {
    const list = useContext(AuthenContext)
    const navigation = useNavigate()
    const HuyBo = () => {
        navigation("/")
    }
    const HomepAgeCan = () => {
        navigation("")
    }
    const ThemAccount = async (e) => {
        e.preventDefault()
        await axios.post(`${process.env.REACT_APP_GATEWAY_CREATE_ACCOUNT}`, list.forms)
            .then(res => {
                alert("Thêm thành công")
            })
            .catch(err => {
                console.log(err);
            })
    }
    return (
        <div className="">
            <h1 className="text-center items-center text-3xl font-semibold uppercase mt-7">Thêm tài khoản</h1>
            <div className="mx-32">
                <form action="" method="post">
                    <div className="form-group">
                        <label htmlFor="">Nhập tên đăng nhập</label>
                        <input type="text" className="form-control" placeholder="Vui lòng nhập tên đăng nhập" name="username" value={list.username} onChange={list.laygtri} id="" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Nhập mật khẩu đăng nhập</label>
                        <input type="text" placeholder="Vui lòng nhập mật khẩu" name="password" value={list.password} onChange={list.laygtri} id="" className="form-control" />
                    </div>
                    {/* <div className="form-group">
                        <label htmlFor="">Nhập đầy đủ họ và tên</label>
                        <input type="text" className="form-control" placeholder="Vui lòng nhập họ và tên của bạn" name="fullName" value={list.fullName} onChange={list.laygtri} id="" />
                    </div> */}
                    <div className="form-grop">
                        <label htmlFor="">Nhập giới tính của bạn</label>
                        <input type="text" placeholder="Vui lòng nhập giới tính" className="form-control" name="email" value={list.email} onChange={list.laygtri} id="" />
                    </div>
                    {/* <div className="form-group">
                        <label htmlFor="">Chọn quyền muốn cấp</label>
                        <select name="role" onChange={list.laygtri} value={list.role} className="form-control" id="">
                            <option value="Interviewee">Vui lòng chọn quyền muốn cấp</option>
                            <option value="Interviewee">Interviewee</option>
                        </select>
                    </div> */}
                    <div className="flex justify-between mt-7">
                        <div className="">
                            <input type="submit" onClick={ThemAccount} className="bg-red-500 text-blue-100 h-[36px] w-[200px] text-center items-center hover:bg-slate-500 border-solid rounded-md" value="Thêm tài khoản" />
                        </div>
                        <div className="">
                            <input type="button" className="bg-red-500 text-blue-100 h-[36px] w-[200px] text-center items-center hover:bg-slate-500 border-solid rounded-md" onClick={HuyBo} value="Huỷ bỏ" />
                        </div>
                        <div className="">
                            <input type="button" className="bg-red-500 text-blue-100 h-[36px] w-[200px] text-center items-center hover:bg-slate-500 border-solid rounded-md" onClick={HomepAgeCan} value="TRở Lại HomePage" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default AddUserPage