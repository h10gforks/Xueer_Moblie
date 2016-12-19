<template>
	<div>
		<selector v-if="is_selected"></selector>
        <courseList></courseList>
        <nextBatch></nextBatch>
	</div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

import Selector from './Selector.vue'
import ReSort from './ReSort.vue'
import CourseList from './CourseList.vue'
import NextBatch from './NextBatch.vue'

export default {
	computed: {
		...mapState([
			'is_selected',
		]),
	},
	methods: {
		...mapActions([
			'getPosition',
			'changePageFlagN',
			'changePageFlagY',
		]),
	},
	components: {
		Selector,
        CourseList,
        NextBatch,
	},
	beforeRouteLeave(to, from, next) {
		this.getPosition(document.body.scrollTop)
		// 跳转到detail还会有个莫名其妙的滚动
		this.flag = false
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