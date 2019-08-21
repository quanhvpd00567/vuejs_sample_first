import Home from './views/Home.vue'
import About from './views/About.vue'
import Contact from './views/Contact.vue'
import ViewLogin from './views/Login.vue'

const router = [
    {
        path: '/',
        name: 'home',
        component: Home
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
        component: ViewLogin
    },
    // otherwise redirect to home
    { path: '*', redirect: '/' }
]

export default router