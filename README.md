# BambuLife API

## New Features!
  - Generate jsonwebtoken for Authorization and Authentication
  - Signin and signup user so 1 account have privately list of people 
  - Simple CRUD people, dynamically manage your people 
  - Caching with Redis (i put expire key for 1 minutes, if you need update, delete or add new people data)

### Installation
With npm:

```
$npm install
$npm start
```
for testing :
```
$npm test
```
 
### REST API 
#### List of Account routes :
| Route          | HTTP   |            Description              |
|----------------|--------|-------------------------------------|
| `/account/signin`| POST    | Sign in Account                 |
| `/account/signup` | POST    | Create New Account              |

you can create your own account and make list of people you want, but here i have created an account containing a list of people , so we just need to login to generate the token and test the core API ,just hit endpoint  ```/people-like-you?age=20?experience=true``` (optional query parameter)

```
username: bambulife
password: 12345
```

#### List of People routes : 
| Route                   | HTTP | Description              |
|-------------------------|------|--------------------------|
| `/people-like-you`    | GET    | Get All people data |
| `/people-like-you`     | POST   | Create New People Data |
| `/people-like-you/:id` | PUT    | Update People data|
| `/people-like-you/:id`  | DELETE | Delete People data|

Access API via ```http://localhost:3000``` or ```http://bambulife-api.agnynureza.online```

### Basic usage:
you can use postman or insomnia for API testing :

1. GET ```/people-like-you```
    
Headers: 

| Key  | Value  | 
| ----- | --------- |
| token | ${data.token_from_sigin} | 

Params:

```Bambulife accid=5c2def59b72e1f1568182341```

| Key | Value | info   |
| ---- | ------ | ------- |
| accid | ${data.id_from_signin} | mandatory | 
| age| 20 | optional |
| score| 0.8 | optional |
| longitude | 43.23 | optional |
| latitude | 34.432 | optional |
| monthlyIncome| 4352 | optional |
| experienced | true | optional |

2.POST ```/people-like-you```

Headers:  

| Key  | Value  |
| ---- | ------ |
| token | ${data.token from sigin} |
| Content-type | application/x-www-form-urlencoded |

Params:

```Bambulife accid=5c2def59b72e1f1568182341```

| Key    | Value | info  |
| ------- | ------ | ------ |
| accid | ${data.id_from signin} | mandatory |

Body/payload: 

| parameter  | type   |
| ----------- | ------- |
| name | String |
| age |Integer |
| longitude | String |
| latitude | String |
| monthlyIncome | Integer |
| experienced | Boolean |
| score | Integer |

3.PUT ```/people-like-you/:id```
where id = ${data._id from create people} 

Headers:

| Key     | Value   |
| -------- | -------- |
| token | ${data.token from sigin} |
| Content-type | application/x-www-form-urlencoded | 

Params:

| Key    | Value  | info |
| ------- | ------- | ----- |
| accid | ${data.id_from signin} | mandatory |

body/payload:

| parameter  | type   |
| ----------- | ------- |
| name | String |
| etc |   | |

4.DELETE ```/people-like-you/:id```
where id = ${data._id from create people}

Headers:

| Key    | Value  | 
| ------- | ------- |
| token | ${data.token from sigin} |

Params:

| Key   |Value   |info  |
| ------ | -------- | ------ |
| accid | ${data.id_from signin} | mandatory |

### Tech
* [node.js] - evented I/O for the backend
* [Express] - fast node.js network app framework
* [Mongodb] - the streaming build system
* [Mocha] - test run
* [Mongoose] - Object Data Modeling (ODM) library for MongoDB and Node.js
* [JsonWebToken] - Authorization and Authentication 
* [Redis] - Session Cache
* [Google Cloud Platform] - deployment


[node.js]: <http://nodejs.org>
[Mocha]: <https://mochajs.org/>
[Mongodb]: <https://www.mongodb.com/>
[Mongoose]:<https://mongoosejs.com/>
[JsonWebToken]: <https://jwt.io/>
[Express]: <http://expressjs.com>
[Redis]: <https://redis.io/>
[Google Cloud Platform]: <https://cloud.google.com/>

