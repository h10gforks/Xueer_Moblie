let scrollCallback = callback => {
    let timer = null;
    clearTimeout(timer)
    timer = setTimeout(() => {
        callback()
    },150)
}
let callBackWarpped
export default {
    bind(el, binding) {
        let fn = binding.value
        if(typeof fn !== 'function') {
            return console.error('The param of directive "v-scroll" must be a function!');
        }
        callBackWarpped =  scrollCallback.bind({}, binding.value)
        window.addEventListener("scroll", callBackWarpped)
    },
    unbind() {
        window.removeEventListener("scroll", callBackWarpped)
    }
}