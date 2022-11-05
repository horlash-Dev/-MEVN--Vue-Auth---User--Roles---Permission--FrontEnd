<template>
<div>
          <aside class="main-sidebar">
    <!-- sidebar-->
    <section class="sidebar">	
		
        <div class="user-profile">
			<div class="ulogo">
				 <a href="index.html">
				  <!-- logo for regular state and mobile devices -->
					 <div class="d-flex align-items-center justify-content-center">					 	
						  <img src="" alt="">
						  <h3><b>Super</b> Admin</h3>
					 </div>
				</a>
			</div>
        </div>
      
      <!-- sidebar menu-->
      <ul class="sidebar-menu" data-widget="tree">  
		  
        		<li  v-if='permission(["users.view"])'>
          <router-link :to="{name: 'home', params:{user: email || ' '}}">
            <i data-feather="grid"></i>
			<span>Profile</span>
          </router-link>
        </li> 

        		<li>
          <router-link :to="{path: '/about'}">
            <i data-feather="file"></i>
			<span>about</span>
          </router-link>
        </li>  

          <li  v-if='permission(["users.view","master.admin"])'>
          <router-link :to="{name: 'users'}">
            <i data-feather="pie-chart"></i>
			<span>All Users</span>
          </router-link>
        </li>  
		
        <li class="treeview" v-if='permission(["permissions","master.admin"])'>
          <a href="#">
            <i data-feather="mail"></i> <span>Permission</span>
            <span class="pull-right-container">
              <i class="fa fa-angle-right pull-right"></i>
            </span>
          </a>
          <ul class="treeview-menu">
            <li><router-link :to="{name: 'permissions'}"><i class="ti-more"></i>All Permission</router-link></li>
            <li v-if='permission(["master.admin"])'><router-link :to="{name: 'add.permissions'}" ><i class="ti-more"></i>Create Permission</router-link ></li>
          </ul>
        </li>

        <li class="treeview" v-if='permission(["roles","master.admin"])'>
          <a href="#">
            <i data-feather="server"></i> <span>Roles</span>
            <span class="pull-right-container">
              <i class="fa fa-angle-right pull-right"></i>
            </span>
          </a>
          <ul class="treeview-menu">
            <li><router-link :to="{name: 'roles'}"><i class="ti-more"></i>All Roles</router-link></li>
            <li><router-link :to="{name: 'user.roles'}"><i class="ti-more"></i>User Roles</router-link></li>
            <!-- <li><router-link :to="{name: 'edit.roles'}" ><i class="ti-more"></i>edit Role</router-link ></li> -->
          </ul>
        </li>
		  
    <li class="treeview">
    		<a href="javascript:void(0)" @click="auth.signOut" class="link" data-toggle="tooltip" title="" data-original-title="Logout"><i class="ti-lock"></i>Logout</a>
    </li>
      </ul>
    </section>
	
	<div class="sidebar-footer">
		<!-- item-->
		<a href="javascript:void(0)" @click="auth.signOut" class="link" data-toggle="tooltip" title="" data-original-title="Logout"><i class="ti-lock"></i></a>
	</div>
  </aside>
  </div>
</template>
<script setup>
//import { RouterLink, RouterView } from 'vue-router'
import { computed, inject } from 'vue'
import { fetchUsers } from "@/stores/fetchUsers"
import { useAuth } from "@/stores/useAuth"

const store = fetchUsers()
const auth = useAuth()
const email = computed(() => store.getUser?.Email)

const permission = inject("permission")
</script>