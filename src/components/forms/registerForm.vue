<template lang="">
    <div>
        <form @submit.prevent="submitData">
            <div class="form-group">
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text bg-transparent text-white"><i class="ti-user"></i></span>
                    </div>
                    <input type="text" class="form-control pl-15 bg-transparent text-white plc-white" v-model="form.firstname" placeholder="firstname">
                </div>
            </div>
            <div class="form-group">
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                        <span class="input-group-text bg-transparent text-white"><i class="ti-user"></i></span>
                    </div>
                    <input type="text" class="form-control pl-15 bg-transparent text-white plc-white" v-model="form.lastname" placeholder="lastName">
                </div>
            </div>
        <div class="form-group">
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text bg-transparent text-white"><i class="ti-user"></i></span>
                </div>
                <input type="text" class="form-control pl-15 bg-transparent text-white plc-white" v-model="form.email" placeholder="email">
            </div>
        </div>

        <div class="form-group">
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text bg-transparent text-white"><i class="ti-user"></i></span>
                </div>
                <select id="ages" class="form-control pl-15 bg-transparent  plc-white" v-model='form.age'>
                    <option disabled>select any age</option>
                    <option v-for="(age, index) in ages">{{age}}</option>
                </select>
            </div>
        </div>
        <div class="form-group">
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text bg-transparent text-white"><i class="ti-user"></i></span>
                </div>
                <select  class="form-control pl-15 bg-transparent  plc-white" v-model='form.postCount'>
                    <option disabled>select any post-count</option>
                    <option v-for="(post, index) in ages">{{post}}</option>
                </select>
            </div>
        </div>
        <div class="form-group">
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text bg-transparent text-white"><i class="ti-user"></i></span>
                </div>
                <input type="text" class="form-control pl-15 bg-transparent text-white plc-white" v-model="form.phone" placeholder="phone">
            </div>
        </div>
        <div class="form-group">
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text  bg-transparent text-white"><i class="ti-lock"></i></span>
                </div>
                <input type="password" v-model="form.password" class="form-control pl-15 bg-transparent text-white plc-white" placeholder="Password">
            </div>
        </div>
        <div class="form-group">
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text  bg-transparent text-white"><i class="ti-lock"></i></span>
                </div>
                <input type="password" v-model="cpassword" class="form-control pl-15 bg-transparent text-white plc-white" placeholder="repeat Password">
            </div>
        </div>
        <div class="row">
      
            <!-- /.col -->
            <div class="col-12 text-center">
            <button type="submit" class="btn btn-info btn-rounded mt-10">SIGN UP</button>
            </div>
        
            <!-- /.col -->
        </div>
    </form>
    </div>
</template>
<script setup>
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { useAuth} from '../../stores/useAuth'
// const email = ref("")
 const cpassword = ref("")
// const age = ref("")
const store = useAuth()
const router = useRouter()
const ages = ['20','30','10','60'];
const form = reactive({
    email:null, password:null, age:null, firstname:null, lastname:null, postCount:null, phone:null
})
const submitData = async () => {
    if (cpassword.value != form.password) {
        alert("password mis-match")
    } else{
 await store.UserReg(form)
    }

}

</script>
<style lang="">
    
</style>