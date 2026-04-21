import Machine from "../models/Machine.js";

//Dar de alta maquina
export const createMachine = async (req, res) => {
    try {   
        const machine = new Machine(req.body);
        await machine.save();
        res.status(200).json(machine);
    } catch (error) {
        res.status(500).json({ error: error.message});
    }
};

//Obtener maquinas
export const getMachines = async (req, res) => {
    try {
        const machines = await Machine.find();
        res.json(machines);
    } catch (error) {
        res.status(500).json({ error: error.message});
    }
};

//Actualizar estado de maquina
export const updateMachineStatus = async (req, res) => {
    try {
        const { status } = req.body;

        const machine = await Machine.findById(req.params.id);

        if(!machine) {
            return res.status(404).json({ msg: 'Maquina no encontrada'});
        }

        machine.status = status;
        await machine.save();

        res.json(machine);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};