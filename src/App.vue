<template>
  	<div :class="$style.app" id="app">
  		<a name="top"></a>
  		<iconSvg></iconSvg>
  		<navBar></navBar>
  		<search></search>
  		<index></index>
		<!-- <detail></detail>
		<newComment></newComment>
  		<index></index>
		<loginDialog></loginDialog>
		<loading></loading>
		<search></search> -->
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
import NewComment from './components/course/NewComment.vue'

export default {
	components: {
		NavBar,
		IconSvg,
		Index,
		Detail,
		loginDialog,
		Loading,
		Search,
		Foot,
		NewComment
	}
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
