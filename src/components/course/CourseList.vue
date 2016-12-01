<template>
	<div v-scroll="scrollHandler" :class="$style.course_list">
		<div :class="[$style.menu, $style.space]">
            <div :class="$style.sort">
                <span>排序方式：</span>
                <span data-sort="view" :class="[$style.s_item, $style.comment 
                ]">
                    评论最多
                &nbsp;&nbsp;</span>
                <span data-sort="like" :class="[$style.s_item, $style.likes,
                $style.active]">
                &nbsp;&nbsp;点赞最多</span>
            </div>
        </div>
        <div  :class="$style.list">
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
			    </div>
			</router-link>
        </div>
	</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { subStr } from '../../filters/filter.js'
import scroll from '../../directives/scroll.js'

export default {
	mounted () {
		this.fetchCourse()
	},
	computed: {
	    ...mapGetters([
	    	'courses'
	    ])
	},
	methods: {
		...mapActions([
			'fetchCourse'
		]),
        scrollHandler() {
            let scrollTop = document.body.scrollTop - 104
            if (scrollTop = 743) {
                this.fetchCourse()
            }
        }
    },
    directives: {
        scroll: scroll
    },
	filters: {
		subStr: subStr
	}
}
</script>

<style lang='sass' module>
.menu {
    width: 100%;
    height: 48px;
    background-color: #ececec;
    line-height: 48px;
    color: #666;
    position: relative;
}	
.sort {
	font-size: 28px; /*px*/
    padding-left: 19px;
    width: 72.3%;
    box-sizing: border-box;
    text-align: left;
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
    margin-right: 57px;
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
</style>