const coursesService = require('../Services/courses.services');

const getAllCourses = async (req, res) => {
  try {
    const result = await coursesService.getAll();
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
} 

const createCourse = async (req, res) => {
  try {
    const newCourse = req.body;
    const result = await coursesService.new(newCourse);
    res.status(200).json(result);

  } catch (error) {
    console.log(error);

  }
}

const updateCourse = async (req, res) => {
  try {
    const {id} = req.params;
    const {description }= req.body;
    const result = await coursesService.upd(description,id);
    res.status(200).json(result);
  } catch (error) {
    console.log(error);

  }
}


module.exports = {
  getAllCourses,
  createCourse,
  updateCourse,
}