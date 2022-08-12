const moment = require("moment");
const { v4  } =require("uuid");
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