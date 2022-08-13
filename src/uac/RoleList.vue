<template lang="">
            <tr v-for="(all, index) in showAll" :key="all._id">
                <td>{{ index + 1 }}</td>
            <td><a href="javascript:void(0)"></a>{{ all.name }}</td>
            <td class="badge badge-dark sm p-1 m-1" v-for="(permission, index) in all.permissions">{{ permission.name }}</td>
            <td><router-link :to="{name: 'edit.roles', params: {role: all.slug} }" class="btn btn-sm btn-primary btn-rounded btn-outline">modify Role</router-link></td>
            
        </tr>
</template>
<script setup>
import  useAuthApi  from "../router/api/authHook";
import { onMounted, ref } from "vue";
const showAll = ref({})
let id = 1;
    const privateAuth = useAuthApi();
    const getRoles = async () => {
        try {
        const roles = await privateAuth.get("/roles")
        showAll.value = roles.data.all;
        } catch (error) {
               if (error?.response?.data?.message) {
                    alert(error.response.data.message)
                }
             else alert(error.message)
        }
    }

    onMounted(() => {
        getRoles()
    })
</script>
<style lang="">
    
</style>