<template lang="">
            <tr v-for="(all, index) in showAll" :key="all._id">
            <td><a href="javascript:void(0)"></a> {{ index + 1 }} </td>
            <td><a href="javascript:void(0)"></a>{{ all.user_id?.Email }}</td>
            <td class="badge badge-primary badge-pill badge-outline  m-1" >{{ all.role_id.slug }}</td>
           <td> <router-link :to="{name: 'user._role', params: {user: all.user_id?.Email || 'null', role: all.role_id?.slug } }" class="btn btn-sm btn-primary btn-rounded btn-outline ">Attach Role

           </router-link></td>
          </tr>
</template>
<script setup>
import  useAuthApi  from "../router/api/authHook";
import { onMounted, ref } from "vue";
const showAll = ref({})
let id = 1;
    const privateAuth = useAuthApi();
    const getUserRoles = async () => {
        try {
        const roles = await privateAuth.get("/user-roles")
        showAll.value = roles.data.all;
        } catch (error) {
               if (error?.response?.data?.message) {
                    alert(error.response.data.message)
                }
             else alert(error)
        }
    }

    onMounted(() => {
        getUserRoles()
    })
</script>
<style lang="">
    
</style>