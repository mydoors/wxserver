var {Userfindone,handler} =require('../Protocol/Msghandler')
var {should}=require('should')
var assert = require('assert');
describe('Array', function() {
    describe('#indexOf()', function() {
        it('should return -1 when the value is not present', function() {
            assert.equal([1,2,3].indexOf(5), -1);
        });
    });
});




describe('#find()', function() {
    it('responds with matching records', async function() {
        let user = await Userfindone('ojcqJ5TxCfNvV1WunhRLNo7ZoQ2A');
        user.should.have.property('session_key')
    });
});

describe('#handler()', function() {
    it('responds with handler message', async function() {
        var loginmsg = {
            id: 1,
            type:'request',
            info: {
                logincode:'003TAS1x128nqa0ri94x1iM52x1TAS16'
            }
        }
        let response = await handler(loginmsg)
        response.should.have.property('sessionid')
    });
});
