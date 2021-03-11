import   {DB, PORT, MODE } from './config'
import express, {Application, Response, Request, NextFunction} from 'express'
const app:Application = express()
import { ApolloServer } from "apollo-server-express";
import mongoose from "mongoose";
import { typeDefs, resolvers } from './schema'
import * as AppModels from './modeles'
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
        ...AppModels,
        resolvers,
      };
    },
  });
  
  const startApp = async () => {
  await mongoose.connect(`${DB}`, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
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
  }

  startApp();
