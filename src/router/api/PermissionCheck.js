import { ref } from 'vue'
import { useAuth } from "../../stores/useAuth"

export const checkPermission = (permissions) => {
   
    const auth = useAuth()
    let rolePer = auth.getRolePermissions
    let allowedPer = permissions
    if (permissions) {
        const result = rolePer.map(name => allowedPer.includes(name.slug)).find(name => name === true)
        if(!result) return false;
        return result
    }
    return false

}

