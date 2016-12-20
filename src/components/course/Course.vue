<template>
	<div v-scroll="scrollHandler">
		<selector v-if="is_selected"></selector>
		<reSort v-if="flag"></reSort>
        <courseList></courseList>
		<div v-if='isend' :class="$style.hint">(￣▽￣") 已经是全部的结果啦</div>
		<div v-else :class="$style.hint">(￣▽￣") 加载中</div>
	</div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'

import Selector from './Selector.vue'
import ReSort from './ReSort.vue'
import CourseList from './CourseList.vue'
import scroll from '../../directives/scroll.js'

export default {
	data(){
		return {
			flag: true,
		}
	},
	mounted(){
		this.$route.params.page == 'all' ? '' : this.flag = false
	},
	computed: {
		...mapGetters([
			'isend',
			'fetch_flag',
			'is_search'
		]),
		...mapState([
			'is_selected',
			'fetch_flag',
		])
	},
	methods: {
		...mapActions([
			'getPosition',
			'changePageFlagN',
			'changePageFlagY',
			'fetchCourse',
			'fetchCourseN',
		]),
		scrollHandler() {
			const scroll_height = document.body.scrollTop
			const doc_height = document.body.scrollHeight
			if (!this.window_height) {
				this.window_height = window.innerHeight
			}
			const height = scroll_height + this.window_height
			if (height == doc_height && this.fetch_flag == true) {
				this.changePageFlagN('fetch_flag')
				this.fetchCourse(this.$route.params.sort)
			}
			if (scroll_height == 0 && this.fetch_flag == true) {
				this.changePageFlagN('fetch_flag')
				this.fetchCourseN(this.$route.params.sort)
			}
		},
	},
	directives: {
		scroll,
	},
	components: {
		Selector,
        ReSort,
        CourseList,
	},
	beforeRouteLeave(to, from, next) {
		this.getPosition(document.body.scrollTop)
		// 跳转到detail还会有个莫名其妙的滚动
		this.changePageFlagN('fetch_flag')
		if(to.name === 'course') {
			this.changePageFlagN('is_index')
			this.changePageFlagN('is_all')
			this.changePageFlagY('is_course')
		}
		this.changePageFlagN('is_search')
		this.changePageFlagY('is_index')
		this.changePageFlagN('is_all')
		next()
	},
}
</script>

<style lang="sass" module>
.hint {
	font-size: 24px; /*px*/
    text-align: center;
    color: #999;
    margin-top: 16px;
    margin-bottom: 34px;
}
</style>