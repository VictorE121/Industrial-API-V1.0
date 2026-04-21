import express from 'express';
import {
    createMachine,
    getMachines,
    updateMachineStatus
} from '../controllers/machineController.js';

const router = express.Router();

router.post('/', createMachine);
router.get('/', getMachines);
router.put('/:id/status', updateMachineStatus);

export default router;