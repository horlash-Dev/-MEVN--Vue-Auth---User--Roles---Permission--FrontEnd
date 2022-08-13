import { defineStore } from "pinia";
import { baseApi } from "../router/api/auth"
import { fetchUsers } from "./fetchUsers";
import jwtDecode from "jwt-decode";
export const useAuth = defineStore('userAuth', {
    state: () => ({        
    authToken: {},
    isAuth: false,
    getRolePermissions: []
    }),
    getters: {

    },
    actions: {
        async UacPermission (role, user) {
            try {
                const getPerms = await baseApi.post("/access",{data: { user, role }})
                this.getRolePermissions = getPerms.data.permissions_
            } catch (error) {
                if (error?.response?.data?.message) {
                    alert(error.response.data.message)
                }
             else alert(error.message)
            }
            
        },
        async UserLogin (email,password) {
            try {
                const getUser = fetchUsers()
            const response = await baseApi.post("/login",
           {
            data: {email:email,password:password}
           });
        
           this.authToken = response.data.authToken;
           let user = await jwtDecode(this.authToken)
           const getPer_ = await this.UacPermission(user.role,user.Email)
            if (this.getRolePermissions.length > 0) {
                await getUser.showUser(user.Email) 
                getUser.userRole = user.role
                this.isAuth = true
                this.$router.replace({name: "home", params:{user: user.Email}})
                alert("LOGGED IN!!")   
            }
            } catch (error) {
                if (error?.response?.data?.message) {
                    alert(error.response.data.message)
                }
             else alert(error.message)
            }
        
        },
        async UserReg (data) {
            try {
                const getUser = fetchUsers()
            const response = await baseApi.post("/register",
           {
            data: data
           });
        
           this.authToken = response.data.authToken;
           let user = await jwtDecode(this.authToken)
           const getPer_ = await this.UacPermission(user.role,user.Email)
            if (this.getRolePermissions.length > 0) {
           await getUser.showUser(user.Email) 
           getUser.userRole = user.role
           this.isAuth = true
           this.$router.replace({name: "home", params:{user: user.Email}})
           alert("USER CREATED!!")
            }
            } catch (error) {
                if (error?.response?.data?.message) {
                    alert(error.response.data.message)
                }
             else alert(error.message)
            }
        
        },
        async signOut () {
            try {
            const getUser = fetchUsers()
            const response = await baseApi.post("/logout");
            getUser.$reset()
            this.$reset()
            this.$router.replace({path: "/"})
            } catch (error) {
                if (error?.response?.data?.message) {
                    alert(error.response.data.message)
                }
             else alert(error.message)
            }
        
        }
    }
})