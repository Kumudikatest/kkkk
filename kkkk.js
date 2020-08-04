const Swagger = require('swagger-client');

exports.handler = async (event) => {
    try {
        let response = await Swagger.http({
            url: `https://api-sandbox.starlingbank.com/api/v2/kyc/result`,
            method: 'get',
            query: {},
            headers: { "Accept": "application/json" }
        });
        console.log(response)
        // your code goes here

    } catch (err) {
        console.log(err)
        // error handling goes here
    }

    return { "message": "Successfully executed" };
};