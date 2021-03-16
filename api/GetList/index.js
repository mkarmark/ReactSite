module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    context.res = {
        headers: { 'foobar': 'baz', 'bb':'cc'},
    // status: 200, /* Defaults to 200 */
    body: 'Hello, world.',
    cookies: [
      {
        name: 'cookie1',
        value: req.Query.Name
      },
      {
        name: 'cookie2',
        value: 'value2'
      }
    ]
  }
};
