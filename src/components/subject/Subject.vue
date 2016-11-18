<template>
	<div :class="$style.object">
		<h2 :class="$style.title">{{ title }}</h2>
		<div :class="$style.tip_info">
			<span :class="[$style.info, $style.info_left]">{{ author }}</span>
			<span :class="[$style.info, $style.info_right]">{{ date }}</span>
		</div>
		<div v-html='cont' :class="$style.cont"></div>
	</div>
</template>

<script>
export default {
	data (){
		return {
			cont: '',
			title: '',
			author: '',
			date: ''
		}
	},
	created () {
		this.fetchData()
	},
	methods: {
		fetchData() {
			var self = this
			var url = '/api/v1.0/tips/' + this.$route.params.id
			fetch(url)
			.then(function(response) {
			    response.json().then(function(json) {
  					self.cont = json.body
  					self.title = json.title
  					self.author = json.author
  					self.date = json.date
  					console.log(json)
    			});
			})
		}
	}
}
</script>

<style lang='sass' module>
@import '../../assets/value.scss';

.object {
	padding: 0 16px; 
}
.title {
	font-size: 40px;/*no*/
	font-weight: lighter;
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
	font-size: 28px; /*no*/
	line-height: 14px;
	font-weight: lighter;
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
	font-size: 28px; /*no*/
	line-height: 18px;
}
.cont p {
	margin: 15px 0;
}
.cont blockquote {
	display: inline-block;
	position: relative;
	margin-left: 15px;
    font-weight: 300;
    font-style: italic;
    color: $shallow_grey;
    letter-spacing: .08em;
    border-left: .166667rem solid #ddd;
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
	margin: 21px 0 21px 10px;
}
</style>