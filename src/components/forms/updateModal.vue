<template lang="">
    <div>

                    <div class="col-12">
                        <!-- Basic Forms -->
                          <div class="box">
                            <div class="box-header with-border">
                              <h4 class="box-title"><slot name="forme" /></h4>
                            </div>
                            
                            
                             <form @submit.prevent="updateForm">
                                <div class="box-body">
                                    <h4 class="mt-0 mb-20">EDIT USER INFO</h4>
                                    <div class="form-group">
                                        <label>FisrtName:</label>
                                        <input type="text" class="form-control" v-model="firstname" placeholder="Enter name">
                                    </div>
                                    <div class="form-group">
                                        <label>lastName:</label>
                                        <input type="text" class="form-control" v-model="lastname" placeholder="Enter name">
                                    </div>
                                    <div class="form-group">
                                        <label>Email address:</label>
                                        <input type="email" class="form-control" v-model="userData.Email" placeholder="Enter email">
                                    </div>
                                    <div class="form-group">
                                        <label>phone</label>							
                                        <input type="tel" class="form-control" v-model="userData.phone" placeholder="Phone number">
                                    </div>
                                    
                                    <hr>
        
                                </div>
                               
                                <div class="box-footer">
                                    <button type="submit" class="btn btn-rounded btn-success pull-right">update</button>
                                </div>
                            </form>
                          </div>
                          
                          <!-- /.box -->			
                    </div>
    </div>
</template>
<script setup>
    import {  reactive, ref } from 'vue'
    import { fetchUsers }from "../../stores/fetchUsers"
import { computed, onMounted, onBeforeMount } from 'vue'
import { useRoute } from 'vue-router'
const store = fetchUsers()
const userData = ref({})
const firstname = ref("")
const lastname = ref("")

const route = useRoute()
const passID = async () => {
   const getuData =  await store.showUser(route.params.user)
   userData.value = getuData
   firstname.value = userData.value?.fullname?.fname
   lastname.value = userData.value?.fullname?.lname
}
onBeforeMount(() => {
    passID()
})

const updateForm = async () => {
    let Fname = firstname.value
    let Lname = lastname.value
    const update = {Fname, Lname, ...userData.value}
    await store.updateUser(route.params.user,update)
}
</script>
<style lang="">
    
</style>