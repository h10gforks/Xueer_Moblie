import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../components/index/Cont'
import CourseList from '../components/course/CourseList'
import Detail from '../components/course/Detail'

Vue.use(VueRouter)
module.exports = new VueRouter({
	base: __dirname,
	routes: [{
		name: 'index',
		path: '/',
		component: Index,
	},
	{
		name: 'recommend',
		path: '/recommend',
		component: CourseList,
	},
	{
		name: 'tip',
		path: '/tip/:id',
		component: CourseList,
	},
	{
		name: 'course',
		path: '/course/:id',
		component: Detail,
	}],
})
