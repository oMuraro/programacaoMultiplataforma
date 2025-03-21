const equipmentService = require('../services/equipmentService');

async function createEquipment(req, res){
    try {
        const {name, description, serial_number} = req.body;
        if(await equipmentService.createEquipment(name, description, serial_number)){
            res.status(201).json({message: "equipmento Cadastrado!"});
        } else {
            res.status(500).json({error: "Erro no Registro!"});
        }
    } catch (err) {
        res.status(500).json({error: "Erro no Registro!"});
    }
}

async function showEquipments(req, res){
    try {
        const elements = await equipmentService.showEquipments();
        if(!elements){
            res.status(500).json({message: "Erro ao listar equipmentos!"});
        } else {
            res.json(elements);
        }
    } catch (err) {
        res.status(500).json({message: "Erro ao listar equipmentos!"});
        
    }
}

async function searchEquipmentById(req, res){
    try {
        const { id } = req.params;
        const elements = await equipmentService.searchEquipmentById(id);
        if(!elements){
            res.status(500).json({message: "Erro ao procurar equipmento!"});
        } else {
            res.json(elements);
        }
    } catch (err) {
        res.status(500).json({message: "Erro ao procurar equipmento!"});
    }
}

async function updateEquipment(req, res){
    try {
        const {id} = req.params;
        const {name, description, serial_number} = req.body;
        if(await equipmentService.updateEquipment(id, name, description, serial_number)){
            res.status(201).json({message: "equipmento Atualizado!"});
        } else {
            res.status(500).json({error: "Erro ao atualizar!"});
        }
    } catch (err) {
        res.status(500).json({error: "Erro ao atualizar!"});
    }
}

async function deleteEquipment(req, res){
    try {
        const {id} = req.params;
        if(await equipmentService.deleteEquipment(id)){
            res.status(201).json({message: "equipmento Deletado!"});
        } else {
            res.status(500).json({error: "Erro ao deletar!"})
        }
    } catch (err) {
        res.status(500).json({error: "Erro ao deletar!"})
    }
}

module.exports = {
    createEquipment, 
    showEquipments,
    searchEquipmentById,
    updateEquipment,
    deleteEquipment
}