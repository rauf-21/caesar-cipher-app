function isAlphabet (char: string): boolean {
  if (char.length > 1) {
    throw Error('Char length must not greater than 1');
  }

  return ((/[ABCDEFGHIJKLMNOPQRSTUVWXYZ]/i).test(char))
}

export { isAlphabet }