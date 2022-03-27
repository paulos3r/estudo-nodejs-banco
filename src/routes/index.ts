import { Router } from 'express';
import * as Home from '../controllers/homeController';
import * as User from '../controllers/usersController';

const router = Router();

router.get('/', Home.home);
router.get('/usuario/:id/mais', User.addIdade);
router.get('/usuario/:id/menos', User.diminuirIdade);
router.get('/usuario/:id/excluir', User.excluirIdade);


export default router;