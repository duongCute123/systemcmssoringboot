const ModalSocial = ({ visible, closed }) => {
    if (!visible) return null
    return (
        <div onClick={closed} className="fixed inset-0 bg-black bg-opacity-30
        backdrop-blur-sm flex items-center justify-center">
            <div className="bg-white">
                Mymodal
            </div>
            <div  className="close">
                X
            </div>
        </div>
    )
}
export default ModalSocial