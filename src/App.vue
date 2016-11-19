<template>
  	<div :class="$style.app" id="app">
  		<navBar></navBar>
		<iconSvg></iconSvg>
  		<!-- <index></index> -->
		<detail></detail>
  	</div>
</template>

<script>
import Index from './components/Index.vue'
import NavBar from './components/common/NavBar.vue'
import IconSvg from './components/common/IconSvg.vue'

//写detail暂时引入
import Detail from './components/course/Detail.vue'

export default {
	components: {
		NavBar,
		IconSvg,
		Index,
		Detail
	}
}
</script>

<style lang='sass' module>
.app {
	height: 100%;
}
</style>
