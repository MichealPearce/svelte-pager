import App from './App.svelte'

const target = document.querySelector('main')

if (!target) {
	throw new Error('Can not find app container...')
}

new App({
	target,
	anchor: null,
	props: {},
	hydrate: false,
	intro: false,
})
