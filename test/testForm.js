const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../index'); 
const expect = chai.expect;

chai.use(chaiHttp);
describe('Feedback Form', function() {
  it('should submit feedback and receive a success response', function(done) {
    chai.request(app)
      .post('/feedback')
      .send({ name: 'John Doe', feedback: 'Great service!' })
      .end((err, res) => {
        expect(res).to.have.status(200);  // Expect 200 status
        done();
      });
  });

  it('should return an error for missing fields', function(done) {
    chai.request(app)
      .post('/feedback')
      .send({})  // Send empty body to simulate missing fields
      .end((err, res) => {
        expect(res).to.have.status(400);  // Expect 400 status for missing fields
        done();
      });
  });
});









