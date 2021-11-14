import { Router } from 'express';

import auth from './auth';
import users from './Users';
import order from './order';
import item from './item';
const router = Router();

router.use('/auth', auth);
router.use('/users', users);
router.use('/order',order)
router.use('/item',item)
export default router;
