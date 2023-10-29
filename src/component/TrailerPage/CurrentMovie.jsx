const OneMovie = ({ movies }) => {
    return (
        <div className="">
            <div className="" key={movies.id}>
                <img src={`https://img.ophim9.cc/uploads/movies/${movies.thumb_url}`} alt="" />
                <input type="button" value="Xem Phim" />
            </div>
            <div className="">

            </div>
        </div>
    )
}
export default OneMovie