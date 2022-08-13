<template lang="">
    <div>
        <form @submit.prevent="submitData">
        <div class="form-group">
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text bg-transparent text-white"><i class="ti-user"></i></span>
                </div>
                <input type="text" class="form-control pl-15 bg-transparent text-white plc-white" v-model="email" placeholder="email">
            </div>
        </div>
        <div class="form-group">
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text  bg-transparent text-white"><i class="ti-lock"></i></span>
                </div>
                <input type="password" v-model="password" class="form-control pl-15 bg-transparent text-white plc-white" placeholder="Password">
            </div>
        </div>
        <div class="row">
         
            <div class="col-12 text-center">
            <button type="submit" class="btn btn-info btn-rounded mt-10">SIGN IN</button>
            </div>
            <!-- /.col -->
        </div>
    </form>
    </div>
</template>
<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuth} from '../../stores/useAuth'
const email = ref("")
const password = ref("")
const store = useAuth()
const router = useRouter()

const submitData = async () => {
 await store.UserLogin(email.value,password.value)

}

</script>
<style lang="">
    
</style>