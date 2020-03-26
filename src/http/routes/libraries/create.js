const Library = require('../../../models/library');

module.exports = async (request, response) => {
  const { name } = request.body;
  const library = await Library.create({
    name,
  });
  return response.status(201).json(library);
};
