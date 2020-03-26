const appJobs = require('../jobs');

class Router {
    routes = {};

    mapQueueJob(name, queue_func) {
        this.routes[name] = queue_func
    }

    initialiseJob(name, data) {
        return new this.routes[name](data);
    }

    async handle(name, data) {
        return this.initialiseJob(name, data).handle();
    }
}

const router = new Router();

router.mapQueueJob(appJobs.UpdateLibraryName.name, appJobs.UpdateLibraryName);

module.exports = router;
