const Library = require('../../../models/library');

module.exports = async (request, response) => {
    const library = await Library.findOne({
        where: {
            id: request.params.id,
        },
    });
    if (!library) {
      return response.status(404).send();
    }
    return response.json(library);
};
