export const randomNumber = (max: number = 1): number => Math.random() * max;

export const randomInteger = (max: number = 8): number => Math.round(randomNumber(max));

export const randomString = (prefix = "", suffixLength = 8): string =>
    `${prefix}${String(randomNumber(10 ^ suffixLength)).padStart(suffixLength)}`

export const randomArray = <T>(length: number, createContent: () => T): T[] =>
    Array(length).map(createContent)
