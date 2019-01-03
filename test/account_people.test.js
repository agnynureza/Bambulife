const chai = require('chai')
    ,chaiHttp = require('chai-http')
    ,chaiSorted = require('chai-sorted')

chai.use(chaiHttp)
chai.use(chaiSorted)

const expect = chai.expect
const accountURL = `http://localhost:3000/account`
const peopleURL = `http://localhost:3000/people-like-you`
let token = ''
let AccountId = ''
let PeopleId = ''

describe('Sign up User', () => {
    it('should create new user account !', (done)=> {
        chai.request(accountURL)
        .post('/signup')
        .send({
            username: `agnyreza`,
            password: `12345`
        })
        .end((err,res)=> {
            if(!err){
                expect(res).to.have.status(200)
                expect(res.body.message).to.be.a('string')
                expect(res.body.data).to.be.an('object').to.include.keys('id','username','token')
                done()
            }
        })
    })
}).timeout(2000)

describe('Sign in User', () => {
    it('should sign in if user have right credential', (done)=>{
        chai.request(accountURL)
        .post('/signin')
        .send({
            username:`agnyreza`,
            password:`12345` 
        })
        .end((err,res)=> {
            token = res.body.data.token
            AccountId = res.body.data.id
            if(!err){
                expect(res).to.have.status(200)
                expect(res.body.message).to.be.a('string')
                expect(res.body.data).to.be.an('object').to.include.keys('id','username','token')
                done()
            }
        })
    })
}).timeout(2000)

describe('Create new people', () => {
    it('should be create an people',(done)=> {
        chai.request(peopleURL)
        .post('/')
        .query({accid : AccountId})
        .set('token', token)
        .send({
            name : 'firza',
            age: 20,
            longitude: '45.1231',
            latitude: '35.131',
            monthlyIncome : 5463,
            score: 0.8,
            accid: AccountId,
        })
        .end((err,res)=>{
            PeopleId = res.body.data._id
            if(!err){
                expect(res).to.have.status(200)
                expect(res.body.message).to.be.an('string')
                expect(res.body.data).to.be.an('object')
                expect(res.body.data.name).to.be.a('string')
                expect(res.body.data.age).to.be.a('number')
                done()
            }
        })
    })
}).timeout(2000)


describe('Read all data people', ()=> {
    it('should show all people who like me',(done)=>{
        chai.request(peopleURL)
        .get('/')
        .query({accid : AccountId})
        .set('token',token)
        .end((err,res)=>{
            if(!err){
                expect(res).to.have.status(200)
                expect(res.body.message).to.be.a('string')
                expect(res.body.peopleLikeYou).to.be.an('array')
                expect(res.body.peopleLikeYou).to.be.sortedBy('score',true)
                done()
            }
        })
    })
}).timeout(2000)


describe('Update data people',()=>{
    it('should update data people',(done)=>{
        chai.request(peopleURL)
        .put(`/${PeopleId}`)
        .query({accid:AccountId})
        .set('token', token)
        .send({
            name: `milea`,
            age:`22`
        })
        .end((err,res) => {
            if(!err){
                expect(res).to.have.status(200)
                expect(res.body.message).to.be.a('string')
                expect(res.body.data).to.be.an('object')
                expect(res.body.data.name).to.be.an('string')
                expect(res.body.data.age).to.be.an('number')
                done()
            }
        })
    })
}).timeout(2000)

describe('Delete data people',()=>{
    it('should be delete data people',(done)=>{
        chai.request(peopleURL)
        .delete(`/${PeopleId}`)
        .query({accid: AccountId })
        .set('token', token)
        .end((err,res)=>{
            if(!err){
                expect(res).to.have.status(200)
                expect(res.body.message).to.be.a('string')
                expect(res.body.data).to.be.an('object')
                done()
            }
        })
    })
}).timeout(5000)