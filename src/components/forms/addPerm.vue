<template lang="">
  <div>
                    <div class="col-12">
                        <!-- Basic Forms -->
                          <div class="box">
                            <div class="box-header with-border">
                              <h4 class="box-title">add new</h4>
                            </div>
                            
                            
                             <form @submit.prevent="cForm">
                                <div class="box-body">
                                    <h4 class="mt-0 mb-20">New Permission</h4>
                                 
                                    <div class="form-group">
                                        <label>Name</label>							
                                        <input type="text" class="form-control" v-model="permission" placeholder="Name">
                                    </div>
                                    
                                    <hr>
        
                                </div>
                               
                                <div class="box-footer">
                                    <button type="submit" class="btn btn-rounded btn-success pull-right">ADD</button>
                                </div>
                            </form>
                          </div>
                          
                          <!-- /.box -->			
                    </div>
                  </div>
</template>
<script setup>
    import { ref } from 'vue'
import { useRouter } from 'vue-router'
import  useAuthApi  from "../../router/api/authHook";
const permission = ref(null)
const privateAuth = useAuthApi()
const router = useRouter()

const cForm = async () => {
  try {
    const addNew = await privateAuth.post("/create-permission", { data: {name: permission.value } })
    alert(addNew.data.message)
    router.push({name: "permissions"})
  } catch (error) {
    if (error?.response?.data?.message) {
        alert(error.response.data.message)
          }
   else alert(error.message)
  }
}
</script>
<style lang="">
    
</style>