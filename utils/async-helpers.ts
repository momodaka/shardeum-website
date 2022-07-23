export const gosync = async <T = unknown>(
  promiseFunc: Promise<T>
): Promise<[T | null, Error | null]> => {
  try {
    const result = (await promiseFunc) as T;
    return [result, null];
  } catch (err) {
    return [null, err as Error];
  }
};
