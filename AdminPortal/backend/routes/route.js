const express = require("express");
const router = express.Router();

//import database schema model
const News = require("../Model");

//saving the form data
router.post("/form", (req, res) => {
  // const { title, body, image, labels, author } = req.body;
  const data = req.body;
  res.send({ message: "Successfully Submited 😎 " });
  let newNews = new News({
    ...data,
  });
  newNews.save();
});

//making api for fetching data from mongodb

router.get("/news", (req, res) => {
  News.find()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(404).send({ status: "Something Went Wrong" });
    });
});

//making api for delete news data from mongo db
router.delete("/delete/:postId", async (req, res) => {
  try {
    let post = await News.findByIdAndRemove(req.params.postId);
    if (post) {
      res.status(200).json({
        status: 200,
        message: "Post deleted successfully",
      });
    } else {
      res.status(400).json({
        status: 400,
        message: "No post found",
      });
    }
  } catch (err) {
    res.status(400).json({
      status: 400,
      message: err.message,
    });
  }
});

//fetching the single news
router.get("/news/:postId", async (req, res) => {
  try {
    let post = await News.findOne({
      _id: req.params.postId,
    });
    if (post) {
      res.status(200).json({
        status: 200,
        message: "Successfully updated 😎 ",
        data: post,
      });
    } else {
      res.status(400).json({
        status: 400,
        message: "No post found",
      });
    }
  } catch (err) {
    res.status(400).json({
      status: 40,
      message: err.message,
    });
  }
});

//update a single news
router.put("/update/:postId", async (req, res) => {
  try {
    let post = await News.findByIdAndUpdate(req.params.postId, req.body, {
      upsert: true,
    });
    if (post) {
      res.status(200).json({
        message: "Successfully updated ! 🥳",
        data: post,
      });
    } else {
      res.status(400).json({
        message: "No post found",
      });
    }
  } catch (err) {
    res.status(400).json({
      status: 400,
      message: err.message,
    });
  }
});

module.exports = router;
