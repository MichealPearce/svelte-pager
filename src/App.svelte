<script>
	import { Page, Link } from 'components/svelte-pager'
	import Home from 'views/Home'
	import About from 'views/About'
</script>

<style>
	
</style>

<Page title="Home" path="/" component={Home}>
	Hello
</Page>
<Page title="About" path="/about" component={About} />
