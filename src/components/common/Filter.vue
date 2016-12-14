<template>
    <div :class="$style.filter">
        <div>
            <div :class="[$style.item, $style.tag, $style.first_line, {[$style.active]: isactive}]">公共课</div>
            <div :class="[$style.item, $style.tag, $style.first_line, {[$style.active]: isactive}]">专业课</div>
            <div :class="[$style.item, $style.tag, {[$style.active]: isactive}]">通选课</div>
            <div :class="[$style.item, $style.tag, {[$style.active]: isactive}]">素质课</div>
        </div>
        <div :class="[$style.bt, $style.item]">确定</div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            isactive: true
        }
    }
}
</script>
<style lang="sass" module>
.filter {
    padding: 16px 13px 20px;
    font-size: 0;
    text-align: center;
}
.item {
    width: 156px;
    height: 40px;
    display: inline-block;
    border-radius: 2px;
    line-height: 40px;
}
.tag {
    background: #F3F3F3;
    font-size: 28px; /*px*/
    color: #666666;
}
.bt {
    margin-top: 20px;
    box-sizing: border-box;
    font-size: 28px; /*px*/
    color: #EEAB5D;
    border: 1px solid currentColor;
}
.item:nth-child(odd) {
    margin-right: 20px;
}
.first_line {
    margin-bottom: 16px;
}
.active {
    background: #2BBB8F;
}
</style>