<template>
	<div v-show="back_to_top" v-scroll="scrollHandler" :class="$style.back_to_top">
        <svg :class="$style.arrow_icon">
           <a href="#top">
           		<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#back_to_top"></use>
           </a>
        </svg>   
    </div>
</template>

<script>
export default {
	data() {
		return {
			back_to_top: false
		}
	},
	methods: {
		scrollHandler() {
			let scrollTop = document.body.scrollTop
			scrollTop > 10 ? this.back_to_top = true : this.back_to_top = false
		}
	}
}
</script>

<style lang='sass' module>
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