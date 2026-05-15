
function characterIsLetter(c) {
    const regex = /[a-zA-Z]/
    return regex.test(c)
}

function shiftReductor(shifterNum) {
    shifterNum = shifterNum % 26;      
    if (shifterNum < 0) {
        shifterNum += 26;              
    }
    return shifterNum;
}

function wrapperLetter(character, shifter) {
    let newCode
    let uppercase = null
    let  offset = null
    if (character >= 'A' && character <= 'Z') {
        uppercase = true
        offset = 65
    }
    else{
        uppercase = false
        offset = 97
    }
    newCode = (character.charCodeAt(0) - offset + shifter)% 26 + offset
    return newCode
}


export function caesarCipher(string, shifterNum) {
    const shifter = shiftReductor(shifterNum)
    
    let result = []
    const decomposedString = [...string]
    
    decomposedString.forEach(character => {
        if (!characterIsLetter(character)) {
            result.push(character)
            return
        }

        let newCharacterCode  = wrapperLetter(character, shifter)
        
        let newCharacter = String.fromCharCode(newCharacterCode);

        result.push(newCharacter)

    });

    result = result.join('')
    return result
}