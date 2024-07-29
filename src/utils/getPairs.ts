export const getPairs = (items: string[]) => {
    return items.reduce((prev, current, i) => {
        if (i % 2 === 0) {
            prev.push([current]);
            return prev;
        } else {
            prev[prev.length - 1].push(current);
            return prev;
        }
    }, [] as string[][]);
};