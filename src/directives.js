import Vue from 'vue'

Vue.directive('scroll', {
    name: 'scroll',
    bind : function(el, binding) {
        let fn = binding.value
        if(typeof fn !== 'function') {
            return console.error('The param of directive "v-scroll" must be a function!');
        }
        let timer = null;
        window.onscroll = () => {
            clearTimeout(timer)
            timer = setTimeout(() => {
                fn()
            },10)
        }
    }
});