import express from "express"; // yarn add express
import { createHandler } from "graphql-http/lib/use/express";
// import { schema } from "./Models/Schema";

const app = express();
const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: "Query",
    fields: {
      hello: {
        type: GraphQLString,
        resolve: () => "world",
      },
    },
  }),
});
// Create a express instance serving all methods on `/graphql`
// where the GraphQL over HTTP express request handler is

app.all("/graphql", createHandler({ schema }));

app.listen({ port: 4000 });
console.log("Listening to port 4000");
