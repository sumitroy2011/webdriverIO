describe('Testing - Sample Tests', function() {

    it('Google should search the term', function() {
        this.timeout(0);
        browser.url('http://www.google.com');
        browser.setValue('#lst-ib', "Ajay Vashist");
        browser.waitForEnabled('.jsb input[value="Google Search"]');
        browser.click('#sbse7 .sbqs_c');
    });

});