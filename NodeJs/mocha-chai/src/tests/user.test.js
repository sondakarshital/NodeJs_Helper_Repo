const User = require('../model/user');
const expect = require("chai").expect;
const nock = require('nock');
const supertest = require("supertest");
const app = require("../app");

var server = supertest.agent("http://localhost:2500");

var id;
describe("delete user collection",async () => {
    const data = await User.deleteMany({});
    console.log('data ',data);
});
describe("POST /", () => {
    it("should return all users", async () => {
        const userData =
            {
                name: "shital",
                email: "shitals@gmail.com",
                password: "shital123",
                age: 21
            }
        const res = await server.post("/user").send(userData);
        id = res.body._id;
        expect(res.status).to.equal(200);
        //expect(res.body.length).to.equal(1);
    });

    it("should return all users", async () => {
        // nock('http://localhost:2500')
        // .get('/user/5d381a54ba5bd73080bdc796')
        // .replyWithFile(200,__dirname+'/responses/user.json')
        const res = await server.get("/user/"+id);
        const response = JSON.parse(res.text);
        expect(res.statusCode).to.equal(200);
        expect(response[0].age).to.equal(21);
        expect(response[0].email).to.equal("shitals@gmail.com");
        //expect(res.body.length).to.equal(1);
    });

});
