<template>
	<div id="js_courses_list" :class="$style.list">
		<div v-for="item in result" :class="$style.item">
			<router-link :to="{ name: 'course', params: { id: item.id }}">
				<div :class="[$style.course, $style.space]">
					<div :class="$style.avatar">{{ item.main_category | subStr }}</div>
					<div :class="$style.content">
						<div :class="[$style.title, $style.c_link]">{{ item.title }}</div>
						<div :class="[$style.info, $style.space]">
							<span :class="[$style.va_item, $style.teacher]">{{ item.teacher }}</span>
							<span :class="[$style.va_item, $style.comments]">
								<svg :class="$style.logo">
									<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#comments_fill"></use>
								</svg>
								<span>{{ item.views }}</span>
							</span>
							<span :class="[$style.va_item, $style.likes]">
								<svg :class="$style.logo">
									<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#heart_f"></use>
								</svg>
								<span>{{ item.likes }}</span>
							</span>
						</div>
					</div>
				</div>
			</router-link>
		</div>
	</div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
import { subStr } from '../../filters/filter.js'

export default {
	data() {
		return {
			window_height: 0,
			is_recommend: false,
		}
	},
	computed: {
		...mapGetters([
			'position',
			'back',
			'page',
			'result',
		]),
		...mapState([
			'is_loading',
			'page_snaps',
			'is_selected',
			'fetch_flag',
		]),
	},
	methods: {
		...mapActions([
			'fetchCourse',
			'getPosition',
			'turnFlag',
			'changePageFlagN',
			'changePageFlagY',
			'initCourse',
			'fetchCourseN',
			'isLoading',
			'searchCourse',
		]),
	},
	watch: {
		// 有bug
		courses() {
			console.log(this.result)
			// 控制只发一次请求
			if(this.result.length > 0) {
				this.isLoading(false)
			}
			this.changePageFlagY('fetch_flag')
		},
	},
	filters: {
		subStr,
	},
	mounted() {
		this.changePageFlagN('is_index')
		this.changePageFlagN('is_course')
		this.changePageFlagY('is_all')
		// 判断是否是从课程详情返回
		// if(this.position === undefined) {
		// 	let sort
		// 	this.$route.name == 'recommend' ? sort = 'score' : ''
		// 	this.fetchCourse(sort)
		// 	this.isLoading(true)
		// }

		// if (this.back) {
		// 	// 这里为什么要setTimeout
		// 	setTimeout(() => {
		// 		window.scrollTo(0, this.position)
		// 	}, 0)
		// 	this.changePageFlagY('fetch_flag')
		// 	this.turnFlag()
		// } else {
		// 	// 初始化数据
		// 	this.initCourse()
		// 	this.fetchCourse(this.$route.params.sort)
		// 	this.isLoading(true)
		// }
	},
}
</script>

<style lang='sass' module>
.list {
	width: 100%;
}
.course {
	font-size: 0;
	width: 333px;
	margin: 0 auto;
	padding: 20px 0 16px;
	border-bottom: 2px solid #ececec; /*px*/
}
.avatar {
	font-size: 40px; /*px*/
	margin-right: 16px;
	width: 40px;
	height: 40px;
	line-height: 40px;
	color: #fff;
	border-radius: 50%;
	overflow: hidden;
	background-color: #eeab5d;
	text-align: center;
}
.avatar, .content {
	display: inline-block;
	vertical-align: top;
}
.content {
	width: 277px;
}
.title {
	font-size: 32px; /*px*/
	width: 100%;
	color: #333;
	padding-bottom: 12px;
}
.info {
	width: 100%;
	color: #999;
}
.teacher {
	width: 72px;
	height: 12px;
	overflow: hidden;
	margin-right: 121px;
}
.va_item {
	font-size: 24px; /*px*/
	display: inline-block;
	vertical-align: top;
}
.logo {
	display: inline-block;
	width: 13px;
	height: 12px;
	vertical-align: -2px;
	margin-right: 6px;
}
.logo use {
	fill: #999;
}
</style>