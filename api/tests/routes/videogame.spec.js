/* eslint-disable import/no-extraneous-dependencies */

const session = require('supertest-session');
const app = require('../../src/app.js');
const supertest = require("supertest");





describe("GET /videogames", function() {
  it("it should has status code 200", function() {
    supertest(app)
      .get("/videogames")
      .expect(200)
      .end(function(err, res){
        if (err) done(err);
       return done();
      });
  });
});

describe("GET /genres", function() {
  it("it should has status code 200", function(done) {
    supertest(app)
      .get("/genres")
      .expect(200)
      .end(function(err, res){
        if (err) done(err);
        done();
      });
  });
});
describe("GET /videogame/:id", function() {
  it("it should has status code 200", function(done) {
    supertest(app)
      .get("/videogame/10035")
      .expect(200)
      .end(function(err, res){
        if (err) done(err);
        done();
      });
  });
});

describe("GET /videogames?name=", function() {
  it("it should has status code 200", function() {
    supertest(app)
      .get("/videogames?name=cars")
      .expect(200)
      .end(function(err, res){
        if (err) done(err);
        done();
      });
  });
});