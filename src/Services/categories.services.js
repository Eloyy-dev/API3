const categories = require('../models/categories.models');


class categoriesService {

  static async create(newcategory) {
    try {
      const result = await categories.create(newcategory);
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async delete(id) {
    try {
      const result = await categories.destroy({
        where: { id }
      });
      return result;
    } catch (error) {
      throw error;
    }
  }



}




module.exports = categoriesService;