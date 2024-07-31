/**
 * @param   {string} path
 * @returns {string} 
 * @description splits the give path which will contain '/' in it and 
 * return back them as a words array
*/

export function pathSplitter(path) {
    // edge case
    if (!path) return;

    const arr = path.split("/");
    
    // if the length of the array is greater than 1
    if (arr.length > 1) {
        return arr;
    }
    return path;
}
