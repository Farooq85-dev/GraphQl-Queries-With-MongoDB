import dotenv from "dotenv";
dotenv.config();
import express from "express";
import morgan from "morgan";
import cors from "cors";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import connectDb from "./Config/Db";
import { getAllUsers, getUserbyId } from "./Resolvers/user.resolver";
import { Queries } from "./TypeDefs";
import { getAllCourses, getCoursebyId } from "./Resolvers/course.resolver";

connectDb();

const server = new ApolloServer({
  typeDefs: [Queries.UserQueries, Queries.CourseQueries],
  resolvers: {
    Query: {
      users: getAllUsers,
      userbyId: getUserbyId,
      courses: getAllCourses,
      coursebyId: getCoursebyId,
    },
  },
});

const PORT = Number(process.env?.PORT) || 4500;

const startGraphQlServer = async () => {
  const app = express();
  app.use(express.json());
  app.use(cors());
  app.use(morgan("dev"));

  try {
    const { url } = await startStandaloneServer(server, {
      listen: { port: PORT },
    });
    console.log(`🚀 Server is Running at ${url}`);
  } catch (error) {
    console.error("Failed to start the server:", error);
  }
};

startGraphQlServer();
