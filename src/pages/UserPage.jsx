import axios from "axios"
import { useEffect, useState } from "react"

const UserPage = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}`)
            .then(res => {
                setData(res.data.results)
            })
            .catch(err => {
                console.log(err);
            })
    }, [])
    return (
        <div className="">

        </div>
    )
}
export default UserPage