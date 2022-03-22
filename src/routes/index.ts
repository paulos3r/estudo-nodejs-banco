import { Router } from 'express';

import * as Home from '../controllers/homeController';

const router = Router();

router.get('/', Home.home);


export default router;