import IMovie from "../Interfaces/movieType.tsx";
import DisplayMovie from "./DisplayMovie.tsx";
import React from "react";

type DisplayGalleryProps = {
    movies: IMovie[]
    deleteMovie: (movieId: number) => void
}

const DisplayGallery = ({movies, deleteMovie}: DisplayGalleryProps) => {
    return (
        <section>
            <div className="js-movie-container movie-container">
                <div className="createdForm">
                    {/*{display all movie reviews}*/}
                    { movies && movies.map((movie: IMovie, key: number) => (
                        <DisplayMovie key={key} movieToDisplay={movie} deleteMovie={deleteMovie}/>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default DisplayGallery