function toNumber(a, b) {
    a = Number(a)
    b = Number(b)
    if ( Number.isNaN(a) || Number.isNaN(b) ) { return null }
    return [a , b]
}

export const calculator = {
   add(a, b) {
    const numbers = toNumber(a, b)
    if (numbers === null) { return false }
    return numbers[0] + numbers[1] } , 

   subtract(a, b) {
    const numbers = toNumber(a, b)
    if (numbers === null) { return false }
    return numbers[0] - numbers[1] } , 

   multiply(a, b) {
    const numbers = toNumber(a, b)
    if (numbers === null) { return false }
    return numbers[0] * numbers[1]} , 

   divide(a, b) { 
    const numbers = toNumber(a, b)
    if (numbers === null || numbers[1] === 0 ) { return false }
    return numbers[0] / numbers[1]} , 
}