import createAction from ".."
import { ManagerMovie } from "../../../services/ManagerMovieService"
import { movieType } from "../../types/ManagerMovieType"

export const GetCarouselAction = async (dispatch) => {
    try {
        const res = await ManagerMovie.GetListBanner()
        dispatch(createAction(movieType.GET_CAROUSEL, res.data.content))
    } catch (err) {
        console.log(err)
    }
}