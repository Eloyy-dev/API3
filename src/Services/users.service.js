const Courses = require('../models/courses.models');
const UsersCourses = require('../models/userCourses.model');
const Users = require('../models/users.models');

class userService {


  static async getById(id) {
    try {
      const result = await Users.findByPk(id, {
        attributes: {
          exclude: ["createdAt", "updatedAt", "password"]
        },
      })
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async new(newUser) {
    try {
      const result = await Users.create(newUser);
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async getWithCourses(user_id) {
    try {
      const result = await Users.findOne({
        where: { user_id },
        attributes: {
          exclude: ["createdAt", "updatedAt", "password"]
        },
        include:{
          model: Courses,
          attributes:["title"]
        }
      });
      //console.log(result);
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async updt(dataUpd, user_id) {
    try {
      const result = await Users.update(dataUpd,
        {
          where: { user_id },
        });

      return result;
    } catch (error) {
      throw error;

    }
  }

  static async addCourse(newCourse) {
    try {
      const result = await UsersCourses.create(newCourse);
      return result;
    } catch (error) {
      throw error;
    }
  }

}


module.exports = userService;