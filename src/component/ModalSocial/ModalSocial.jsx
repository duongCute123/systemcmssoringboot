import { Link } from "react-router-dom"
import { socialsShare } from "../../types"
import { AiOutlineClose } from "react-icons/ai"
import { CopyToClipboard } from 'react-copy-to-clipboard';
import React, { useEffect, useState } from "react"
const ModalSocial = ({ visible, closed }) => {
    const [currentUrl, setcurrentUrl] = useState("")
    const [IsCopy, setIsCopy] = useState(false)
    useEffect(() => {
        setcurrentUrl(window.location.href)

    }, [])
    if (!visible) return null
    return (
        <div className="fixed  inset-0 bg-black bg-opacity-30
        backdrop-blur-sm flex flex-col items-center justify-center">
            <div onClick={closed} className="">
                <AiOutlineClose size={"40px"} color="white" className="absolute top-11 right-0 z-50" />
            </div>
            <h1 className="my-10 font-bold text-3xl text-white">Chia sẻ</h1>
            <div className="flex flex-row gap-3">
                {
                    socialsShare.map((list, index) => {
                        const IconElement = list.icon
                        return (
                            <div className="" key={index}>
                                <Link to={`${list.baseHref}+${currentUrl}`} className="">
                                    <IconElement className="rounded-full" color={`${list.color}`} size={"40px"} />
                                </Link>
                            </div>
                        )

                    })
                }

            </div>
            <div className="h-16 bg-black/80 w-auto mx-auto my-5 flex flex-wrap items-center justify-center text-center">
                <input type="text" className="w-[350px] h-[50px] font-bold text-black ml-3 m-2" value={currentUrl} />
                <CopyToClipboard text={currentUrl}
                    onCopy={() => { setIsCopy(true) }}>
                    <button className={`${IsCopy ? 'Đã sao chép' : 'Sao Chép'} border-2
                    border-solid border-red-500 h-12 rounded-xl w-32 bg-yellow-400 text-white text-xl`}>
                        {IsCopy ? 'Đã sao chép' : 'Sao chép'}
                    </button>

                </CopyToClipboard>
            </div>

        </div>
    )
}
export default ModalSocial