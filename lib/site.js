export const basePath = '/Hafizur-Rahman-Provat'

export function sitePath(path = '') {
  return `${basePath}/${path.replace(/^\//, '')}`
}
