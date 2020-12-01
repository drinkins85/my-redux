export default function shallowEqual(objA: Record<any, any>, objB: Record<any, any>): boolean {
    if (objA === objB) {
        return true;
    }

    const keysA = Object.keys(objA);
    const keysB = Object.keys(objB);

    if (keysA.length !== keysB.length) {
        return false;
    }

    for (let i = 0; i < keysA.length; i++) {
        if (!Object.prototype.hasOwnProperty.call(objB, keysA[i])) {
            return false;
        }

        if (objA[keysA[i]] !== objB[keysA[i]]) {
            return false;
        }
    }

    return true;
}
