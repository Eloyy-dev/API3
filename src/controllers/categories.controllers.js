const categoriesService = require('../Services/categories.services');



const createCategory = async (req, res) => {
  try {
    const newcategory = req.body;
    const result = await categoriesService.create(newcategory);
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
}

const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await categoriesService.delete(id);
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
}










module.exports = {
  createCategory,
  deleteCategory,
}