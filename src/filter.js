import Vue from 'vue'

Vue.filter('pre_tags',function (val) {
	return " #" + val
})