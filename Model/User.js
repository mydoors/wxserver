const axios = require('axios')

async function getUserInfo(code) {
    try {
        const response = await axios.get('https://api.weixin.qq.com/sns/jscode2session',
            {
                params: {
                    appid: 'wx78310fab6fddd577',
                    secret:'487afcaf2cbd202ddc2ded28e7d6e0cb',
                    js_code:code

                }
            })

        return response

    } catch (error) {
        console.error(error);
    }
}

module.exports={
    getUserInfo
}
