// Construct a schema, using GraphQL schema language
import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type Query {
    getUser(id: Int!): User
    getAllUsersDetail: [User]!
    getAllProductsDetail: [Product]!

  }
  type User {
    id: Int
    email:String
    password:String
    firstName: String
    lastName: String
    about:String
    age: String
    product:[Product]
  }
  type Mutation {
    addUser(firstName: String, lastName: String,email:String,password:String,photo:String,phone:String,about:String,age: Int): User
    addProduct(name: String,description:String,photo:String,price:String,uid:Int): Product
    updateProducts(id:Int, name: String, description:String, photo:String, price:String): Product!
  }
  
  type Product {
    id: Int
    name:String
    description:String
    photo: String
    price:String
    uid:Int
  }
`;
