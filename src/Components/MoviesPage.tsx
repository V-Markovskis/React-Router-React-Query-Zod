import DisplayGallery from "./DisplayGallery.tsx";
import InitialForm from "./InitialForm.tsx";
import IMovie, {IMovieValidation} from "../Types/movieType.tsx";
import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import getMovies from "../DatabaseRequests/getMovies.tsx";
import postMovie from "../DatabaseRequests/postMovie.tsx";
import deleteMovie from "../DatabaseRequests/deleteMovie.tsx";

const initFormValue = {
    id: -1,
    nickname: '',
    movie: '',
    review: '',
    evaluation: '1',
    image: ''
}

const MoviesPage = () => {
    // const [formValues, setFormValues] = useState<IMovie>(initFormValue)
    // const [movies, setMovies] = useState<IMovie[]>([]);

    const queryClient = useQueryClient();

    //https://stackoverflow.com/questions/70337333/react-query-refetch-on-window-focus-but-not-otherwise
    const { data, isLoading, isError, error} = useQuery({
        queryKey: ['movies'],
        queryFn: getMovies,
        staleTime: Infinity,
        refetchOnWindowFocus: false,
    })

    const postMutation = useMutation({
        mutationFn: postMovie,
        onSuccess: () => {
            // Invalidate and refetch
            queryClient.invalidateQueries({ queryKey: ['movies'] });
        },
        onError: (error) => {
            // An error happened!
            console.error(`Error message: ${error}`)
        },
    })

    const deleteMutation = useMutation({
        mutationFn: deleteMovie,
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ['movies']})
        },
        onError: (error) => {
            // An error happened!
            console.error(`Error message: ${error}`)
        },
    })

    console.log('data', data);

    if (isLoading) {
        return <span>Loading...</span>
    }

    if (isError) {
        return <span>Error: {error.message}</span>
    }

    if (!data) {
        return <span>No data found</span>
    }

    return (
        <>
            <DisplayGallery
                movies={data}
                deleteMovie={(movieId: number) => {
                    deleteMutation.mutate(movieId);
                }}
            />
            {/*<InitialForm currentId={data.length} formValues={formValues} initFormValue={initFormValue} setMovies={setMovies} setFormValues={setFormValues} movies={data}/>*/}
            <InitialForm
                initFormValue={initFormValue}
                currentId={data.length}
                createMovie={(movie: IMovie) => {
                    try {
                        IMovieValidation.parse(movie)
                        postMutation.mutate(movie);
                    } catch (error) {
                        console.error('Zod validation error: ', error);
                    }
                }}
                isLoading={isLoading}
            />
        </>
    )
}

export default MoviesPage