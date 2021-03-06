var request = require('./app/routes/auth.routes');
const { app, server } = require("./server.js");


describe("TEST server.js", () => {
  afterAll(async () => {
    server.close();
  });
  
   it('should return Hello World at /', function( done ) {
        
        request.get('http://localhost:5000/').end(function(err, res) {
            if (err) { return done(err); }
            
            assert.equal(res.status, 200);
            done();
        });
        
    });
	
	 it('should return a 404 at /foo', function( done ) {
        
        request.get('http://localhost:4000/foo').end(function(err, res) {
            if (err) {
                assert.equal(err.message, 'Not Found');
                assert.equal(res.status, 404);
                assert.equal(res.text, 'Not Found');
                return done();
            }
            
            done(new Error('Request to /foo should have failed'));
        });
        
    });

  it("GET / route , should return message", async () => {
    return request(app)
      .get("/")
      .expect(200)
      .then(res => {
        // { msg: 'WORKING!!!' }
        expect(res.body).toMatchSnapshot();
      });
  });

  it("GET /api/test/all , should return book where id=1", async () => {
    const id = 1;
    return request(app)
      .get(`/api/test/all`)
      .expect(200)
      .then(res => {
        expect(res.body).toMatchSnapshot();
      });
  });
  
  it("GET /api/test/user , should return book where id=1", async () => {
    const id = 1;
    return request(app)
      .get(`/api/test/user`)
      .expect(200)
      .then(res => {
        expect(res.body).toMatchSnapshot();
      });
  });
  
 
  
  it("GET /api/test/admin , should return book where id=1", async () => {
    const id = 1;
    return request(app)
      .get(`/api/test/admin`)
      .expect(200)
      .then(res => {
        expect(res.body).toMatchSnapshot();
      });
  });

  
  
  
});