<template>
	<div :class="$style.object">
		<h2 :class="$style.title">{{ title }}</h2>
		<div :class="$style.tip_info">
			<span :class="[$style.info, $style.info_left]">{{ author }}</span>
			<span :class="[$style.info, $style.info_right]">{{ date }}</span>
		</div>
		<div v-html='cont' :class="$style.cont"></div>
		<btns></btns>
	</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Btns from './Btns.vue'

export default {
	created () {
		this.fetchSubject(this.$route.params.id)
	},
	computed: {
	    ...mapGetters([
	    	'cont',
			'title',
			'author',
			'date'
	    ])
	},
	methods: {
		...mapActions([
			'fetchSubject'
		])
	},
	components: {
		Btns
	}
}
</script>

<style lang='sass' module>
@import '../../assets/value.scss';

.object {
	font-size: 28px; /*px*/
	font-weight: 300;
	padding: 0 16px; 
}
.title {
	font-size: 40px;/*px*/
	line-height: 28px;
	padding: 14px 0 16px;
	border-bottom: 1px solid $shallow_silver;
	color: $shallow_black;
}
.tip_info {
	font-size: 0;
	padding: 10px 0;
}
.info {
	font-size: 28px; /*px*/
	line-height: 14px;
	color: $shallow_grey;
	display: inline-block;
	width: 50%;
}
.info_left {
	text-align: left;
}
.info_right {
	text-align: right;
}
.cont {
	line-height: 36px; /*px*/
}
.cont p {
	margin: 15px 0;
}
.cont blockquote {
	padding: 10px 0 10px 20px; /*px*/
    margin: 30px 0 30px 30px; /*px*/
	position: relative;
    font-weight: 300;
    font-style: italic;
    color: $shallow_grey;
    letter-spacing: .08em;
    border-left: 6px solid #ddd;
}
.cont blockquote::before {
	position: absolute;
    left: -1.1em;
    content: '\201C';
}
.cont blockquote::after {
	content: '\201D';
    margin-left: .7em;
}
.cont blockquote p {
	margin: 15px 0 15px;
}
.object{
	ul {
		padding: 16px;
	}
	li {
		margin: 15px 0;
	}
}
</style>