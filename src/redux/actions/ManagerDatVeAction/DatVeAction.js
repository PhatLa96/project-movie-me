import createAction from ".."
import { connection } from "../../.."
import { ManagerDatVe } from "../../../services/ManagerDatVeService"
import { DatVeType } from "../../types/ManagerDatVeType"




export const getDatVeAction = (maLichChieu) => {

    return async (dispatch) => {
        dispatch(createAction(DatVeType.LOADING_DATVE))
        try {
            const res = await ManagerDatVe.GetListPhongVe(maLichChieu)
            dispatch(createAction(DatVeType.GET_DATVE, res.data.content))

        } catch (err) {
            console.log(err)
        }
    }
}

export const thongTinDatVe = (thongTinDatVe) => {

    return async (dispatch, getState) => {
        try {
            const res = await ManagerDatVe.layThongTinDatVe(thongTinDatVe)
            dispatch(createAction(DatVeType.BOOK_TICKET_SUCCESS, res.data.content))
            let Users = getState().DatVeReducer.Users;
            connection.invoke('datGheThanhCong', Users.taiKhoan, thongTinDatVe.maLichChieu);
        } catch (err) {
            console.log(err)
        }
    }
}
export const datGheAction = (newSeatSelected, newListSeatSelected, sum, danhSachVe, isSelectedSeat, maLichChieu) => {


    return async (dispatch, getState) => {

        //Đưa thông tin ghế lên reducer
        await dispatch(createAction(DatVeType.CHANGE_SELECTED_SEAT, {
            listSeat: newSeatSelected,
            danhSachGheDangDat: newListSeatSelected,
            sum: sum,
            danhSachVe: danhSachVe,
            isSelectedSeat: isSelectedSeat,
        }));

        //Call api về backend 
        // let danhSachGheDangDatA = getState().DatVeReducer.danhSachVe;// VẤN ĐỀ REALTIME Ở ĐÂY ****************
        // let taiKhoan = getState().ManagerUserReducer.Users.taiKhoan;

        // console.log('danhSachGheDangDat', danhSachGheDangDat);
        // console.log('taiKhoan', taiKhoan);
        // console.log('maLichChieu', maLichChieu);
        //Biến mảng thành chuỗi
        // danhSachGheDangDatA = JSON.stringify(danhSachGheDangDatA);

        //Call api signalR
        // connection.invoke('datGhe', taiKhoan, danhSachGheDangDatA, maLichChieu);




    }

}