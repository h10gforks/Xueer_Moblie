import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Index from '../components/index/Cont.vue'
import Recommend from '../components/index/Recommend.vue'
import Subject from '../components/subject/Subject.vue'

module.exports = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes: [
        { 
        	name: 'index',
        	path: '/', 
        	component: Index,
        },
        { 
        	name: 'recommend',
        	path: '/recommend', 
        	component: Recommend 
        },
        {
            name: 'tip',
            path: '/tip/:id',
            component: Subject
        }
    ]
})