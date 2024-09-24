const chai = require('chai');
const chaiHttp = require('chai-http');
const index = require('../index'); 
const expect = chai.expect;

chai.use(chaiHttp);

describe('Feedback Form', () => {
    it('should submit feedback and receive a success response', (done) => {
        chai.request(app)
            .post('/submit-feedback') // Replace with your form's action URL
            .send({
                name: 'John Doe',
                favourite: 'Vanilla',
                rating: '5',
                feedback: 'Best ice cream ever!'
            })
            .end((err, res) => {
                expect(res).to.have.status(200); // Adjust based on your actual response
                expect(res.body).to.have.property('message').that.equals('Feedback submitted successfully.');
                done();
            });
    });

    it('should return an error for missing fields', (done) => {
        chai.request(app)
            .post('/submit-feedback')
            .send({
                name: '', // Missing name
                favourite: 'Chocolate',
                rating: '5',
                feedback: 'Delicious!'
            })
            .end((err, res) => {
                expect(res).to.have.status(400); // Adjust based on your actual response
                expect(res.body).to.have.property('error').that.equals('Name is required.');
                done();
            });
    });
});
