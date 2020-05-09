


let url = "https://www.instagram.com/graphql/query/?query_hash=6b838488258d7a4820e48d209ef79eb1&variables=%7B%22has_threaded_comments%22%3Atrue%7D";
exports.handler = function(event, context, callback){
    callback(null, {
        statusCode: 200,
        body: 'Hello world'
    });
};