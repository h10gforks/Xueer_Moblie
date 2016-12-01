import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Index from '../components/index/Cont.vue'
import CourseList from '../components/course/CourseList.vue'
import Detail from '../components/course/Detail.vue'

module.exports = new VueRouter({
    // mode: 'history',
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
        	component: CourseList
        },
        {
            name: 'tip',
            path: '/tip/:id',
            component: CourseList
        },
        {
            name: 'course',
            path: '/course/:id',
            component: Detail
        }
    ]
})