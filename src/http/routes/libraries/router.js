const ListLibraries = require('./list');
const CreateLibrary = require('./create');
const UpdateLibrary = require('./update');
const DeleteLibrary = require('./delete');
const GetLibrary = require('./retrieve');
const DelayedLibraryUpdate = require('./delayed_update');

const express = require('express');
const router = express.Router();

router.get('/', ListLibraries);
router.post('/', CreateLibrary);
router.get('/:id', GetLibrary);
router.put('/:id', UpdateLibrary);
router.patch('/:id', UpdateLibrary);
router.delete('/:id', DeleteLibrary);
router.patch('/:id/delayed', DelayedLibraryUpdate);

module.exports = router;