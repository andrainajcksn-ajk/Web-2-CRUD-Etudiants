import { Router } from 'express';
import * as controller from '../controllers/etudiantController';
import { verifyToken } from '../middlewares/authMiddleware';

const router = Router();

router.get('/', verifyToken, controller.getAll);
router.get('/:id', verifyToken, controller.getById);
router.post('/', verifyToken, controller.create);
router.put('/:id', verifyToken, controller.update);
router.patch('/:id', verifyToken, controller.update);
router.delete('/:id', verifyToken, controller.remove);

export default router;