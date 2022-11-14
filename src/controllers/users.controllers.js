const userService = require("../Services/users.service");


const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await userService.getById(id);
    res.status(200).json(result);

  } catch (error) {
    console.log(error);
  }
}

const createUser = async (req, res) => {
  try {
    const newUser = req.body;
    const result = await userService.new(newUser);
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
}

const getByIdCourses = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await userService.getWithCourses(id);

    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
}

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const dataUpdate = req.body;

    const result = await userService.updt(dataUpdate, id);

    res.status(200).json(result);
  } catch (error) {
    console.log(error);

  }
}

const addCoursesAUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { course_id } = req.body;
    const newCourse = {
      user_id: id,
      course_id: course_id
    }
    const result = await userService.addCourse(newCourse);
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
}








module.exports = {
  getById,
  createUser,
  getByIdCourses,
  updateUser,
  addCoursesAUser,
};