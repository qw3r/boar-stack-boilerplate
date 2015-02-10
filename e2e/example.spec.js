'use strict';

describe('ExampleController End-to-End', function() {
    it('should check for header', function() {
       browser.get('/list');
       //expect(element(by.css('.header')).isDisplayed()).to.eq(true);
       expect(element(by.css('.header')).isDisplayed()).toEqual(true);
    });
});