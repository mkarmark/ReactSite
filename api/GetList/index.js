module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    var appsettingValue = process.env["myappsetting"];
    if (appsettingValue == null)
    {
        appsettingValue = "[null]";
    }
    
    var cookieValue = "";
    if (req.cookies && typeof req.cookies["testcookie"] === "undefined") {
        cookieValue = Math.random().toString(32).substring(2);
        appsettingValue = "houston we have a problem";
    }
    else
    {
        cookieValue = req.cookies["testcookie"];
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
