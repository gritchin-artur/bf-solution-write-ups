'use strict';

import { addUp } from './solution1.js';

describe('Basic Tests', () => {
    it('should return 10 when 4 is passed', () => {
        expect(addUp(4)).toEqual(10);
    });
    it('should return 91 when 13 is passed', () => {
        expect(addUp(13)).toEqual(91);
    });
    it('should return 180300 when 600 is passed', () => {
        expect(addUp(600)).toEqual(180300);
    });
    it('should return 77028 when 392 is passed', () => {
        expect(addUp(392)).toEqual(77028);
    });
    it('should return 1431 when 53 is passed', () => {
        expect(addUp(53)).toEqual(1431);
    });
    it('should return 402753 when 897 is passed', () => {
        expect(addUp(897)).toEqual(402753);
    });
    it('should return 276 when 23 is passed', () => {
        expect(addUp(23)).toEqual(276);
    });
    it('should return 500500 when 1000 is passed', () => {
        expect(addUp(1000)).toEqual(500500);
    });
    it('should return 272691 when 738 is passed', () => {
        expect(addUp(738)).toEqual(272691);
    });
});
