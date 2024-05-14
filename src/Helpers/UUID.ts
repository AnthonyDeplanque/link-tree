export const uuid = (uuidLength: number = 16) => {
  const charactersList: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890"
  return Array.from({ length: uuidLength }).map(() => charactersList[Math.floor(Math.random() * charactersList.length)]).join('');
}