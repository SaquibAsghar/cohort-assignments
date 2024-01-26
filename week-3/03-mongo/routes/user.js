const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");
const mongoose = require("mongoose");

// User Routes
router.post("/signup", async (req, res) => {
  const { userName, password } = req.body;
  const isUserPresent = await User.findOne({
    userName,
    password,
  });
  if (isUserPresent) {
    res.status(200).json({
      msg: "User already exists",
    });
    return;
  }
  await User.create({
    userName,
    password,
  });

  res.status(200).json({
    msg: "User created successfully",
  });
});

router.get("/courses", async (req, res) => {
  const courses = await Course.find({});

  res.status(200).json({
    courses,
  });
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  try {
    const { courseId } = req.params;
    const { username: userName } = req.headers;
    await User.updateOne(
      {
        userName,
      },
      {
        $push: {
          purchasedCourses: courseId,
        },
      }
    );

    res.status(200).json({
      msg: "Purchase Succesfully",
    });
  } catch (error) {
    console.error(error.message);
  }
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  const { username: userName } = req.headers;
  const user = await User.findOne({
    userName,
  });
  const courses = await Course.find({
    _id: {
      $in: user.purchasedCourses,
    },
  });
  res.status(200).json({
    courses,
  });
});

module.exports = router;
