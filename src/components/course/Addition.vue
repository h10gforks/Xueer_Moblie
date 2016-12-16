<template>
	<div :class="$style.address">
        <h2 :class="$style.title">课程安排</h2>
        <div :class="$style.course_info">
            <span :class="$style.item">时间3：星期三第1-4节{2-6周}xg</span><br>
            <span :class="$style.item">时间2：星期四第3-4节{1-19周(单)</span><br>
            <span :class="$style.item">时间1：星期一第1-4节{16-20周}</span><br>
        </div>
	</div>
</template>

<script>
export default {
}
</script>

<style lang='sass' module>
.address {
    padding: 0 13px 9px;
}
.title {
    height: 36px;
    font-size: 32px; /*px*/
    color: #666;
    line-height: 16px;
    box-sizing: border-box;
    padding-bottom: 16px;
    border-bottom: 1px solid #ECECEC;
}
.course_info {
    margin-top: 19px;
    margin-left: 17px;
}
.item {
    display: inline-block;
    padding: 0 2px;
    color: #fff;
    font-size: 28px; /*px*/
    line-height: 20px;
    background: #60B9A6;
    margin-bottom: 9px;
    border-radius: 2px;
}
</style>