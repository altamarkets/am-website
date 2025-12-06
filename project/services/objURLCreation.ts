export const objURLCreation: string = (blob: Blob) => {
  return URL.createObjectURL(blob)
}