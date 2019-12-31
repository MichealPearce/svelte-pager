import Page from './Page.svelte'
import Link from './Link.svelte'

export function pageUpdated(path) {
	window.dispatchEvent(new CustomEvent('pager-updated', {detail: path}))
} 

export {
	Page,
	Link
}