import { isAlphabet } from './helper'

const ALPHABETS = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
]

function encrypt (text: string, shift: number): string {
  return Array.from(text).reduce((result, char) => {
    if (!isAlphabet(char)) {
      return result + char
    }
    
    const charIndex = ALPHABETS.findIndex((c) => char.toUpperCase() === c)
    
    const shiftedCharIndex = charIndex + shift

    const targetIndex = shiftedCharIndex > 26
      ? shiftedCharIndex - (26 * Math.floor(shiftedCharIndex / 26))
      : shiftedCharIndex
    
    return result + ALPHABETS.at(targetIndex)
  }, '')
}

function decrypt (text: string, shift: number): string {
  return Array.from(text).reduce((result, char) => {
    if (!isAlphabet(char)) {
      return result + char
    }
    
    const charIndex = ALPHABETS.findIndex((c) => char.toUpperCase() === c)
    
    const shiftedCharIndex = Math.abs(charIndex - shift)

    const targetIndex = shiftedCharIndex > 26
      ? (26 * Math.floor(shiftedCharIndex / 26)) - shiftedCharIndex
      : shiftedCharIndex
    
    return result + ALPHABETS.at(targetIndex)
  }, '')
}

export { encrypt, decrypt }