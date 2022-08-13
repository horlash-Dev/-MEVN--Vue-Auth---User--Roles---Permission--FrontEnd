<template lang="">
    <div>

              
              <div class="modal modal-right fade" id="modal-rightshow" tabindex="-1">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title"><slot name="modalv" /></h5>
                      <button type="button" class="close" data-dismiss="modal">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body">
                        <div class="box">
                            <h5 class="box-header"><slot name="formv" /></h5>
                            <div class="box-body box-profile">            
                              <div class="row">
                                <div class="col-12">
                                    <div>
                                        <p>Email :<span class="text-gray pl-10">{{ user.Email }} </span> </p>
                                        <p>Phone :<span class="text-gray pl-10">{{ user.phone }}</span></p>
                                        <p>Fulname :<span class="text-gray pl-10">{{ user.fullname }}</span></p>
                                        <p>User Role :<span class="text-gray pl-10">{{ user.phone }}</span></p>
                                    </div>
                                </div>
                            
                              </div>
                            </div>
                            <!-- /.box-body -->
                          </div>
                    </div>
                    <div class="modal-footer modal-footer-uniform">
                      <button type="button" class="btn btn-rounded btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                  </div>
                </div>
              </div>  
    </div>
</template>
<script setup>
    import { fetchUsers }from "../../stores/fetchUsers"
import { computed, onMounted } from 'vue'
const props = defineProps({user: Object})
const store = fetchUsers()
const emit = defineEmits(['updateForm'])
</script>
<style lang="">
    
</style>