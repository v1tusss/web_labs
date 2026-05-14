const isVozmojnostiDataValid = require("../validators/isVozmojnostiDataValid");

const {
  getVozmojnostiDataModel,
  postVozmojnostiDataModel,
} = require("../model/files/vozmojnostiDataModel");

const getVozmojnostiData = (req, res, next) => {
  try {
    const data = getVozmojnostiDataModel();

    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

const postVozmojnostiData = (req, res, next) => {
  try {
    const data = req.body;

    // валидируем данные
    // если невалидны, то бросит ошибку
    isVozmojnostiDataValid(data);

    // если с данными все ок, тогда пишем в файл через модель файлов
    postVozmojnostiDataModel(JSON.stringify(data));
    res.status(200).json({
      message: "Данные успешно обновлены",
    });
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

module.exports = { getVozmojnostiData, postVozmojnostiData };
