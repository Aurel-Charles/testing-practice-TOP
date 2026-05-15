export function reverseString(string) {
    if (typeof string !== "string") {
        return false
    }
    const reversedString = [...string].reverse().join("")
    
    return reversedString
}