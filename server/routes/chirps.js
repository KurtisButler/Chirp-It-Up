import * as express from "express";
import * as reqProm from "request-promise";
import db from "../db";
const router = express.Router();
// const chirpsStore = require("../chirpstore.js");
// no more chirpstore! install mysql from npm and configure the routes to use that instead of chirpstore.

// REST API
router.get("/:id?", async (req, res) => {
  const id = req.params.id;

  if (id) {
    res.json(await db.chirps.one(id));
  } else {
    res.json(await db.chirps.all());
  }
});

// Create
router.post("/", async (req, res) => {
  const userid = req.body.userid;
  const content = req.body.content;
  const location = req.body.location;

  try {
    res.json(await db.chirps.insert(userid, content, location));
  } catch (err) {
    res.sendStatus(200);
  }
});

// Delete
router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  if (id) {
    try {
      res.json((await db.chirps.del(id))[0]);
    } catch (err) {
      if (err) throw err;
      res.sendStatus(200);
    }
  }
});

// Update
router.put("/:id", async (req, res) => {
  const id = req.body.id;
  const content = req.body.content;

  try {
    res.json(await db.posts.put(id, content));
  } catch (err) {
    console.log(err);
    res.sendStatus(200);
  }
});

export default router;
