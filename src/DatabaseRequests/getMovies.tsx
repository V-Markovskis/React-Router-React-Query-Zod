import axios from "axios";
import IMovie from "../Types/movieType.tsx";

const GetMovies = async () => {
    const response = await axios.get<IMovie[]>('http://localhost:3001/movies');
    return response.data;
}

export default GetMovies