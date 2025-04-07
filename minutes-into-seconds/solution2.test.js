'use strict';

import { convert } from './solution2.js';

describe('Basic Tests', () => {
    it('should return 360 when 6 is passed', () => {
        expect(convert(6)).toEqual(360);
    });
    it('should return 240 when 4 is passed', () => {
        expect(convert(4)).toEqual(240);
    });
    it('should return 480 when 8 is passed', () => {
        expect(convert(8)).toEqual(480);
    });
    it('should return 3600 when 60 is passed', () => {
        expect(convert(60)).toEqual(3600);
    });
});
