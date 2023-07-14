const moment = require("moment");
// const {v4} = require("uuid");
const axios = require("axios");
const dateNow = moment().format("MMM Do YY");

let count = 0;

module.exports.hello = async event => {
    // console.log("START")
    // await pause(3000);
    // console.log("END")
    // count ++

    return {
        statusCode: 200,
        body: JSON.stringify(
            {
                message: dateNow,
                // uuid: v4(),
                count
            }),
    };
};

const pause = async (duration) =>
    new Promise((r) => setTimeout(r, duration));





// const foo = async () => {
//     const a = await Promise.all([1, 2, 3, 4, 5, 6, 7, 8, 9, 10,1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(el => axios.get('https://a7ls1l321e.execute-api.us-east-1.amazonaws.com/dev/hello')));
//     console.log(a);
// }
// foo()


