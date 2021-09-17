import { GROUPID } from "../util/settings/config";
import { commentService } from "./baseService";

export class ManagerCommentService extends commentService {
    constructor() {
        super()
    }
    GetCommentService = () => {
        return this.get(`/commentMovie`)
    }


}
export const ManagerComment = new ManagerCommentService()