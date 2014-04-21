/**
 * Created by dongyancen on 14-4-17.
 */
describe("browser", function () {
    var browser = kity.Browser;
    if(browser.chrome){
        it("is chrome", function () {
            expect(browser.chrome).toBeTruthy()
        });
    }
    if(browser.gecko){
        it("is firefox", function () {
            expect(browser.gecko).toBeTruthy()
        });
    }
    if(browser.ie){
        it("is ie", function () {
            expect(browser.ie).toBeTruthy()
        });
    }


});
describe("kf", function () {

        it("kf is defined", function () {
            expect(kf).toBeDefined();
        });

});
describe("Parser.register", function () {

    it("Parser.register", function () {
        kf.Parser.register('type_test',function(){this.type = 'type_test';});
        kf.Parser.use('type_test');
        expect(kf.Parser.use('type_test').impl.type).toBe('type_test');
    });

});