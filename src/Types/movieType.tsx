import { z } from 'zod';

export const IMovieValidation = z.object({
    id: z.number(),
    nickname: z.string(),
    movie: z.string(),
    review: z.string(),
    evaluation: z.string(),
    image: z.string(),
});

type IMovie = z.infer<typeof IMovieValidation>


export default IMovie