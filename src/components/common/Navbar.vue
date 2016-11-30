<template>
  	<div :class="$style.nav_bar">
		<div :class="$style.container">
            <div :class="$style.title_set">
	            <div v-if="flag">
	                <svg :class="[$style.nav_icon, $style.logo]">
	                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#logo"></use>
	                </svg>
	                <span :class="[$style.title_s, $style.title]">搜索</span>
	            </div>
	            <div @click="backStep" v-if="!flag">
	                <svg viewBox="0 0 34 34" :class="[$style.back, $style.nav_icon]">
                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#back"></use>
                    </svg>
	                <span v-if="flag" :class="[$style.title_l, $style.title]">所有课程</span>
	                <span :class="[$style.title_l, $style.title]">我的学而</span>
	            </div>
            </div>
            <div :class="$style.icon_set">
                <div @click="showSearch" data-link="/search" :class="[$style.nav_icon, $style.search]">
                    <svg viewBox="0 0 34 34">
                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#search"></use>
                    </svg>
                </div>
                <div data-link="/user" :class="[$style.nav_icon, $style.user, $style.link]">
                    <svg viewBox="0 0 34 34">
                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#user"></use>
                    </svg>
                </div>
            </div>
        </div>
  	</div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
	data() {
		return {
			flag: false
		}
	},
    methods: {
        ...mapActions ([
            'showSearch'
        ]),
        backStep(){
            history.back();
        }
    }
}
</script>

<style lang='sass' module>
@import '../../assets/value.scss';
.nav_bar {
	border-bottom: 1px solid $shallow_silver;
}
.container {
	width: 328px;
	margin: 0 auto;
	font-size: 0;
	line-height: 56px;
}
.logo {
    height: 32px;
    width: 71px;
}
.title_set {
	display: inline-block;
	width: 240px;
    text-align: left;
}
.nav_icon use {
    fill: none;
}
.icon_set {
	display: inline-block;
    width: 87px;
    text-align: right;
}
.back, .search, .user {
    height: 34px;
    width: 34px;
}
.search {
    margin-right: 16px;
}
.nav_icon use {
    fill: none;
}
.nav_icon {
    display: inline-block;
    vertical-align: middle;
}
.title_s {
    border-left: 2px solid #30b38a; /*px*/
    line-height: 1;
    font-size: 16px;
    vertical-align: middle;
    padding-left: 7px;
    margin-left: 7px;
}
.title {
	color: #30b38a;
}
.title_l {
	padding-left: 16px;
    vertical-align: middle;
	line-height: 20px;
    font-size: 20px;
}
</style>
