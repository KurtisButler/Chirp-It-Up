import { Query } from "./index";

const one = (id) => Query("Select * from chirps where chirps.id = ?", [id]);

const all = async () => Query("Select * FROM chirps");

const insert = (userid, content, location) =>
  Query("Insert into chirps ( userid, content, location) VALUES (?, ?, ?)", 
   [userid,
    content,
    location,]);
   
const del = (id) => Query("Delete from chirps where id = ?", [id]);

const update = (id, content) =>
  Query("Update chirps set content = ? where id = ?", [content, id]);

export default {
  one,
  all,
  insert,
  del,
  update,
};
