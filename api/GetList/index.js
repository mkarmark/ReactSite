module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    context.res = {
        headers: { 'foo2': 'baz'},
        body: {'Joe', 'Misha', 'Mitali', 'Wenonah'}
    }
};
