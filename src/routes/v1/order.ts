import { Router } from 'express';

import { create } from 'controllers/order';
import { checkJwt } from 'middleware/checkJwt';

const router = Router();


/**
 * @swagger
 * /catchphrases:
 *   get:
 *     description: All catchphrases
 *     responses:
 *       200:
 *         description: Returns all the catachphrases
 */
router.post('/create', [checkJwt] , create);


export default router;
