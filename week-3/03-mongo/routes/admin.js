const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = Router();

// Admin Routes
router.post("/signup", async (req, res) => {
  const { userName, password } = req.body;
  console.log({ userName, password });

  const isAdminUserExist = await Admin.findOne({
    userName,
    password,
  });

  if (isAdminUserExist) {
    res.status(200).json({
      msg: "Admin user already exists",
    });
    return;
  }

  await Admin.create({
    userName,
    password,
  });

  res.status(201).json({
    msg: "Admin created successfully",
    userName,
    password,
  });
  return;
});

router.post("/courses", async (req, res) => {
  const { title, description, imageLink, price } = req.body;
  const isCourseCreated = await Course.create({
    title,
    description,
    imageLink,
    price,
  });
  console.log({ isCourseCreated });
  res.status(201).json({
    msg: "Course created successfully",
    courseId: isCourseCreated._id,
  });
});

router.get("/courses", adminMiddleware, async (req, res) => {
  const courses = await Course.find({});
  res.status(200).json({
    msg: "Hit refresh",
    courses,
  });
});

module.exports = router;
