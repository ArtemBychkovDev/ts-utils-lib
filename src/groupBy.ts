export function groupBy<T, K extends keyof T>(arr: T[], key: K): Record<string, T[]> {
  const result: Record<string, T[]> = {};

  arr.forEach(item => {
    const groupKey = String(item[key]); // приводим к строке, т.к. ключ объекта — всегда строка

    if (!result[groupKey]) {
      result[groupKey] = [];
    }

    result[groupKey].push(item);
  });

  return result;
}