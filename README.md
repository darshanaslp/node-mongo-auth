#  Node Express Mongodb Authentication

## How to Run

npm install

npm run start

## How to test

npm run test

### These are api documentation  type need to run any api server.

### Authentication:

    POST /api/auth/signup
	{
	username:""
	email:""
	password:""
	roles:[""]
	
	}
    POST /api/auth/signin
	
	{
	username:""
	password:""
	
	
	}
	
	need to give these are on 

 ###Authorization:

    GET /api/test/all
    GET /api/test/user for loggedin users (user/moderator/admin)
    GET /api/test/mod for moderator
    GET /api/test/admin for admin
	
	need to provide token for admin,moderator,user