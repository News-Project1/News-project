const Video = require('../models/Video');

// الحصول على جميع مقاطع الفيديو
const getAllVideos = async (req, res) => {
  try {
    const videos = await Video.find({ isDeleted: false });
    res.status(200).json(videos);
  } catch (error) {
    res.status(500).json({ message: 'فشل في تحميل مقاطع الفيديو', error });
  }
};

// الحصول على فيديو معين بناءً على الـ id
const getVideoById = async (req, res) => {
  try {
    const video = await Video.findById(req.params.id);
    if (!video) {
      return res.status(404).json({ message: 'الفيديو غير موجود' });
    }
    res.status(200).json(video);
  } catch (error) {
    res.status(500).json({ message: 'فشل في تحميل الفيديو', error });
  }
};

module.exports = {
  getAllVideos,
  getVideoById,
};