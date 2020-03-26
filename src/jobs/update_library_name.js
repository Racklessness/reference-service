class UpdateLibraryName {
    _libraryId;

    constructor(libraryId) {
        this._libraryId = libraryId;
    }

    async handle() {
        console.log('Updating Library Name');
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log('Finished Updating Library Name');
                resolve();
            }, 2000);
        });
    }
}

module.exports = UpdateLibraryName;
