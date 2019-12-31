<script>
	import {createEventDispatcher} from 'svelte'
	import {pageUpdated} from './index'

	let href
	export {href as to}

	function handleClick(event) {
		event.preventDefault()
		pageUpdated(href)
		history.pushState(null, null, href)
	} 

</script>

<a {href} on:click={handleClick} >
	<slot></slot>
</a>