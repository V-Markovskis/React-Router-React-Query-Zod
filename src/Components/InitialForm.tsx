import '../App.css'
import React, {useState} from "react";
import IMovie from "../Interfaces/movieType.tsx";


type InitialFormProps = {
    initFormValue: IMovie,
    currentId: number,
    createMovie: (movie: IMovie) => void
    isLoading: boolean
}

// type InitialFormProps = {
//     currentId: number,
//     initFormValue: IMovie,
//     formValues: IMovie,
//     setFormValues: (movies: IMovie) => void,
//     movies: IMovie[],
//     setMovies: (movies: IMovie[]) => void
// }


// const InitialForm = ({currentId, formValues, initFormValue, setMovies, setFormValues, movies}: InitialFormProps) =>
const InitialForm = ({ initFormValue, currentId, createMovie, isLoading }: InitialFormProps) => {

    const [formValues, setFormValues] = useState(initFormValue);

    return (
        <>
            <form className="form-container" onSubmit={(e) => {
                e.preventDefault();

                createMovie({...formValues, id: currentId + 1 });
                setFormValues(initFormValue);

                // console.log('formValues', formValues)
                // postMovie(formValues);
                // setMovies([...movies, formValues])
                // setFormValues(initFormValue)
            }}>
                <h2>Add new movie</h2>
                <label htmlFor="nickname">Your Nickname:</label>
                <input
                    type="text"
                    name="nickname"
                    value={formValues.nickname}
                    onChange={(e) => {
                        setFormValues({
                            ...formValues,
                            nickname: e.target.value
                        })
                    }}
                    placeholder="Enter your nickname"
                    className="review-main-details"
                />

                <label htmlFor="movie title">Enter Movie:</label>
                <input
                    type="text"
                    name="movie title"
                    value={formValues.movie}
                    onChange={(e) => {
                        setFormValues({
                            ...formValues,
                            movie: e.target.value
                        })
                    }}
                    placeholder="Movie to be discussed"
                    className="review-main-details"
                />

                <label htmlFor="review">Your review:</label>
                <textarea
                    name="review"
                    rows={4}
                    cols={50}
                    value={formValues.review}
                    onChange={(e) => {
                        setFormValues({
                            ...formValues,
                            review: e.target.value
                        })
                    }}
                    placeholder="Enter your thoughts"
                    className="review-main-details"
                    maxLength={200}
                ></textarea>

                <label htmlFor="evaluation">Movie score:</label>
                <input
                    type="number"
                    name="evaluation"
                    value={formValues.evaluation}
                    onChange={(e) => {
                        setFormValues({
                            ...formValues,
                            evaluation: e.target.value
                        })
                    }}
                    placeholder="Evaluation (1-10)"
                    min="1"
                    max="10"
                    className="review-main-details"
                />
                <button className="submit-button" disabled={isLoading}>Submit</button>
            </form>
        </>
    )
}

export default InitialForm
