const languagesCtrl = {};

const Language = require('../models/language');

languagesCtrl.getLanguages = async (req, res) => {
  const languages = await Language.find();
  res.json(languages);
};

languagesCtrl.createLanguage = async (req, res) => {
  const { language, greeting, farewell, name } = req.body;
  const newLanguage = new Language({
    language,
    greeting,
    farewell,
    name
  });
  await newLanguage.save();
  res.json({message: 'Language saved'});
}

languagesCtrl.getLanguage = async (req, res) => {
  const language = await Language.findById(req.params.id);
  res.json(language);
};

languagesCtrl.updateLanguage = async (req, res) => {
  await Language.findByIdAndUpdate(req.params.id, req.body);
  res.json({message: 'Update language'})
};

languagesCtrl.deleteLanguage = async (req, res) => {
  await Language.findByIdAndDelete(req.params.id);
  res.json({message: 'Delete language'});
};


module.exports = languagesCtrl;