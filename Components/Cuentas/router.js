const express = require('express');
const router = express.Router();
const cors = require('cors');





// agrego controlador para acceder a su funcionalidades//


const Controller = require('./Controller');


router.get('/:clientId', [cors()], Controller.getAllAccounts);
router.post('/', [cors()], Controller.addAccounts);



//exporto router para ser utilizado con un require//

module.exports = router;