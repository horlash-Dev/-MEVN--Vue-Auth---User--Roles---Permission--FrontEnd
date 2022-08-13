                <template lang="">
                    <div class="col-12">
                        <!-- Basic Forms -->
                          <div class="box">
                            <div class="box-header with-border">
                              <h4 class="box-title">Attach New Role to {{userD.user?.Email}} </h4>
                            </div>
                            
                            
                             <form @submit.prevent="attachUserRole(userD.user?._id)">
                                <div class="box-body">
                                    <h4 class="mt-0 mb-20">FORM UPDATE</h4>
                                 
                                    <div class="form-group">
                                        <label>Role</label>							
                                        <input type="text" class="form-control" disabled v-model="urole.slug" placeholder="Name">
                                    </div>
                                    <div class="form-group">
                                        <label>New Role </label>
                                        <select v-model="newrole" class="form-control"  placeholder="Select a permission">
                                            <option v-for="(role, index) in userD.roles" :selected="role._id == urole._id" :value="role._id">{{ role.name }} </option>
                                        </select>
                                      </div>
        
                                </div>
                               
                                <div class="box-footer">
                                    <button type="submit" class="btn btn-rounded btn-success pull-right">Update Role</button>
                                </div>
                            </form>
                          </div>
                          
                          <!-- /.box -->			
                    </div>
</template>
<script setup>
import { ref, onBeforeMount } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import  useAuthApi  from "../router/api/authHook";
const userD = ref({})
const urole = ref({})
const newrole = ref("")
const privateAuth = useAuthApi()
const route = useRoute()
const router = useRouter()

const getUserRelate = async () => {
        try {
        const relation = await privateAuth.get(`/confirm/${route.params.user}/user/${route.params.role}`)
        userD.value = relation.data
        urole.value = relation.data.role
        newrole.value = relation.data.role?._id
        } catch (error) {
               if (error?.response?.data?.message) {
                    alert(error.response.data.message)
                }
             else alert(error.message)
        }
    }
    const attachUserRole = async (user) => {
        try {
        const save_role = await privateAuth.put(`/attach/${user}/role`,{
            data: { oldID: urole.value._id, role: newrole.value }
        })
        alert(save_role.data.role)
        router.replace({name: 'user.roles'})
        } catch (error) {
               if (error?.response?.data?.message) {
                    alert(error.response.data.message)
                }
             else alert(error.message)
        }
    }
    onBeforeMount(() => {
       getUserRelate()
    })
</script>
<style lang="">
    
</style>