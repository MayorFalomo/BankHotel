import express from "express";
import dotEnv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import { ApolloServer } from "@apollo/server";
import { typeDefs } from "./models/typeDefs.js";
import { resolvers } from "./resolvers.js";
import { startStandaloneServer } from "@apollo/server/standalone";

const app = express();

dotEnv.config({ path: "./vars/.env" });

app.use(express.json());
app.use(cors());

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

mongoose
  .connect(process.env.MONGO_URL, {
    useUnifiedTopology: true,
  })
  .then(async () => {
    const { url } = await startStandaloneServer(server, {
      listen: { port: 4000 },
    });
    console.log(`Server is running at port: ${4000} `);
  })
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Welcome to Express Server");
});
