export function mergeObjects<T, U>(arr: T, arr2: U): T & U {
    
    return { ...arr, ...arr2 } as T & U;

}