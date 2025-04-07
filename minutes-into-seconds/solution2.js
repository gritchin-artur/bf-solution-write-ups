'use strict';

/**
 * The function converts minutes into a seconds
 *
 *
 * @param {number} minutes - some number.
 * @returns {number} returns the number of seconds.
 */

export function convert(minutes) {
    let seconds = 0;
    for (let i = 0; i < minutes; i++) {
        seconds += 60;
    }
    return seconds;
}
