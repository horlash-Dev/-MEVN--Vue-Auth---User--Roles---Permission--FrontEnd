            <template lang="">
                    <div class="col-12">
                        <!-- Basic Forms -->
                          <div class="box">
                            <div class="box-header with-border">
                              <h4 class="box-title">edit {{permissions.name}} </h4>
                            </div>
                            
                             <form @submit.prevent="saveAttachedPer(permissions.slug)">
                                <div class="box-body">
                                    <h4 class="mt-0 mb-20">edit {{permissions.name}} </h4>
                                 
                                    <div class="form-group">
                                        <label>Role</label>							
                                        <input type="text" class="form-control" disabled v-model="permissions.name" placeholder="Name">
                                    </div>
                                    <div class="form-group">
                                        <label>Change {{permissions.name}} PERMISSION </label>
                                        
                                        <Multiselect
                                        v-model="permission_save"
                                        mode="tags"
                                        :close-on-select="false"
                                        :options="newPer_"
                                        />
                                      </div>
                                      <b>Existing Permissions <i>kindly reattach existing and new permission before saving!</i></b> <br>
                                      <span class="badge badge-primary sm p-1 m-1" v-for="(permission, index) in permissions.permissions">{{ permission.name }}</span>
                                </div>
                               
                                <div class="box-footer">
                                    <button type="submit" class="btn btn-rounded btn-success pull-right">Update</button>
                                </div>
                            </form>
                          </div>
                          
                          <!-- /.box -->			
                    </div>
</template>
<script setup>
import { ref, onBeforeMount } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import  useAuthApi  from "../../router/api/authHook";
import Multiselect from "@vueform/multiselect"
const permissions = ref({})
const permission_all = ref([])
const permission_save = ref([])
const newPer_ = ref({})
const privateAuth = useAuthApi()
const router = useRouter()
const route = useRoute()
const editRole = async (role) => {
        try {
        const m_permission = await privateAuth.get(`/edit/${role}/permissions`)
        permissions.value = m_permission.data.role
        permission_all.value = m_permission.data.per_
        const per_array = permission_all.value.map(name => ({[name._id]: name.name}))
        newPer_.value = Object.assign(...per_array, {})
        } catch (error) {
               if (error?.response?.data?.message) {
                    alert(error.response.data.message)
                }
             else alert(error.message)
        }
    }
    const saveAttachedPer = async (role) => {
        try {
        const attach_permission = await privateAuth.put(`/attach/${role}/permissions`,{data: permission_save.value})
        alert(attach_permission.data.message)
        router.replace({name: 'roles'})
        } catch (error) {
               if (error?.response?.data?.message) {
                    alert(error.response.data.message)
                }
             else alert(error.message)
        }
    }
    onBeforeMount(() => {
        editRole(route.params.role)
    })
</script>
<style src="@vueform/multiselect/themes/default.css">
    
</style>