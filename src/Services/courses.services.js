const courses = require('../models/courses.models');
const categories = require('../models/categories.models');
const Videos = require('../models/videos.models');
class coursesService {


  static async getAll() {
    try {
      const result = await courses.findAll({
        include: [
          {
            model: Videos,
            attributes: ["title", "url"],
          },
          {
            model: categories,
            attributes: ["name"],
          }
        ]

      });
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async new(newCourse) {
    try {
      const result = await courses.create(newCourse);
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async upd(data, course_id) {
    try {
      const result = await courses.update({
        description: data,
      }, {
        where: { course_id }
      }
      );
      return result;
    } catch (error) {
      throw error;
    }
  }














}






module.exports = coursesService;











