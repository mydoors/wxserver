var crypto = require('crypto');
const key = '651f621ca5c8f930'
const iv = '6324750004598728'
const mode = 'aes-128-cbc'
class AES {

    constructor() {

    }

    static encrypt(data) {

        var cipher = crypto.createCipheriv(mode, key, iv);
        var crypted = cipher.update(data, 'utf8', 'binary');
        crypted += cipher.final('binary');
        crypted = new Buffer(crypted, 'binary').toString('base64');
        return crypted;
    };


    static  decrypt(crypted) {
        crypted = new Buffer(crypted, 'base64').toString('binary');
        var decipher = crypto.createDecipheriv(mode, key, iv);
        var decoded = decipher.update(crypted, 'binary', 'utf8');
        decoded += decipher.final('utf8');
        return decoded;
    }
}


module.exports = {
    AES
}

