/**
 * @param   {string} str
 * @returns {string} 
 * @description function to split the 2 or more word title and
 * join them with a delimitter '-' into a single word
*/

export function titleSplitter(str) {
    const arr = str.split(" ");
    console.log(str)

    // if the length of the array is greater than 1
    if (arr.length > 1) {
        const newArr = arr.map((item) => item.toLowerCase());
        console.log(newArr.join("-"))
        return newArr.join("-");
    }
    return str.toLowerCase();
}
