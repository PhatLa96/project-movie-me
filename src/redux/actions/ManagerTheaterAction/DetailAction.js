import createAction from ".."
import { ManagerTheater } from "../../../services/ManagerTheaterService"
import { theaterType } from "../../types/ManagerTheaterType"

export const GetDetailShowTime = (maPhim) => {
    return async (dispatch) => {
        dispatch(createAction(theaterType.GET_LOADING_DETAIL))
        try {
            const res = await ManagerTheater.GetMovieDetailShowTime(maPhim)
            dispatch(createAction(theaterType.SET_DETAIL_MOVIE, res.data.content))
            const arrCumRapData = res.data.content?.heThongRapChieu?.reduce((colect, item) => {
                return [...colect, ...item.cumRapChieu];
            }, []);

            const renderArrCumRapData = arrCumRapData?.map((item) => item.tenCumRap);
            await dispatch(createAction(theaterType.FETCH_MOVIE_SCHEDULE, {
                arrCumRapData: arrCumRapData,
                renderArrCumRapData: renderArrCumRapData
            }));
        } catch (err) {
            console.log(err)
        }
    }
}
export const GetCarouselSearchShowTime = (maPhim) => {
    return async (dispatch) => {

        try {
            const res = await ManagerTheater.GetMovieDetailShowTime(maPhim)
            dispatch(createAction(theaterType.SET_DETAIL_MOVIE, res.data.content))
            const arrCumRapData = res.data.content?.heThongRapChieu?.reduce((colect, item) => {
                return [...colect, ...item.cumRapChieu];
            }, []);

            const renderArrCumRapData = arrCumRapData?.map((item) => item.tenCumRap);
            await dispatch(createAction(theaterType.FETCH_MOVIE_SCHEDULE, {
                arrCumRapData: arrCumRapData,
                renderArrCumRapData: renderArrCumRapData
            }));
        } catch (err) {
            console.log(err)
        }
    }
}