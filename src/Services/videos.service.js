const videos = require('../models/videos.models');


class videosService {

  static async create(newvideo) {
    try {
      const result = await videos.create(newvideo);
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async delete(video_id) {
    try {
      const result = await videos.destroy({
        where: { video_id }
      });
      return result;
    } catch (error) {
      throw error;
    }
  }



}




module.exports = videosService;
