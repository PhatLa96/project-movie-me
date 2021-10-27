import createAction from ".."
import { ManagerMovie } from "../../../services/ManagerMovieService"
import { movieType } from "../../types/ManagerMovieType"
import { theaterType } from "../../types/ManagerTheaterType"

export const GetMovieListAction = async (dispatch) => {
    dispatch(createAction(movieType.GET_MOVIE_LIST_LOADING))
    try {
        const res = await ManagerMovie.GetListMovie()
        dispatch(createAction(movieType.GET_MOVIE_LIST, res.data.content))
    } catch (err) {
        console.log(err)
    }
}
// export const movieInfoAction = (maPhim) => {

//     return async (dispatch) => {
//         dispatch(createAction(theaterType.GET_LOADING_DETAIL))
//         try {
//             const res = await ManagerMovie.GetDetailMovie(maPhim)
//             dispatch(createAction(theaterType.SET_DETAIL_MOVIE, res.data.content))

//         } catch (err) {
//             console.log(err)
//         }
//     }
// }