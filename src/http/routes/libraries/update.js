const Library = require('../../../models/library');

module.exports = async (request, response) => {
  const library = await Library.findByPk(request.params.id);
  await Library.update(request.body, {
    where: {
      id: request.params.id,
    }
  });
  return response.json(library);
};
