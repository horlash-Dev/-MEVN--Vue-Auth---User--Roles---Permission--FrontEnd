import { authApi } from "./auth";
import { useAuth } from "../../stores/useAuth";
import { refreshAuth } from "../../stores/refToken";

const useAuthapi = () => {
const auth = useAuth()
const refreshState = refreshAuth()
const responseChecker =  authApi.interceptors.response.use(
        response => response,
        async (error) => {
            console.log('ffg');
            const prevReq = error?.config
            if (error?.response?.status === 403 && !prevReq?.sent) {
                prevReq.sent = true;
                const reAuth = await refreshState.refresh()
                prevReq.headers["Authorization"] = `Bearer ${reAuth}`
               return authApi(prevReq)
            }
            return Promise.reject(error)
        }
    )
  const requestChecker =  authApi.interceptors.request.use(
        config => {
            if (!config.headers['Authorization']) {
                config.headers['Authorization'] = `Bearer ${auth.authToken}`;
            } 
            return config;
        }, (error) => Promise.reject(error)
    )
return authApi
}

export default useAuthapi