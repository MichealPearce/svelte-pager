<script>
	import {createEventDispatcher} from 'svelte'
	import {pageUpdated} from './index'

	let href
	export {href as to}

	function handleClick(event) {
		event.preventDefault()
		pageUpdated(href)
	} 

</script>

<a {href} on:click={handleClick} >
	<slot></slot>
</a>