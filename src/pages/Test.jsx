import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
const Test = () => {
    const navigation = useNavigate()
    useEffect(() => {
        navigation("/movie/homepage")
    }, [navigation])
    return (
        <div className="">

        </div>
    )
}
export default Test