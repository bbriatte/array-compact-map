export type ArrayCompactMapHandler<T, O> = (e: T, index: number, array: T[]) => O | undefined;

declare global {
    interface Array<T> {
        compactMap<O>(transform: ArrayCompactMapHandler<T, O>): O[]
    }
}

if(!Array.prototype.compactMap) {
    Array.prototype.compactMap = function<T, O>(transform: ArrayCompactMapHandler<T, O>): O[] {
        const res: O[] = [];
        let out: O | undefined;
        for(let i = 0; i < this.length; i++) {
            out = transform(this[i], i, this);
            if(out !== undefined) {
                res.push(out);
            }
        }
        return res;
    }
}
