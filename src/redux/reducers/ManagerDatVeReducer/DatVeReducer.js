import { DatVeType } from "../../types/ManagerDatVeType"

const initialState = {
    arrDatVe: {},

    listSeat: [],
    danhSachVe: [],
    email: "",
    taiKhoan: "",
    phone: "",
    maLichChieu: null,
    listSeatSelectedOthers: [],
    danhSachGheDangDat: [],

    isSelectedSeat: false,
    sum: 0,
    activeStep: 0,
    bookTicketSuccess: null,
    paymentMethod: "",
    isReadyPayment: false,
    timeOut: false,
    refreshKey: Date.now(),
    alertOver: false,
    loadingDatVe: false

}

const DatVeReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case DatVeType.LOADING_DATVE: {
            return { ...state, loadingDatVe: true }
        }
        case DatVeType.GET_DATVE: {
            state.arrDatVe = payload
            return { ...state, loadingDatVe: false }
        }
        case DatVeType.EDIT_LIST_SEAT: {
            return { ...state, listSeat: payload.listSeat, email: payload.email, taiKhoan: payload.taiKhoan, phone: payload.phone, maLichChieu: payload.maLichChieu }
        }
        case DatVeType.CHANGE_SELECTED_SEAT: {
            return { ...state, listSeat: payload.listSeat, danhSachGheDangDat: payload.danhSachGheDangDat, sum: payload.sum, danhSachVe: payload.danhSachVe, isSelectedSeat: payload.isSelectedSeat }
        }
        case DatVeType.BOOK_TICKET_SUCCESS: {
            return { ...state, bookTicketSuccess: payload, activeStep: 2 }
        }
        case DatVeType.SET_DATA_TICKET_PAYMENT: {
            return { ...state, paymentMethod: payload.paymentMethod }
        }
        case DatVeType.SET_READY_TO_PAYMENT: {
            return { ...state, isReadyPayment: payload.isReadyPayment, activeStep: payload.activeStep }
        }
        case DatVeType.RESET_DATA_BOOKTICKET: {
            return { ...state, arrDatVe: {}, danhSachVe: [], isSelectedSeat: false, danhSachGheDangDat: [], sum: 0, activeStep: 0, paymentMethod: "", isReadyPayment: false, bookTicketSuccess: null, timeOut: false, refreshKey: Date.now(), alertOver: false }
        }
        case DatVeType.TIMEOUT: {
            return { ...state, timeOut: true }
        }
        case DatVeType.SET_ALERT_OVER: {
            return { ...state, alertOver: true }
        }
        case DatVeType.RESET_ALERT_OVER: {
            return { ...state, alertOver: false }
        }
        case 'DAT_GHE': {
            state.listSeatSelectedOthers = payload.arrGheKhachDat;
            return { ...state }
        }
        default:
            return state
    }
}
export default DatVeReducer