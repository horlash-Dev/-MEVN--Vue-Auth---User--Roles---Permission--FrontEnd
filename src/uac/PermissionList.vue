<template lang="">
            <tr v-for="(all, index) in showAll" :key="all._id">
                <td>{{ index + 1 }}</td>
            <td><a href="javascript:void(0)"></a>{{ all.name }}</td>
            <td>{{ all.slug }}</td>
            <router-link to="" @click="delPerms(all.slug)" class="btn btn-sm btn-danger btn-rounded btn-outline">delete</router-link>
            
        </tr>
</template>
<script setup>
import  useAuthApi  from "../router/api/authHook";
import { onMounted, ref } from "vue";
const showAll = ref({})
let id = 1;
    const privateAuth = useAuthApi();
    const getPerms = async () => {
        try {
        const permissions = await privateAuth.get("/permissions")
        showAll.value = permissions.data.all;
        } catch (error) {
               if (error?.response?.data?.message) {
                    alert(error.response.data.message)
                }
             else alert(error.message)
        }
    }

    const delPerms = async (name) => {
        try {
        const permission = await privateAuth.delete(`/permission/${name}/delete`)
        if(permission?.data.message == "deleted_") { alert("Deleted!"); await getPerms() }
        } catch (error) {
               if (error?.response?.data?.message) {
                    alert(error.response.data.message)
                }
             else alert(error.message)
        }
    }

    onMounted(() => {
        getPerms()
    })
</script>
<style lang="">
    
</style>