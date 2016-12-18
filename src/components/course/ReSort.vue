<template>
    <div :class="[$style.menu, $style.space]">
        <div @click="reSort" :class="$style.sort">
            <span :class="$style.s_item">排序方式：</span>
            <span id="view" :class="[$style.s_item, $style.comment, {[$style.active]: isactive}]">
            评论最多&nbsp;&nbsp;</span>
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
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
	data() {
		return {
			isactive: true,
			is_db: '',
		}
	},
	computed: {
		...mapState([
			'is_selected',
		]),
	},
	methods: {
		...mapActions([
			'fetchCourse',
			'isLoading',
            'initCourse',
			'showSelector',
		]),
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
	}
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
.active {
	color: #eeab5d;
}
.likes svg {
	margin-left: 16px;
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