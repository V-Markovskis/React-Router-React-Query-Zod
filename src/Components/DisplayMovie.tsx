import IMovie from "../Interfaces/movieType.tsx";

interface FormValues {
    movieToDisplay: IMovie;
    deleteMovie: (movieId: number) => void
}

const DisplayMovie = ({movieToDisplay, deleteMovie}: FormValues) => {
    return (
        <div>
            <img
                src={movieToDisplay.image}
                alt="movie image"
                width={200}
                height={200}
                style={{objectFit: "cover"}}
            />
            <br/>
            <br/>
            <p>User: {movieToDisplay.nickname}</p>
            <p>Movie name: {movieToDisplay.movie}</p>
            <p>{movieToDisplay.review}</p>
            <p>{movieToDisplay.evaluation} out of 10</p>
            <button onClick={ () => {
                deleteMovie(movieToDisplay.id)
                console.log('BUTTON DELETE CLICKED')
            }}>Delete</button>
        </div>
    )
}

export default DisplayMovie