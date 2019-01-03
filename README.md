# Bumi Life API

## New Features!
  - generate jsonwebtoken for Authorization and Authentication
  - signin and signup user so 1 account have privately list of people 
  - simple CRUD people, dynamically manage your people 
 
### REST API 
#### List of Account routes :
| Route          | HTTP   |            Description              |
|----------------|--------|-------------------------------------|
| `/account/signin`| POST    | Sign in Account                 |
| `/account/signup` | POST    | Create New Account              |

kamu bisa membuat sendiri accountnya dan membuat list people yang kamu inginkan , disini saya sudah membuat account berisi list of people , jadi cukup tinggal login saya , untuk mengenerate token , kalau ingin membuat account baru silahkan, dan tinggal hit endpoint ```/people-like-you?age=20?experience=true``` (optional query parameter)
```
username: bumilife
password: 12345
```

#### List of People routes : 
| Route                   | HTTP | Description              |
|-------------------------|------|--------------------------|
| `/people-like-you`    | GET    | Get All people data |
| `/people-like-you`     | POST   | Create New People Data |
| `/people-like-you/:id` | PUT    | Update People data|
| `/people-like-you/:id`  | DELETE | Delete People data|

### Installation
With only npm:

```
$npm install
$npm start
```
for testing :
```
$npm test
```

Access API via ```http://localhost:3000``` or ```http://bumilife-api.agnynureza.online```

### Basic usage:
you can use postman or insomnia for API testing :
1. GET ```/people-like-you```
    Headers: 
    |Key|Value|
    |----|----|
    |token|${data.token_from_sigin} 
    Params:
     |Key|Value|info|
    |----|----|---|
    |accid|${data.id_from_signin}|mandatory|
    |age| 20 |optional|
    |score|0.8|optional|
    |etc
2. POST ```/people-like-you```
     Headers: 
    |Key|Value|
    |----|----|
    |token|${data.token from sigin}
    |Content-type|application/x-www-form-urlencoded|
    Params
     |Key|Value|info|
    |----|----|---|
    |accid|${data.id_from signin}|mandatory|
    Body/payload: 
     |parameter|type|
    |----|----|
    |name| String|
    |age|Integer|
    |longitude|String|
    |latitude|String|
    |monthlyIncome|Integer|
    |experienced|Boolean|
    |score|Integer|

3. PUT ```/people-like-you/:id```
    where id = ${data._id from create people} 
    Headers: 
    |Key|Value|
    |----|----|
    |token|${data.token from sigin}
    |Content-type|application/x-www-form-urlencoded|
    Params
     |Key|Value|info|
    |----|----|---|
    |accid|${data.id_from signin}|mandatory|
    body/payload:
    |parameter|type|
    |---|---|
    |name|String|
    |etc
4. DELETE ```/people-like-you/:id```
     where id = ${data._id from create people} 
    Headers: 
    |Key|Value|
    |----|----|
    |token|${data.token from sigin}
    Params
     |Key|Value|info|
    |----|----|---|
    |accid|${data.id_from signin}|mandatory|

### Tech
* [node.js] - evented I/O for the backend
* [Express] - fast node.js network app framework
* [Mongodb] - the streaming build system
* [Mocha] - test run
* [Mongoose] - Object Data Modeling (ODM) library for MongoDB and Node.js
* [JsonWebToken] - Authorization and Authentication 

[node.js]: <http://nodejs.org>
[Mocha]: <https://mochajs.org/>
[Mongodb]: <https://www.mongodb.com/>
[Mongoose]:<https://mongoosejs.com/>
[JsonWebToken]: <https://jwt.io/>
[Express]: <http://expressjs.com>