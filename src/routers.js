import Home from './views/Home.vue'
import About from './views/About.vue'
import Contact from './views/Contact.vue'

const router = [
    {
        path: '/',
        name: 'home',
        component: Home,
        meta: {
            title: 'Home Page - Example App',
            metaTags: [
                {
                    name: 'description',
                    content: 'The home page of our example app.'
                },
                {
                    property: 'og:description',
                    content: 'The home page of our example app.'
                }
            ]
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
]

export default router