const isRegistraciyaDataValid = require("../validators/isRegistraciyaDataValid");

const {
  getRegistraciyaDataModel,
  postRegistraciyaDataModel,
} = require("../model/files/registraciyaDataModel");

const getRegistraciyaData = (req, res, next) => {
  try {
    const data = getRegistraciyaDataModel();

    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

const postRegistraciyaData = (req, res, next) => {
  try {
    const data = req.body;

    // валидируем данные
    // если невалидны, то бросит ошибку
    isRegistraciyaDataValid(data);

    // если с данными все ок, тогда пишем в файл через модель файлов
    postRegistraciyaDataModel(JSON.stringify(data));
    res.status(200).json({
      message: "Данные успешно обновлены",
    });
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

module.exports = { getRegistraciyaData, postRegistraciyaData };
