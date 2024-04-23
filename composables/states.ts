export const useSelectOption = () => useState<boolean>('selectOption', () => true)
export const useImageSeed = () => useState<number>('imageSeed', () => Math.floor(Math.random() * 100))