<script setup>
import HomeContent from '@/components/HomeContent.vue'
import { fetchUsers } from "../stores/fetchUsers"
import { computed, onMounted, ref } from "vue";
import { useRoute, useRouter } from 'vue-router'

const store= fetchUsers()
const route = useRoute()
//const user_profile = computed(() =>  store.getUser )
const user_role = computed(() =>  store.userRole )
const profile = ref({})
const getProfile = async () => {

const response = await store.showUser(route.params.user)
profile.value = response
}
onMounted(() => {
		getProfile()

})
</script>

<template>
<div>
	
	<router-link :to="{name: 'roles'} " class="btn btn-sm btn-info btn-rounded btn-outline">roles </router-link>
	<router-link :to="{name: 'permissions'} " class="btn btn-sm btn-info btn-rounded btn-outline">permmissions </router-link>
	<router-link :to="{name: 'user.roles'} " class="btn btn-sm btn-primary btn-rounded btn-outline">user roles </router-link>
	<router-link :to="{name: 'add.permissions'}" class="btn btn-sm btn-success btn-rounded btn-outline">add permmision </router-link>
	<HomeContent :userInfo="profile" :fullname="store.getName" :role="user_role"/>
  </div>
</template>
