export const basePath = ''

export function sitePath(path = '') {
	return `/${path.replace(/^\//, '')}`
}
