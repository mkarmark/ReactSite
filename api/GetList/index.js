module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    var appsettingValue = process.env["myappsetting"];
    if (appsettingValue == null)
    {
        appsettingValue = "[null]";
    }
    
    context.res = {
    // status: 200, /* Defaults to 200 */
    body: req.headers,
    cookies: [
      {
        name: 'cookie1',
        value: 'value1'
      },
      {
        name: 'cookie2',
        value: 'value2'
      }
    ]
  }
};
