import axios from "axios";
import IMovie from "../Interfaces/movieType.tsx";

const GetMovies = async () => {
    const response = await axios.get<IMovie[]>('http://localhost:3000/movies');
    return response.data;
}

export default GetMovies