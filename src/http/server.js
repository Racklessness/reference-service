const router = require('./router');
const port = process.env.NODE_PORT || 3000;

router.listen(port, () => console.log(`Library Service listening on port ${port}!`));

module.exports = router;
