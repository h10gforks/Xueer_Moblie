<template>
	<div :class="$style.tags">
		<span v-for="item in hot_tags" :class="$style.tags_item">{{ item }}</span>
	</div>
</template>

<script>
export default {
	data() {
		return {
			hot_tags: ['作业少','有意思','有点难','老师颜值高']
		}
	}
}
</script>

<style lang='sass' module>
.tags {
	padding: 22px 28px 1px 34px;
}
.tags_item {
	font-size: 28px; /*px*/
    border-radius: 4px; /*px*/
    display: inline-block;
    line-height: 14px;
    background-color: #cdcdcd;
    padding: 3px;
    color: #fff;
    margin-right: 6px;
    margin-bottom: 16px;
}
</style>