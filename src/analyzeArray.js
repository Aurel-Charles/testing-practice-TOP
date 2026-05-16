
export function analyzeArray(array) {
    const object = {}
    if (array.length === 0) {
        object.average = null;
        object.max = null;
        object.min = null;
        object.length = 0;
        return object
        }    

    const objectSum = array.reduce(
        (accumulator, currentValue) => accumulator + currentValue, 0,
    ); 

    object.average = objectSum / array.length
    object.max = Math.max(...array) 
    object.min = Math.min(...array) 
    object.length = array.length

    return object
}