import axios from "axios";
import {ProfileType} from "../components/Profile/ProfileContainer";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "5387a064-53c2-41e2-a48f-3c0a2fb2fa92"
    }
})

export const userAPI = {
    requestUsers (currentPage: number = 1, pageSize: number = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
            return response.data
        })
    },
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
    },

    getProfile (userId: string) {
        console.warn("Obsolete method. Please use profileAPI object")
        return profileAPI.getProfile(userId)
    }
}

export const profileAPI = {
    getProfile (userId: string) {
        return instance.get(`profile/` + userId)
    },
    getStatus (userId: string) {
        return instance.get(`profile/status/` + userId)
    },
    updateStatus (status: string) {
        return instance.put(`profile/status`, {status: status})
    },
    savePhoto(photoFile: File) {
        const formData = new FormData()
        formData.append('image', photoFile)
        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    },
    saveProfile(profile:ProfileType) {
        return instance.put(`profile`, profile)
    }
}


export const authAPI = {
    authMe () {
        return instance.get(`auth/me`)
    },
    login (email: string, password: string, rememberMe = false, captcha:string) {
        return instance.post(`auth/login`, {email, password, rememberMe, captcha})

    },

    logOut () {
        return instance.delete(`auth/login`, )
    }
}

export const securityAPI = {
    getCaptchaUrl () {
        return instance.get(`security/get-captcha-url`)
    }
}





