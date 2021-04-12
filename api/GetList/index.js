module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    var appsettingValue = process.env["myappsetting"];
    if (appsettingValue == null)
    {
        appsettingValue = "[null]";
    }
    
    var cookieValue = "";
     const cookies = parse(req.headers.cookie);
    context.log(JSON.stringify(cookies));
    var sessionId = cookies.testcookie;
    if (!cookies.testcookie) {
        cookieValue = Math.random().toString(32).substring(2);
        appsettingValue = "houston we have a problem";
    }
    else
    {
        cookieValue = sessionId;
        appsettingValue = "all good";
    }
    
    context.res = {
        headers: { 'foobar': 'baz', 'bb':'cc'},
    // status: 200, /* Defaults to 200 */
    body: appsettingValue,
    cookies: [
      {
        name: 'cookie1',
        value: 'value1'
      },
      {
        name: 'cookie2',
        value: 'value2'
      },
        {
            name: 'testcookie',
            value: cookieValue
        }
    ]
  }
};
