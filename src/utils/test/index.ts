/** @NOTE Usage for ramdom any string */
const S = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
export function createRamdomRangeString(
  range: number,
  base: string = S,
): string {
  return [...Array(range)]
    .map(() => base[Math.floor(Math.random() * base.length)])
    .join("");
}
