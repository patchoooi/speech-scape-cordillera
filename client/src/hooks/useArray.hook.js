import { useState } from "react";

/**
 * Initializes and manages the state of an array.
 * @param {Array} defaultValue - The default value of the array.
 * @returns {Object} - Functions for array state management
 */
function useArray(defaultValue) {
    const [array, setArray] = useState(defaultValue);

    function push(element) {
        setArray(a => [...a, element]);
    }

    function filter(callback) {
        setArray (a => a.filter(callback));
    }

    function update(index, newElement) {
        setArray (a => [
            ...a.slice(0, index),
            newElement,
            ...a.slice(index + 1, a.length),
        ]);
    }

    function remove(index) {
        setArray(a => [...a.slice(0, index),
        ...a.slice(index + 1, a.length)]);
    }

    function clear() {
        setArray([]);
    }

    return { array, set: setArray, push, filter, update, remove, clear};
}

export default useArray;