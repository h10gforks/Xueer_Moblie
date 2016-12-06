<template>
	<div :class="$style.app" id='app'>
		<a name='top'></a>
		<iconSvg></iconSvg>
		<navBar></navBar>
		<search></search>
		<index></index>
		<Foot></Foot>
	</div>
</template>

<script>
import IconSvg from './components/common/IconSvg.vue'
import NavBar from './components/common/NavBar.vue'
import Search from './components/search/Search.vue'
import Index from './components/index/Index.vue'
import Foot from './components/common/Foot.vue'

export default {
	components: {
		IconSvg,
		NavBar,
		Search,
		Index,
		Foot,
	},
}
</script>

<style lang='sass' module>
.app {
	display: flex;
	flex-flow: column;
	height: 100%;
	min-height: 100vh;
}
</style>