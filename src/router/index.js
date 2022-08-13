import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import About from '../views/AboutView.vue'
import { useAuth } from "../stores/useAuth"
import { checkPermission } from './api/PermissionCheck'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: {path: "login"}
    },
    {
      path: '/:user/account',
      name: 'home',
      component: HomeView,
      meta: { requiresAuth: true, permission: ["master.admin","permissions","users.view"] }
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/auth/loginPage.vue"),
      meta: { layout: 'AuthLayout'}
    },
    {
      path: "/register",
      name: "register",
      component: () => import("../views/auth/registerPage.vue"),
      meta: { layout: 'AuthLayout'}
    },
    {
      path: '/about',
      name: 'about',
      component: About,
       meta: {  requiresAuth: false }
    },
    {
      path: '/all-users',
      name: 'users',
      component: () => import("../views/UsersView.vue"),
      meta: { requiresAuth: true, permission: ["master.admin","users.view"] }
    },
    {
      path: "/all-users/edit/:user",
      name: "uedit",
      component: () => import("../views/UserEdit.vue"),
      meta: { requiresAuth: true, permission: ["master.admin","users.edit"] }
    },
    {
      path: "/access/permissions",
      name: "permissions",
      component: () => import("../views/uac/Permission.vue"),
      meta: { requiresAuth: true, permission: ["master.admin","permissions"] }
    },
    {
      path: "/add/permissions",
      name: "add.permissions",
      component: () => import("../views/uac/createPermission.vue"),
      meta: { requiresAuth: true, permission: ["master.admin"] }
    },
    {
      path: "/access/roles",
      name: "roles",
      component: () => import("../views/uac/Role.vue"),
      meta: { requiresAuth: true.valueOf, permission: ["master.admin","roles"] }
    },
    {
      path: "/access/user/roles",
      name: "user.roles",
      component: () => import("../views/uac/userRoles.vue"),
      meta: { requiresAuth: true, permission: ["master.admin","roles"] }
    },
    {
      path: "/edit/:role/role",
      name: "edit.roles",
      component: () => import("../views/uac/editRole.vue"),
      meta: { requiresAuth: true, permission: ["master.admin","roles"] }
    },
    {
      path: "/change/:user/role/:role",
      name: "user._role",
      component: () => import("../views/uac/attachRole.vue"),
      meta: { requiresAuth: true, permission: ["master.admin","roles"] }
    },
    {
      path: "/error/403",
      name: "error_",
      component: () => import("../error/Error_403.vue"),
      meta: { requiresAuth: false, layout: 'AuthLayout'}
    },

  ]
})

router.beforeEach(async (to, from) => {
  const auth = useAuth()
  const isAuthenticated = auth.isAuth
  const userAccess = checkPermission(to.meta.permission)
  if (!isAuthenticated && to.meta.requiresAuth) {
    return { name: 'login', query: {redirect: to.fullPath} }
  }
  if (to.meta.permission && isAuthenticated && !userAccess) {
    return { name: "error_"}
  }
   if (isAuthenticated && to.path === "/login") return { name: from.fullPath}
   if (isAuthenticated && to.path === "/register") return { name: from.fullPath}


})
export default router
