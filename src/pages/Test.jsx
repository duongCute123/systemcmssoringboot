import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
const Test = () => {
    const navigation = useNavigate()
    useEffect(() => {
        navigation("/user/login")
    }, [navigation])
    return (
        <div className="">

        </div>
    )
}
export default Test