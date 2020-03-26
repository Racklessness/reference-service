const Library = require('../../../models/library');

module.exports = async (request, response) => {
  await Library.destroy({
    where: {
      id: request.params.id,
    }
  });
  return response.status(200).json('');
};
