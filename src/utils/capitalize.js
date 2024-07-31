/**
 * @param   {string} str
 * @returns {string}
 * @description split the give word into words of arrays and capitalize each word
 */

export function capitalize(str) {
    // edge cases
    if (!str) return;
    if (str === "") return str;

    // splitting the words into a array of words
    const arr = str.split(" ");

    // function to capitalize the initial letter of a word
    function capitalizeFirstLetter(word) {
        const first = word.slice(0, 1);
        const rest = word.slice(1);
        return first.toUpperCase() + rest;
    }

    // if the array length is greater than 1
    if (arr.length > 1) {
        const newArr = arr.map((item) => capitalizeFirstLetter(item));
        return newArr.join(" ");
    }
    return capitalizeFirstLetter(str);
}
