const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");

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
  }
  await User.create({
    userName,
    password,
  });

  res.status(200).json({
    msg: "User created successfully",
  });
});

router.get("/courses", userMiddleware, async (req, res) => {
  const courses = await Course.find({});

  res.status(200).json({
    courses,
  });
});

router.post("/courses/:courseId", userMiddleware, (req, res) => {
  // Implement course purchase logic
});

router.get("/purchasedCourses", userMiddleware, (req, res) => {
  // Implement fetching purchased courses logic
});

module.exports = router;
