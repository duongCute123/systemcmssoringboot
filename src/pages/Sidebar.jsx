import { FaTachometerAlt } from "react-icons/fa"
import * as React from 'react';
import logo from "../images.module/white1.webp"
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose=()=>{
        setAnchorEl(null)
    }
    const navigation=useNavigate()
    const HandlerList=()=>{
        navigation("/admin/list-user")

    }
    const HandlerAdd=()=>{
        navigation("/admin/add-user")
    }
    return (
        <div className='bg-[#4E73DF] px-[25px] w-[200px] h-screen'>
            <div className='px-[15px] py-[30px] flex items-center justify-center border-b-[1px] border-[#EDEDED]/[0.3]'>
                <img className="w-14" src={logo} alt="" />
                <h1 className='text-white text-[20px] leading-[24px] font-extrabold cursor-pointer'>CMS</h1>
            </div>
            <div className='flex items-center gap-[15px] py-[20px] border-b-[1px] border-[#EDEDED]/[0.3] cursor-pointer'>
                <FaTachometerAlt color='white' />
                <p className='text-[14px] leading-[20px] font-bold text-white' onClick={() => {
                    
                }}>Dashboard</p>
            </div>
            <div className="mt-8 text-blue-50">
                <div
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                >
                    Quản lý tài khoản
                </div>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}
                >
                    <MenuItem  onClick={HandlerList}>Danh sách tài khoản</MenuItem>
                    <MenuItem onClick={HandlerAdd}>Thêm tài khoản</MenuItem>
                </Menu>
            </div>


        </div>
    )
}

export default Sidebar