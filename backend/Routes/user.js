import express from 'express';
import {
  updateUser,
  deleteUser,
  getAllUser,
  getSingleUser,
} from '../Controller/UserController.js';

const router = express.Router();

router.get('/:id', getSingleUser);
router.get('/', getAllUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

export default router;
