<template lang="">
        <tr>
            <td><a href="javascript:void(0)">{{ id }}</a></td>
            <td>{{  fullname }}</td>
            <td><span class="text-muted"><i class="fa fa-clock-o"></i> {{ date }}</span> </td>
            <td>{{ infos }}</td>
            <td>{{ list.Email }}</td>
            <td>{{ list.phone }}</td>
            <td>
                <router-link v-if='permission(["users.edit","master.admin"])' to="" @click="passID(list.Email)" class="btn btn-sm btn-info btn-rounded btn-outline" data-toggle="modal" data-target="#modal-rightshow">show user</router-link>
                <router-link v-if='permission(["users.edit","master.admin"])' :to="{name: 'uedit', params: {user: list.Email} }" class="btn btn-sm btn-primary btn-rounded btn-outline " data-toggle="modal" data-target="#modal-right">edit user</router-link>
                <router-link to="" v-if='permission(["users.delete","master.admin"])' @click="delID(list.Email)" class="btn btn-sm btn-danger btn-rounded btn-outline">delete user</router-link>
            </td>
        </tr>
<teleport to='body'>
<formModal :user="store.oneUser" v-if="ispop">
<template #modalv>
    View Modal Pop-UP
</template>
<template #formv>
    USER DETAILS
</template>    
  
</formModal>
</teleport>

</template>
<script setup>

import { ref, computed, inject } from "vue";
import formModal from './forms/formModal.vue'
import { fetchUsers }from "../stores/fetchUsers"
const store = fetchUsers()
const props = defineProps({
    msg: Number,
    list: Object,
})
const permission = inject("permission")
const getuData = ref({})
const ispop = ref(false)
const passID = async (user) => {
    ispop.value = true
    await store.getListUser(user)
}
const delID = async (user) => {
   const getuData =  await store.delUser(user)
}
const fullname = computed(() => props.list.fullname?.fname + " " + props.list.fullname?.lname)
const infos = computed(() => props.list.otherInfo?.age)
const id = computed(() => props.list._id.substring(15,18))
const date = computed(() => props.list.Date)
</script>
<style lang="">
    
</style>