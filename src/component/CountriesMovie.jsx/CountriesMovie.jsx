import { Link } from "react-router-dom"
import NavBarTMDB from "../NavBar"
import Footer from "../Footer"
import { BiTimeFive } from "react-icons/bi"

import { DOMAIN } from "../../domain/domain"
import useFetch from "../../hook/useFetch"
import { useParams } from "react-router-dom"
import { useContext, useEffect } from "react"
import { AuthenContext } from "../../context/AuthenContext"
const CountriesMovie = () => {
    const { category } = useParams()
    const { slug } = useParams()
    const url = `${DOMAIN}/${category}/${slug}.json?slug=${slug}`
    const data = useFetch(url)
    console.log(data);
    return (
        <div className="">

        </div>
    )
}
export default CountriesMovie