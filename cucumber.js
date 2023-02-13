module.exports = {
    default: `
        --publish-quiet
        --require=features/**/*.ts
        --require-module=ts-node/register
        --format=@serenity-js/cucumber
        --world-parameters={"baseApiUrl":"https://jsonplaceholder.typicode.com"}
    `,
}
