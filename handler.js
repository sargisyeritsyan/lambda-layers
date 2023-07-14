const moment = require("moment");
const {v4} = require("uuid");
const axios = require("axios");
const dateNow = moment().format("MMM Do YY");

module.exports.hello = async event => {
    return {
        statusCode: 200,
        body: JSON.stringify(
            {
                message: dateNow,
                uuid: v4()
            }),
    };
};


const foo = async () => {
    const a = await Promise.all([1, 2, 3, 4, 5, 6, 7, 8, 9, 10,1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(el => axios.get('https://a7ls1l321e.execute-api.us-east-1.amazonaws.com/dev/hello')));
    console.log(a);
}
foo()


