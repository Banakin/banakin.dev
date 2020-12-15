exports.handler = async function(event, context) {
    return new Promise(async (resolve, reject) => {
        resolve({
            statusCode: 200,
            headers: {
                "Access-Control-Allow-Headers" : "Content-Type",
                "Access-Control-Allow-Origin": (process.env.NODE_ENV !== 'production' ? '*' : 'https://banakin.dev/'),
                "Access-Control-Allow-Methods": "POST",
                "Content-Type": 'application/json',
            },
            body: JSON.stringify({ "msg": "Hello!" }),
        });
    })
}