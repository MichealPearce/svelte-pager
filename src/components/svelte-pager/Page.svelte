<script>
	import {onDestroy} from 'svelte'
	export let title = 'document'
	export let path = ''
	export let exact = true
	export let component = false
	let pageUpdater

	$: currentPath = location.pathname
	$: show = isCurrentPage()
	$: if(show) document.title = title

	function isCurrentPage() {
		if(exact) return (currentPath === path)
		else return currentPath.startsWith(path)
	}

	pageUpdater = window.addEventListener('pager-updated', event => {
		currentPath = event.detail
		show = isCurrentPage()
	})

	onDestroy(() => {
		window.removeEventListener(pageUpdater)
	})

</script>

{#if show}
<svelte:component this={component} />
<slot></slot>
{/if}
