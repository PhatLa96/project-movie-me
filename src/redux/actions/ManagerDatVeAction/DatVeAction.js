import createAction from ".."
import { ManagerDatVe } from "../../../services/ManagerDatVeService"
import { DatVeType } from "../../types/ManagerDatVeType"




export const getDatVeAction = (maLichChieu, callback) => {
    
    return async (dispatch) => {
        try {
            const res = await ManagerDatVe.GetListPhongVe(maLichChieu)
            dispatch(createAction(DatVeType.GET_DATVE, res.data.content.thongTinPhim))
            callback()
        } catch (err) {
            console.log(err)
        }
    }
}