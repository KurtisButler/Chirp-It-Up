import * as mysql from "mysql";
import chirps from "./chirps";
import users from "./users";

export const Connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "chirprapp",
  password: "password",
  database: "c16_chirpr",
});

export const Query = (query, values) => {
  return new Promise((resolve, reject) => {
    Connection.query(query, values, (err, results) => {
      if (err) throw err;
      resolve(results);
    });
  });
};

export default {
  chirps,
  users
}