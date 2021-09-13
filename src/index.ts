import express, {Request, Response} from "express";
import { createConnection } from "typeorm";
import bodyParser from "body-parser";
import {Server} from "typescript-rest";
import { ApolloServer } from "apollo-server-express";
import { typeDefs } from "./typeDefs";
import { resolvers } from "./resolvers";
import cors from "cors";
import ormconfig from './ormconfig'

// Importing all handlers
import './handlers';
import { DBConnect } from "./helpers";

// export const app: express.Application = express();
const app = express();
app.use(cors());
app.use(bodyParser.json());
Server.buildServices(app);
let port = parseInt(process.env.PORT || "");
if (isNaN(port) || port === 0) {
  port = 4001;
}
const server = new ApolloServer({ typeDefs, resolvers }) as any;
server.start()
server.applyMiddleware({app});
  
const db =  createConnection({...(ormconfig)});
console.log(db)
app.listen({ port: 4001 }, () =>
console.log(`🚀 Server ready at http://localhost:4001${server.graphqlPath}`)
);


    