import { DatVeType } from "../../types/ManagerDatVeType"

const initialState = {
    arrDatVe: []
}

const DatVeReducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case DatVeType.GET_DATVE: {
            state.arrDatVe = payload
            return { ...state }
        }


        default:
            return state
    }
}
export default DatVeReducer