import { Link, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import axios from "axios"
const ListAccountPage = () => {
    const [data, setData] = useState([])
    const [query, setQuey] = useState("")
    const navigation = useNavigate()
    const LayData = async (e) => {
        await axios.get(`${process.env.REACT_APP_GATEWAY_GET_LIST_ACCOUNT}`)
            .then(res => {
                setData(res.data)
            })
            .catch(err => {
                console.log(err);
            })
    }
    useEffect(() => {
        LayData()
    }, [])
    const ThemAccount = () => {
        navigation("/admin/addAccount")
    }
    return (
        <div className="mx-64">
            <h1 className="text-center uppercase font-semibold text-3xl my-10">Danh sách các tài khoản</h1>
            <div className="flex my-4">
                <input type="text" className="w-[200px] border-solid border-2 border-black h-[40px]" placeholder="Vui lòng nhập têm tài khoản cần tìm" name="query" value={query} onChange={(e) => { setQuey(e.target.value) }} id="" />
                <div className="justify-between">
                    <input type="button" className="ml-4 border-solid border-2 border-black rounded-sm bg-yellow-500 text-white w-[80px] h-[40px]" value="Tim Kiem" />
                    <input type="button" onClick={ThemAccount} className="ml-9 border-solid border-2 border-black rounded-sm bg-yellow-500 text-white w-[130px] h-[40px]" value="Thêm Tài Khoản" />
                </div>
            </div>
            <table class="border-separate border border-slate-500">
                <thead>
                    <tr>
                        <th className="border border-slate-600">ID</th>
                        <th className="border border-slate-600">Tên Tài Khoản</th>
                        <th className="border border-slate-600">Đia Chỉ Email</th>
                        <th className="border border-slate-600 w-[200px]">Tác Vụ</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.length > 0 && data.filter(item => item.email.toLowerCase().includes(query)).map((items, index) => {
                            return (
                                <tr key={index}>
                                    <td className="border border-slate-600">{items.id}</td>
                                    <td className="border border-slate-600">{items.username}</td>
                                    <td className="border border-slate-600">{items.email}</td>
                                    <td className="border border-slate-600 text-center flex">
                                        <div className="w-20 bg-yellow-500 hover:bg-slate-400 text-white">
                                            <Link className="" to={"/admin/edit-user/" + items.id} about="">Edit</Link>
                                        </div>
                                        ||
                                        <div className="bg-red-500 w-20 border-solid hover:bg-red-700 text-white">
                                            <Link className="" to={"/admin/edit-user/" + items.id}>Delete</Link>
                                        </div>
                                    </td>
                                </tr>
                            )

                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
export default ListAccountPage