import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "5387a064-53c2-41e2-a48f-3c0a2fb2fa92"
    }
})

export const userAPI = {
    getUsers (currentPage: number = 1, pageSize: number = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
            return response.data
        })
    }
}

export const followAPI = {
    unfollow(userId: number) {
       return instance.delete(`follow/${userId}`)
           .then(response => {
           return response.data
       })
    },
    follow(userId: number) {
        return instance.post(`follow/${userId}`)
            .then(response => {
            return response.data
        })
    }

}



