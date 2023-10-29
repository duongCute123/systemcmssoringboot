import logo from "../images.module/white1.webp"
const Footer = () => {
    return (
        <div className="w-full mx-auto text-white mt-16 h-auto">
            <div className="border-t-2 border-sky-300">
                <div className="w-4/5 mt-3 gap-10 mb-2 grid xl:grid-cols-5 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 justify-between mx-auto">
                    <div className="">
                        <h1>Phim Hay</h1>
                        <ul>
                            <li>Giới thiệu</li>
                            <li>Faceboock</li>
                            <li>Twiter</li>
                        </ul>
                    </div>
                    <div className="">
                        <h1>Đóng Góp</h1>
                        <ul>
                            <li>Hướng dẫn sử dụng</li>
                            <li>Liên hệ quảng cáo</li>
                            <li>Góp ý</li>
                        </ul>
                    </div>
                    <div className="">
                        <h1>Quy định</h1>
                        <ul>
                            <li>Không làm theo dưới mọi hình thức</li>
                            <li>Trang web chỉ tham khảo</li>
                            <li>Chỉ mang tính chất học tập</li>
                        </ul>
                    </div>
                    <div className="">
                        <h1>Thông tin liên hệ</h1>
                        <ul>
                            <li>Email:03398858@gmail.com</li>
                            <li>SDT:01258752264</li>
                        </ul>
                    </div>
                    <div className=" ml-10">
                        <img className="w-[80px]" src={logo} alt="" />
                    </div>
                </div>
            </div>
            <div className="border-t-2 border-sky-400">
                <div className="flex flex-col justify-between  mx-auto w-4/5">
                    <p>Phim hay chỉ muốn mang lại một trang web không có quảng cáo</p>
                    <p>Phim hay được tạo ra nhằm mục đích học tập chứ không phải đánh cắp thông tin người dùng</p>
                </div>
            </div>
        </div>
    )
}
export default Footer