<template>
	<div :class="$style.detail">
		<info></info>
		<div :class="$style.tags">
			<span v-for="item in hot_tags" :class="$style.tags_item">{{ item }}</span>
		</div>
		<div :class="$style.comments">
			<h2 :class="$style.comments_title">热门评论</h2>
			<comment :comments="hot_comments"></comment>
		</div>
		<div :class="$style.comments">
			<h2 :class="[$style.comments_title, $style.title_all]">所有评论</h2>
			<comment :comments="comments"></comment>
			<div v-if="more" @click="moreComments" :class="$style.more_comments">展开更多评价</div>
			<div v-else :class="$style.no_more_comments">
				∑(っ °Д °;)っ
				<br>没有更多评价了。
			</div>
		</div>
		<backToTop></backToTop>
	</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import Comment from './Comments.vue'
import Info from './Info.vue'
import BackToTop from '../common/BackToTop.vue'

export default {
	computed: {
	    ...mapGetters([
	    	'hot_tags',
	    	'comments',
	    	'hot_comments',
	    	'more'
	    ])
	},
	created (){
    	this.fetchComments()
    	this.fetchHotComments()
        
	},
	methods: {
		...mapActions([
			'fetchComments',
			'fetchHotComments'
		]),
		moreComments() {
			this.fetchComments()
		}
	},
	components: {
		Comment,
		Info,
		BackToTop
	}
}
</script>

<style lang='sass' module>
@import '../../assets/value.scss';
.detail {
	font-weight: lighter;
}
.info {
	position: relative;
	padding: 16px 0;
	background-image: url('../../assets/course_bg.jpg');
	z-index: 100;
	color: #FFF;
}
.info::before {
	content: '.';
	font-size: 0;
	position: absolute;
	top: 0;
	left: 0;
	z-index: -100;
	opacity: .8;
	filter: alpha(opacity=.8);
	background-color: $_yellow;
	width: 100%;
	height: 100%;
}
.title {
	font-size: 40px; /*px*/
	line-height: 28px;
	padding: 0 31px;
}
.teacher {
	font-size: 28px; /*px*/
	line-height: 24px;
	padding: 16px 31px 7px;
}
.tags {
	padding: 22px 28px 1px 34px;
}
.tags_item {
	font-size: 28px; /*px*/
    border-radius: 4px; /*px*/
    display: inline-block;
    line-height: 14px;
    background-color: #cdcdcd;
    padding: 3px;
    color: #fff;
    margin-right: 6px;
    margin-bottom: 16px;
}
.comments {
	width: 333px;
    margin: 0 auto;
}
.comments_title {
	font-size: 32px; /*px*/
    padding: 0 0 16px;
    color: #666;
    border-bottom: 2px solid #ececec; /*px*/
}
.more_comments {
	border: 2px solid currentColor; /*px*/
    border-radius: 4px; /*px*/
    text-align: center;
    width: 156px;
    line-height: 38px;
    font-size: 32px; /*px*/
    color: $_yellow;
    margin: 17px auto;
}
.no_more_comments {
	font-size: 28px; /*px*/
	color: #999;
    width: 120px;
    margin: 0 auto;
    padding: 15px 0;
}
.btns {
	font-size: 0;
	margin: 0 16px 16px;
}
.btn {
	display: inline-block;
	border: 2px solid #fff; /*px*/
    border-radius: 4px; /*px*/
    vertical-align: top;
    font-size: 0;
    line-height: 14px;
    text-align: left;
    box-sizing: border-box;
    padding: 10px 40px;
}
.btn:first-child {
	margin-right: 16px;
}
.icon,.btn_text {
	vertical-align: middle;
}
.icon {
	width: 17px;
	height: 14px;
	margin-right: 8px;
}
.btn_text {
	display: inline-block;
	min-width: 48px;
	text-align: center;
	font-size: 28px; /*px*/
}
</style>