export function getValueOrDefault<T, K extends keyof T, D>(obj: T, key: K, defaultVal: D): T[K] | D {
	if (obj[key] === undefined) {
		return defaultVal
	} else {
		return obj[key]
	}
}
