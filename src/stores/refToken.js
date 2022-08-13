import { defineStore } from "pinia";
import { baseApi } from "../router/api/auth";
import { useAuth } from "./useAuth";
export const refreshAuth = defineStore('refreshId',{
    state: () => {
        return {
            refID: {}
        }
    },
    
    actions: {
       async refresh(){
            try {
                const token = useAuth()
                const refresh = await baseApi.get("/refresh")
                token.authToken = refresh.data.accessToken
                this.refID =  refresh.data.accessToken
                token.isAuth = true
                return refresh.data.accessToken;
            } catch (error) {
                if (error?.response?.data?.message) {
                    alert(error.response.data.message)
                }
             else alert(error.message)
            }
        }
    }
})