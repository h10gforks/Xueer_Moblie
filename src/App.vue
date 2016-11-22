<template>
  	<div :class="$style.app" id="app">
  		<a name="top"></a>
  		<navBar></navBar>
		<iconSvg></iconSvg>
  		<!-- <index></index> -->
		<!-- <detail></detail> -->
		<!-- <loginDialog></loginDialog> -->
		<!-- <loading></loading> -->
		<!-- <search></search> -->
		<Foot></Foot>
  	</div>
</template>

<script>
import Index from './components/Index.vue'
import NavBar from './components/common/NavBar.vue'
import loginDialog from './components/common/loginDialog.vue'
import IconSvg from './components/common/IconSvg.vue'
import Loading from './components/common/loading.vue'
import Foot from './components/common/Foot.vue'
import Search from './components/search/Search.vue'
import Detail from './components/course/Detail.vue'

export default {
	components: {
		NavBar,
		IconSvg,
		Index,
		Detail,
		loginDialog,
		Loading,
		Search,
		Foot
	}
}
</script>

<style lang='sass' module>
.app {
	height: 100%;
}
</style>
