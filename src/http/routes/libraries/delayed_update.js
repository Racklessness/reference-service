const Library = require('../../../models/library');
const {dispatch} = require('../../../queue');
const {UpdateLibraryName} = require('../../../jobs');

module.exports = async function (req, resp) {
    await dispatch(UpdateLibraryName, {libraryId: req.params.id}, {
        sync: true,
        delay: 15,
    });

    const libraries = await Library.findAll();

    return resp.json(libraries);
};
