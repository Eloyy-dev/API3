const { Router } = require("express");

const { getById, createUser, getByIdCourses, updateUser,addCoursesAUser } = require('../controllers/users.controllers');


const router = Router();


router.get("/users/:id", getById);

router.get("/users/:id/courses", getByIdCourses);

router.put("/users/:id", updateUser);

router.post("/users/", createUser);

router.post("/users/:id/courses", addCoursesAUser);















module.exports = router;

