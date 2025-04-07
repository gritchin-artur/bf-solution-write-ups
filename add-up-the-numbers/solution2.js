'use strict';

/**
 * The function takes a single parameter and returns a value calculated by the expression
 *
 *
 * @param {number} num - some number.
 * @returns {number} the sum of the all numbers of this digit.
 */

export function addUp(num) {
    if (num === 1) return 1;
    return num + addUp(num - 1);
}
