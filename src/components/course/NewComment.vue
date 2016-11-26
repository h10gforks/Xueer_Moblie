<template>
	<div :class="$style.new_comment">
		<textarea :class="$style.comment_cont" placeholder="写评论..."></textarea>
		<div :class="$style.tag_cont">
			<svg :class="[$style.nav_icon, $style.tag_icon]">
	            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#tag_icon"></use>
	        </svg>
	        <div :class="$style.input_cont">
	        	<div :class="$style.pre_tags">
	        		<span :class="$style.pre_tags_item" v-for="item in pre_tags">{{ item | pre_tags }}</span>
	        	</div>
	        	<div :class="$style.input_box">
	        		<input @keyup.delete="deleteTag" v-model='tags' :class="$style.tag_input" type="text" name="tag" placeholder="添加标签：输入一个标签后逗号间隔开">
	        	</div>
			</div>
		</div>
		<tag></tag>
	</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import Tag from '../common/Tag.vue'
export default {
	data() {
		return {
			tags: ''
		}
	},
	computed: {
		...mapGetters([
			'tag',
			'pre_tags'
		])
	},
	watch: {
		tags: function(val){
			this.$store.commit('preTags',val)
			this.tags = this.tag
		}
	},
	methods: {
		...mapActions([
			'deleteTag'
		])
	},
	components: {
		Tag
	}
}
</script>

<style lang='sass' module>
.new_comment {
	width: 328px;
	margin: 0 auto;
	line-height: 14px;
	font-size: 0;
}
.comment_cont {
	display: block;
	width: 100%;
	height: 98px;
	font-size: 28px; /*px*/
	box-sizing: border-box;
	padding: 17px 18px;
	background: rgba(216,216,216,.25);
	border: 2px solid #ECECEC; /*px*/
}
.input_cont {
	line-height: 14px;
	padding: 12px 9px 9px 37px;
	width: 100%;
	box-sizing: border-box;
	border-bottom: 2px solid #ECECEC; /*px*/
}
.tag_cont {
	position: relative;
}
.tag_icon {
	position: absolute;
	left: 18px;
	top: 12px;
	width: 14px;
	height: 14px;
}
.pre_tags {
	color: #999999;
	float: left;
}
.pre_tags_item {
	font-size: 28px; /*px*/
}
.input_box {
	overflow: hidden;
}
.tag_input {
	padding-left: .5em;
	line-height: 14px;
	font-size: 28px; /*px*/
	width: 100%;
}
</style>
