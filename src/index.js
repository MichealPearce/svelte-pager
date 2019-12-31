import Link from './Link'
import Page from './Page'

export function pageUpdated(path) {
	window.dispatchEvent(new CustomEvent('pager-updated', {detail: path}))
	history.pushState(null, null, path)
} 

export {
	Link, Page
}