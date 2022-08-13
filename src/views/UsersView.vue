<template lang="">
    <div>
        	<div class="col-12 mt-10">
			  <div class="box">
				<div class="box-header with-border">
				  <h4 class="box-title">Users Table</h4>
				  <div class="box-controls pull-right">
					<div class="lookup lookup-circle lookup-right">
					  <input type="text" name="s">
					</div>
				  </div>
				</div>
				<!-- /.box-header -->
                <div class="box-body no-padding">
					<div class="table-responsive">
					  <table class="table table-hover">
                            <tr>
                              <th scope="col"># ID </th>
                              <th scope="col">Username</th>
                              <th scope="col">Date</th>
                              <th scope="col">Infos(age)</th>
                              <th scope="col">email</th>
                              <th scope="col">phone</th>
                              <th scope="col">actions</th>
                            </tr>
                            
                    <UserList :msg="digit" v-for="(user, index) in users" :key="user._id" :list="user"/>
                    
                </table> 
					</div>
				</div>
				<!-- /.box-body -->
			  </div>
			  <!-- /.box -->
			</div>
    </div>
</template>
<script setup>
import UserList from '@/components/UserList.vue'
import { fetchUsers }from "../stores/fetchUsers"
import { computed, onMounted, onUnmounted, ref } from 'vue'
const store = fetchUsers()
let digit = 345;
const all_profile = ref([])
const getUsers = async () => {

		const response = await store.fetchAll()
		all_profile.value = response
}
onMounted(() => {
getUsers()
}),
onUnmounted(() => {
	store.oneUser = {}
})
const users = computed(() => all_profile.value)
</script>
<style lang="">
    
</style>