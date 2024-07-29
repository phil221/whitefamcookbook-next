export const capitalize = (str: string) => {
    const words = str.replace(/[^a-zA-Z0-9 ]/g, "").split(" ");
    if (words.length > 1) {
        const capitalizedWords = words.map(w => w.charAt(0).toUpperCase() + w.slice(1));
        return capitalizedWords.join(" ");
    } else {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
}
