const Library = require('../../../models/library');

module.exports = async function (req, resp) {
  const libraries = await Library.findAll();
  return resp.json(libraries);
};
