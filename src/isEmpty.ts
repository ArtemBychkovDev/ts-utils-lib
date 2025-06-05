export function isEmpty(val: any): boolean {
	let type = typeof val

	switch (type) {
		case 'string':
			if (val.trim().length === 0) {
				return true
			}

			if (val.trim().length !== 0) {
				return false
			}
		case 'undefined':
			return true
		case 'number':
			return false
		case 'boolean':
			return false
		case 'object':
			if (val === null) {
				return true
			}
			if (Array.isArray(val)) {
				return val.length === 0
			}
			if (Object.keys(val).length === 0) {
				return true
			}
			return false
		default:
			return false
	}
}
