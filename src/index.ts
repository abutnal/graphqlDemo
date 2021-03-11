import   {DB, PORT, MODE } from './config'
import express, {Application, Response, Request, NextFunction} from 'express'
const app:Application = express()
import { ApolloServer } from "apollo-server-express";
// import { schema } from './schema'
import { typeDefs, resolvers } from './schema'
import bodyParser from "body-parser";
import cors from "cors";
app.use(cors());
app.use(bodyParser.json());
let playground:boolean 
  if(MODE==="production"){
    playground = false
  }else{
    playground = true
  }
const server = new ApolloServer({
    typeDefs,
    resolvers,
    playground,
    introspection: true,
    context: ({ req }) => {
      return {
        req,
        // ...AppModels,
      };
    },
  });
  
app.listen(PORT, ()=>{
    try {
        server.applyMiddleware({
            app,
            cors: false,
          });
            console.log(`App runing on ${PORT}`)
    } catch (error) {
        
    }
})

