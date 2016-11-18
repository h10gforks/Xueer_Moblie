<template>
  	<div :class="$style.app" id="app">
  		<navBar></navBar>
		<iconSvg></iconSvg>
  		<index></index>
  	</div>
</template>

<script>
import Index from './components/Index.vue'
import NavBar from './components/common/NavBar.vue'
import IconSvg from './components/common/IconSvg.vue'
export default {
	components: {
		NavBar,
		IconSvg,
		Index
	}
}
</script>

<style lang='sass' module>
.app {
	height: 100%;
}
</style>
