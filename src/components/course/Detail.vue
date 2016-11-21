<template>
	<div :class="$style.detail">
		<div :class="$style.info">
			<h2 :class="$style.title">{{ info.title }}</h2>
			<div :class="$style.teacher">{{ info.teacher }}</div>
			<div :class="$style.btns">
				<div></div>
				<div></div>
			</div>
		</div>
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
		<div v-show="back_to_top" v-scroll="scrollHandler" :class="$style.back_to_top">
	        <svg :class="$style.arrow_icon">
	               <a href="#top">
	               		<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#back_to_top"></use>
	               </a>
	        </svg>   
	     </div>
	</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import Comment from './Comments.vue'
export default {
	data() {
		return {
			back_to_top: false
		}
	},
	computed: {
	    ...mapGetters([
	    	'info',
	    	'hot_tags',
	    	'comments',
	    	'hot_comments',
	    	'more'
	    ])
	},
	created (){
        this.fetchInfo()
    	this.fetchComments()
    	this.fetchHotComments()
        
	},
	methods: {
		...mapActions([
			'fetchInfo',
			'fetchComments',
			'fetchHotComments'
		]),
		moreComments() {
			this.fetchComments()
		},
		scrollHandler() {
			let scrollTop = document.body.scrollTop
			scrollTop > 10 ? this.back_to_top = true : this.back_to_top = false
		}
	},
	components: {
		Comment
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
    border-radius: 4px; 
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
.back_to_top {
	height: 40px;
    width: 40px;
    position: fixed;
    bottom: 52px;
    right: 16px;
}
.arrow_icon {
	width: 100%;
	height: 100%;
}
</style>