import { isEmpty } from '../src/isEmpty'

describe('isEmpty', () => {
	it('возвращает true для пустой строки', () => {
		expect(isEmpty('')).toBe(true)
	})

	it('возвращает true для строки из пробелов', () => {
		expect(isEmpty('   ')).toBe(true)
	})

	it('возвращает true для пустого массива', () => {
		expect(isEmpty([])).toBe(true)
	})

	it('возвращает true для пустого объекта', () => {
		expect(isEmpty({})).toBe(true)
	})

	it('возвращает true для null', () => {
		expect(isEmpty(null)).toBe(true)
	})

	it('возвращает true для undefined', () => {
		expect(isEmpty(undefined)).toBe(true)
	})

	it('возвращает false для непустой строки', () => {
		expect(isEmpty('abc')).toBe(false)
	})

	it('возвращает false для непустого массива', () => {
		expect(isEmpty([1, 2, 3])).toBe(false)
	})

	it('возвращает false для непустого объекта', () => {
		expect(isEmpty({ key: 'val' })).toBe(false)
	})

	it('возвращает false для числа 0', () => {
		expect(isEmpty(0)).toBe(false)
	})

	it('возвращает false для false', () => {
		expect(isEmpty(false)).toBe(false)
	})
})
