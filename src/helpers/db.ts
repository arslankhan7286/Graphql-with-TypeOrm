import {Connection, createConnection, getConnection} from "typeorm";
import ORMConfig from "../ormconfig";
import {User} from '../entity/User'

export const DBConnect = async () => {
  let connection: Connection | undefined;
  // try {
  //   connection = getConnection();
  //   await getConnection()
  //   .createQueryBuilder()
  //   .insert()
  //   .into(User)
  //   .values([
  //       { firstName: "Timber", lastName: "Saw" }, 
  //       { firstName: "Phantom", lastName: "Lancer" }
  //    ])
  //   .execute();

  // } catch (e) {
  // }
  console.log("connection")
  try {
    if (connection) {

      if (connection.isConnected) {
      
        await createConnection(ORMConfig);
      }
    } 
    console.log("🌴 Database connection was successful!");
  } catch (e) {
    console.error('ERROR: Database connection failed!!', e);
    throw e;
  }
};

export const TryDBConnect = async (onError: Function, next?: Function) => {
  try {
    await DBConnect();
    if (next) {
      next();
    }
  } catch (e) {
    onError();
  }
};

