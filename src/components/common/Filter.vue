<template>
    <div :class="$style.filter">
        <div>
            <div id="aa" @click="addTag" :class="[$style.item, $style.tag, $style.first_line]">公共课</div>
            <div id="bb" @click="addTag" :class="[$style.item, $style.tag, $style.first_line]">专业课</div>
            <div id="cc" @click="addTag" :class="[$style.item, $style.tag]">通选课</div>
            <div id="dd" @click="addTag" :class="[$style.item, $style.tag]">素质课</div>
        </div>
        <div :class="[$style.bt, $style.item]">确定</div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            isactive: true,
            selected: []
        }
    },
    methods: {
        addTag(e){
            const index = this.selected.indexOf(e.target.id)
            if(index == -1) {
                this.selected.push(e.target.id)
                e.target.className += ' filter-active'
            } else {
                this.selected.splice(index)
                let arr = e.target.className.split(' ')
                arr.pop()
                e.target.className = arr.join(' ')
            }
            console.log(e.target.className)
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
</style>