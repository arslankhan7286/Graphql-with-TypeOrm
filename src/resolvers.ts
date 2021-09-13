import { User } from "./entity/User";
import { Product } from "./entity/Product";
import { ContextLanguage } from "typescript-rest";

// Provide resolver functions for your schema fields
export const resolvers = {
  Query: {
    getUser: async (_: any, args: any) => {
      const { id } = args;

      return await User.findOne({ where: { id: id } });
    },
    getAllUsersDetail: async (_: any, args: any) => {
      const { id } = args;
      console.log("userfIND")
      return await User.find();
    },
    getAllProductsDetail: async (_: any, args: any) => {
      const { id } = args;
      console.log("userfIND")
      return await Product.find();
    }


    
  },
  Mutation: {
    addUser: async (_: any, args: any) => {
      const {id, firstName, lastName, age , email , password } = args;
      try {
        const user= User.create({
          id,
          firstName,
          lastName,
          email,
          password,
          age,
        });

        await user.save();
        return user;
      } catch (error) {
        console.log("error",error)
        return false;
      }
    },
    addProduct: async (_: any, args: any) => {
      const {id, name, description , price , photo, uid } = args;
      const userId = {
        id: uid
      }
      try {
        const products= Product.create({
          id,
          name,
          description,
          price,
          photo,
          userId
        });

        await products.save();
        return products;
      } catch (error) {
        console.log("error",error)
        return false;
      }
    },
    updateProducts: async (_: any, args: any) => {
      const {id, name, description, photo, price, uid } = args;
      const productID = {
        id: uid
      }
      console.log("result1")
      let result1 = await Product.update(id,{name:name, description:description,photo:photo,price:price})
      console.log("result1", result1)
      return result1;
      // return Product.update({description:description,name: name,price:price,photo:photo} , {where: {id}})
    }
  },

};
