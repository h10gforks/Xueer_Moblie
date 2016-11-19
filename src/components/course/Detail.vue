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
			<comments :comments="hot_comments"></comments>
		</div>
		<div :class="$style.comments">
			<h2 :class="[$style.comments_title, $style.title_all]">所有评论</h2>
			<comments :comments="comments"></comments>
		</div>
	</div>
</template>

<script>
import Comments from './Comments.vue'
export default {
	data (){
		return {
			info: {},
			hot_tags: [],
			comments: [],
			hot_comments: []
		}
	},
	components: {
		Comments
	},
	created (){
		this.fetchInfo()
		this.fetchComments()
		this.fetchHotComments()
	},
	methods: {
		fetchInfo() {
			var self = this
			fetch('/api/v1.0/courses/190/')
			.then(function(response) {
			    response.json().then(function(json) {
  					self.info = json
  					self.getTag(self.info.hot_tags)
    			});
			})
		},
		getTag(tags){
			var arr = this.hot_tags = tags.split(' ')
			this.hot_tags.unshift(this.info.main_category)
			return arr;
		},
		fetchComments() {
			var self = this
			fetch('/api/v1.0/courses/190/comments/')
			.then(function(response) {
			    response.json().then(function(json) {
  					self.comments = json
  					self.preprocess(json)
    			});
			})
		},
		fetchHotComments() {
			var self = this
			fetch('/api/v1.0/courses/190/comments/hot/')
			.then(function(response) {
			    response.json().then(function(json) {
  					self.hot_comments = json
  					self.preprocess(json)
    			});
			})
		},
		preprocess(json) {
			var self = this;
			json.forEach(function(element, index, array){
				if(element.body.length >= 60) {
					element._body = element.body
					element.body =element.body.substr(0,60)
				}
			})
		}
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
</style>