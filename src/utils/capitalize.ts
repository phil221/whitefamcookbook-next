export const capitalize = (str: string) => {
    if (str.split(" ").length > 1) {
        const words = str.split(" ");
        const capitalizedWords = words.map(w => w.charAt(0).toUpperCase() + w.slice(1));
        return capitalizedWords.join(" ");
    } else {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
}
