# svelte-pager
 Simple page management with Svelte!

# Setup
```
git clone https://github.com/MichealPearce/server-dashboard-client.git
cd svelte-pager
yarn install
yarn run dev
```

# Build
```
yarn run build
```

# Usage
```
<script>
	import {Page} from 'svelte-pager'
	import Home from './pages/Home.svelte'
	import About from './pages/About.svelte'
</script>

<Page
	title="Home"
	path="/"
	component={Home}
/>
<Page
	title="About"
	path="/about"
	component={About}
/>
```