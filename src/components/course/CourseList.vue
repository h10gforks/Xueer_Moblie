<template>
	<div v-scroll="scrollHandler" :class="$style.course_list">
		<selector v-if="is_selected"></selector>
		<div :class="[$style.menu, $style.space]">
			<div @click="reSort" :class="$style.sort">
				<span :class="$style.s_item">排序方式：</span>
				<span id="view" :class="[$style.s_item, $style.comment, {[$style.active]: isactive}]">
					评论最多
				&nbsp;&nbsp;</span>
				<span id="like" :class="[$style.s_item, $style.likes, {[$style.active]: !isactive}]">
				&nbsp;&nbsp;点赞最多</span>
			</div>
			<div @click="Selector" :class="$style.selector">
				<span :class="$style.s_item">筛选</span>
				<svg :class="[$style.s_item, $style.icon_selector, {[$style.selected]: is_selected}]">
					<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#selector"></use>
				</svg>
			</div>
		</div>
		<div id="js_courses_list" :class="$style.list">
			<div v-for="item in courses" :class="$style.item">
				<router-link :to="{ name: 'course', params: { id: item.id }}">
					<div :class="[$style.course, $style.space]">
						<div :class="$style.avatar">{{ item.main_category | subStr }}</div>
						<div :class="$style.content">
							<div :class="[$style.title, $style.c_link]">{{ item.title }}</div>
							<div :class="[$style.info, $style.space]">
								<span :class="[$style.va_item, $style.teacher]">{{ item.teacher }}</span>
								<span :class="[$style.va_item, $style.comments]">
									<svg>
										<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#comments_fill"></use>
									</svg>
									<span>{{ item.views }}</span>
								</span>
								<span :class="[$style.va_item, $style.likes]">
									<svg>
										<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#heart_f"></use>
									</svg>
									<span>{{ item.likes }}</span>
								</span>
							</div>
						</div>
					</div>
				</router-link>
			</div>
			<div v-if='isend' :class="$style.hint">(￣▽￣") 已经是全部的结果啦</div>
			<div v-else :class="$style.hint">(￣▽￣") 加载中</div>
		</div>
	</div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
import { subStr } from '../../filters/filter.js'
import scroll from '../../directives/scroll.js'

import Selector from './Selector.vue'

export default {
	data() {
		return {
			flag: true,
			isactive: true,
			window_height: 0,
			is_db: '',
		}
	},
	computed: {
		...mapGetters([
			'courses',
			'position',
			'back',
			'isend',
			'page',
		]),
		...mapState([
			'is_loading',
			'page_snaps',
			'is_selected',
		]),
	},
	components: {
		Selector,
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
			'showSelector',
		]),
		scrollHandler() {
			const scroll_height = document.body.scrollTop
			const doc_height = document.body.scrollHeight
			if (!this.window_height) {
				this.window_height = window.innerHeight
			}
			const height = scroll_height + this.window_height
			if (height == doc_height && this.flag == true) {
				this.flag = false
				this.fetchCourse()
			}
			if (scroll_height <= 100 && this.flag == true) {
				this.flag = false
				this.fetchCourseN()
			}
		},
		reSort(e) {
			const id = e.target.id
			if (this.is_db == id) {
				return false
			} else {
				this.isLoading(true)
				this.isactive = !this.isactive
				this.initCourse()
				this.fetchCourse(id)
			}
			this.is_db = id
		},
		Selector() {
			this.showSelector(!this.is_selected)
			this.is_selected ? document.body.className = "no_scroll" : document.body.className = ''
		}
	},
	watch: {
		// 有bug
		courses() {
			// 控制只发一次请求
			if(this.courses.length > 0) {
				this.isLoading(false)
			}
			this.flag = true
		},
	},
	directives: {
		scroll,
	},
	filters: {
		subStr,
	},
	/* eslint no-unused-vars:0 */
	beforeRouteEnter (to, from, next) {
		next(vm => {
			
		})
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
	mounted() {
		this.changePageFlagN('is_index')
		this.changePageFlagN('is_course')
		this.changePageFlagY('is_all')
		console.log('hello world!')
		console.log(this.$store.state.is_index)
		console.log(this.$router.currentRoute.name)
		console.log(this)
		// 判断是否是从课程详情返回
		if (this.back) {
			// 这里为什么要setTimeout
			setTimeout(() => {
				window.scrollTo(0, this.position)
			}, 0)
			this.flag = true
			this.turnFlag()
		} else {
			// 初始化数据
			this.initCourse()
			const p = this.fetchCourse()
			this.isLoading(true)
		}
	},
}
</script>

<style lang='sass' module>
.menu {
	width: 100%;
	height: 48px;
	z-index: 0;
	background-color: #ececec;
	line-height: 48px;
	font-size: 0;
	color: #666;
	position: relative;
}	
.sort {
	height: 100%;
	display: inline-block;
	padding-left: 19px;
	width: 292px;
	box-sizing: border-box;
	text-align: left;
}
.s_item {
	vertical-align: middle;
	font-size: 28px; /*px*/
}
.comment {
	border-right: 2px solid #666; /*px*/
}
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
.list svg {
	display: inline-block;
	width: 13px;
	height: 12px;
	vertical-align: -2px;
	margin-right: 6px;
}
.list use {
	fill: #999;
}
.likes svg {
	margin-left: 16px;
}
.hint {
	font-size: 24px; /*px*/
    text-align: center;
    color: #999;
    margin-top: 16px;
    margin-bottom: 34px;
}
.active {
	color: #eeab5d;
}
.selector {
	height: 100%;
	line-height: 48px;
	font-size: 0;
	display: inline-block;
}
.icon_selector {
	width: 12px;
	height: 6px;
	margin-left: 5px;
}
.icon_selector use {
	width: 100%;
	height: 100%;
}
.selected {
	transform: rotate(180deg);
}
</style>