<template>
	<div :class="$style.footer">
        <div :class="$style.title"> </div>
        <div :class="$style.links">
            <div :class="$style.row">
                
            </div>
        </div>
        <div :class="$style.copyright">Proudly Prowered by Vue &amp; Flask</div>
    </div>
</template>
<style lang='scss' module>
.footer {
  width: 100%;
  min-height: 124px;
  background-color: #666;
  text-align: center;
  color: #999;
}
.title {
  font-size: 16px; /*px*/
  padding: 16px 0 18px;
}
.row {
  font-size: 0;
}
.copyright {
  padding-top: 16px;
}
.copyright,
.item {
  font-size: 12px; /*px*/
}
.item {
  display: inline-block;
  width: 33.3%;
  box-sizing: border-box;
  color: #999;
}
.item:nth-child(1),
.item:nth-child(2) {
  border-right: 2px solid #999;
}
</style>
