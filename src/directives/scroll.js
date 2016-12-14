const scrollCallback = callback => {
	let timer = null
	clearTimeout(timer)
	timer = setTimeout(() => {
		callback()
	}, 150)
}
let callBackWarpped
export default {
	inserted(el, binding) {
		const fn = binding.value
		if (typeof fn !== 'function') {
			return console.error('The param of directive v-scroll must be a function!')
		}
		callBackWarpped = scrollCallback.bind({}, binding.value)
		window.addEventListener('scroll', callBackWarpped)
		return true
	},
	unbind() {
		window.removeEventListener('scroll', callBackWarpped)
		return true
	},
}
