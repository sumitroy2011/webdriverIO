var chai = require('chai'),
    chaiHttp = require('chai-http'),
    baseUrl = 'https://vacation.nationwide.co.uk'; //Base API Url
global.expect = chai.expect,
    chai.Should(),
    chai.use(chaiHttp);

describe('Vacation API', function () {


    it('Test vacation creation API sends 200 response ', function (done) {
        chai.request(baseUrl).post('/vacations')
            .set('vacationId', '1234') //Vacation ID
            .set('status', 'Pending') //Vacation status
            .set('content-type', 'application/json')
            .send({ //Employee Id & Start & end date of vacation
                "empId": 0,
                "startDate": "10-04-2018",
                "endDate": "10-04-2018"
            })
            .end(function (err, res) {
                console.log('Following are the error logs :' + '\n' + err);
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                done();
            });
    });

    it('Retreiving vacation details for an employee ', function (done) {
        chai.request(baseUrl).get('/vacations')
            .send('empId', 1234) //Vacation ID
            .set('content-type', 'application/json')
            .end(function (err, res) {
                console.log('Following are the error logs :' + '\n' + err);
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                done();
            });
    });

    it('Retreiving vacation details for an employee ', function (done) {
        chai.request(baseUrl).get('/vacations/requester')
            .send('empId', 1234) //Employee ID
            .set('content-type', 'application/json')
            .end(function (err, res) {
                console.log('Following are the error logs :' + '\n' + err);
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                done();
            });
    });

    it('Retreiving tasks details for an employee ', function (done) {
        chai.request(baseUrl).get('/tasks/owner')
            .send('ownerId', 1234) //Owner ID
            .set('content-type', 'application/json')
            .end(function (err, res) {
                console.log('Following are the error logs :' + '\n' + err);
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                done();
            });
    });


    it('Retreiving tasks details that are delayed ', function (done) {
        chai.request(baseUrl).get('/tasks/status/delayed')
            .set('content-type', 'application/json')
            .end(function (err, res) {
                console.log('Following are the error logs :' + '\n' + err);
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                done();
            });
    });

});