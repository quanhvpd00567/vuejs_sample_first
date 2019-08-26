import Home from './views/Home.vue'
import About from './views/About.vue'
import Contact from './views/Contact.vue'
import ViewLogin from './views/Login.vue'
import ViewRegister from './views/Register.vue'

const router = [
    {
        path: '/',
        name: 'home',
        component: Home,
        meta: {
            requiresAuth: false,
        }
    },
    {
        path: '/about',
        name: 'about',
        component: About
    },
    {
        path: '/contact',
        name: 'contact',
        component: Contact
    },
    {
        path: '/login',
        name: 'login',
        component: ViewLogin,
        meta: {
            viewLogin: true
        }
    },
    {
        path: '/register',
        name: 'register',
        component: ViewRegister,
        meta: {
            viewLogin: true
        }
    },
    // otherwise redirect to home
    { path: '*', redirect: '/' }
]

export default router