export type FetchDataType<T> = Promise<T>;

export const fetchData = <T>(url: string): FetchDataType<T> => {
  return fetch(url)
    .then((result: Response) => result.json())
    .then((data: T) => data)
    .catch((error) => { throw new Error(error) })
}