import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../components/index/Cont'
import Course from '../components/course/Course'
import Recommend from '../components/course/Recommend'
import NewComment from '../components/course/NewComment'
import Detail from '../components/course/Detail'
import Subject from '../components/subject/Subject'

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
		component: Recommend,
	},
	{
		name: 'all',
		path: '/all',
		component: Course,
	},
	{
		name: 'tip',
		path: '/tip/:id',
		component: Subject,
	},
	{
		name: 'comment',
		path: '/course/:id',
		component: NewComment,
	},
	{
		name: 'course',
		path: '/course/:id',
		component: Detail,
	}],
})
