<template>
	<div :class="$style.comments">
		<li v-for="(item, index) in comments" :class="$style.comment_item" :key="item.id">
          <CommentsItem :item="item" :index="index"></CommentsItem>
	    </li>
	</div>
</template>

<script>
import CommentsItem from "./CommentsItem.vue";

export default {
  props: ["comments"],
  components: {
    //CommentsItem
  }
};
</script>

<style lang='scss' module>
.comment_item {
  font-weight: normal; // 安卓上数字很细，设置一下 weight
  font-size: 0;
  padding-top: 21px;
  border-bottom: 1px solid #ececec; /*px*/
}
.comment_item:last-child {
  margin-bottom: 16px;
}
</style>
