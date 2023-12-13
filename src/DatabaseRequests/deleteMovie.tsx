import axios from "axios";

const deleteMovie = async (id: number) => {
    return await axios.delete(`http://localhost:3000/movies/${id}`)
};

export default deleteMovie;