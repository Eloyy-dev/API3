const videosService = require('../Services/videos.service');



const createVideo = async (req, res) => {
  try {
    const newVideo = req.body;
    const result = await videosService.create(newVideo);
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
}

const deleteVideo = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await videosService.delete(id);
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
}










module.exports = {
  createVideo,
  deleteVideo,
}