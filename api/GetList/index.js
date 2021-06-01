module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    const name = (req.query.name || (req.body && req.body.name));
    const responseMessage = name
        ? "Hello, " + name + ". This HTTP triggered function executed successfully."
        : "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response.";

    const recipes = {
        "results": [
            {
                "name": "Homemade Strawberry Jam",
                "quantity": "2 cups",
                "ingredients": [
                    "2 lb. strawberries, halved",
                    "1 c. granulated sugar",
                    "2 tbsp. lemon juice",
                    "Pinch of kosher salt"
                ],
                "url": "https://www.delish.com/cooking/recipe-ideas/recipes/a30276/strawberry-jam-recipe/",
                "image": "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/singleimagebug-strawberry-jam-1555107425.jpg?crop=1.00xw:0.947xh;0,0&resize=980:*"
            },
            {
                "name": "Ginger Peach Jam",
                "quantity": "1 cup",
                "ingredients": [
                    "2 lb. fresh peaches",
                    "2 tbsp. lemon juice",
                    "1 1/2 c. granulated sugar",
                    "1 tsp. lemon zest",
                    "2 tsp. grated fresh ginger (optional)"
                ],
                "url": "https://www.delish.com/cooking/recipe-ideas/a27422931/peach-jam-recipe/",
                "image": "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/190509-peach-jam-024-1558039521.jpg?crop=0.447xw:1.00xh;0.0969xw,0&resize=980:*"
            },
            {
                "name": "Vanilla Lime Blueberry Jam",
                "quantity": "2 cups",
                "ingredients": [
                    "3 1/2 c. fresh blueberries",
                    "1/2 c. granulated sugar",
                    "Juice of 1 lime",
                    "1 tsp. lime zest",
                    "1/2 tsp. pure vanilla extract"
                ],
                "url": "https://www.delish.com/cooking/recipe-ideas/a27104260/blueberry-jam-recipe/",
                "image": "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/190410-blueberry-jam-015-1555947959.jpg?crop=0.9997369113391213xw:1xh;center,top&resize=980:*"
            }
        ]
    }
    
    context.res = {
        // status: 200, /* Defaults to 200 */
        body: JSON.stringify(recipes)
    };
}