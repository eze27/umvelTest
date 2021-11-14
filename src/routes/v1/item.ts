import { Router } from 'express';

import { create } from 'controllers/item';
import { checkJwt } from 'middleware/checkJwt';

const router = Router();

router.post('/create', [checkJwt], create );


export default router;
