<template>
	<div class="app" id='app'>
		<iconSvg></iconSvg>
		<navBar></navBar>
		<search></search>
		<index></index>
		<foot></foot>
		<loading></loading>
		<!--<filte></filte>-->
		<!--<cAddress></cAddress>-->
	</div>
</template>

<script>
import IconSvg from './components/common/IconSvg.vue'
import NavBar from './components/common/NavBar.vue'
import Search from './components/search/Search.vue'
import Index from './components/index/Index.vue'
import Foot from './components/common/Foot.vue'
import Loading from './components/common/Loading.vue'

import Filte from './components/common/Filter.vue'
import CAddress from './components/course/Address.vue'

export default {
	components: {
		IconSvg,
		NavBar,
		Search,
		Index,
		Foot,
		Loading,
		Filte,
		CAddress,
	},
}
</script>

<style lang='sass'>
@import './assets/common.scss';
@import './assets/reset.scss';
.app {
	display: flex;
	flex-flow: column;
	height: 100%;
	min-height: 100vh;
}
</style>