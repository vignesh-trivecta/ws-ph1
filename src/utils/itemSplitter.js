export default function itemSplitter(item) {
    if (!item) return item;
    const arr = item.split(" ");
    if (arr.length < 2) return item;

    return arr.join("-");
}