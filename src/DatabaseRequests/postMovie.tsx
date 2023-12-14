import axios from "axios";

const postCreatedForm = async (newMovie: {nickname: string, movie: string, review: string, evaluation: string, image: string}) => {
    return axios.post('http://localhost:3000/movies', newMovie)
}

export default postCreatedForm