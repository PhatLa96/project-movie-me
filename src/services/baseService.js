import Axios from "axios"
import { DOMAIN, TOKEN, COMMENTAPI } from "../util/settings/config"

export class baseService {
    // put json về phía backend
    put = (url, model) => {
        return Axios({
            url: `${DOMAIN}/${url}`,
            method: "PUT",
            data: model,
            headers: { "Authorization": "Bearer " + localStorage.getItem(TOKEN) } //JWT
        })
    }
    post = (url, model) => {
        return Axios({
            url: `${DOMAIN}/${url}`,
            method: "POST",
            data: model,
            headers: { Authorization : "Bearer " + localStorage.getItem(TOKEN) } //JWT
        })
    }
    get = (url) => {
        return Axios({
            url: `${DOMAIN}/${url}`,
            method: "GET",
            headers: { "Authorization": "Bearer " + localStorage.getItem(TOKEN) } // Token yêu cầu từ backend chứng minh user đã đăng nhập rồi
        })
    }
    delete = (url) => {
        return Axios({
            url: `${DOMAIN}/${url}`,
            method: "DELETE",
            headers: { "Authorization": "Bearer " + localStorage.getItem(TOKEN) } // Token yêu cầu từ backend chứng minh user đã đăng nhập rồi
        })
    }
}
export class commentService {
    get = (url) => {
        return Axios({
            url: `${COMMENTAPI}/${url}`,
            method: "GET",
            headers: { "Authorization": "Bearer " + localStorage.getItem(TOKEN) } // Token yêu cầu từ backend chứng minh user đã đăng nhập rồi
        })
    }
    post = (url, model) => {
        return Axios({
            url: `${COMMENTAPI}/${url}`,
            method: "POST",
            data: model,
            headers: { "Authorization": "Bearer " + localStorage.getItem(TOKEN) } //JWT
        })
    }
    put = (url, model) => {
        return Axios({
            url: `${COMMENTAPI}/${url}`,
            method: "PUT",
            data: model,
            headers: { "Authorization": "Bearer " + localStorage.getItem(TOKEN) } //JWT
        })
    }
}