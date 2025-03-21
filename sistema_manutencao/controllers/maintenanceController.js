const maintenanceService = require('../services/maintenanceService');

async function createMaintenance(req, res){
    try {
        const {equipment_id, technician_id, service_id, start_date, end_date} = req.body;
        if(await maintenanceService.createMaintenance(equipment_id, technician_id, service_id, start_date, end_date)){
            res.status(201).json({message: "Manutenção Cadastrado!"});
        } else {
            res.status(500).json({error: "Erro no Registro!"});
        }
    } catch (err) {
        res.status(500).json({error: "Erro no Registro!"});
    }
}

async function showMaintenances(req, res){
    try {
        const elements = await maintenanceService.showMaintenances();
        if(!elements){
            res.status(500).json({message: "Erro ao listar manutenções!"});
        } else {
            res.json(elements);
        }
    } catch (err) {
        res.status(500).json({message: "Erro ao listar manutenções!"});
    }
}

async function searchMaintenanceById(req, res){
    try {
        const { id } = req.params;
        const elements = await maintenanceService.searchMaintenanceById(id);
        if(!elements){
            res.status(500).json({message: "Erro ao procurar manutenção!"});
        } else {
            res.json(elements);
        }
    } catch (err) {
        res.status(500).json({message: "Erro ao procurar manutenção!"});
    }
}

async function updateMaintenance(req, res){
    try {
        const {id} = req.params;
        const {equipment_id, technician_id, service_id, start_date, end_date} = req.body;
        if(await maintenanceService.updateMaintenance(id, equipment_id, technician_id, service_id, start_date, end_date)){
            res.status(201).json({message: "Manutenção Atualizada!"});
        } else {
            res.status(500).json({error: "Erro ao atualizar!"});
        }
    } catch (err) {
        res.status(500).json({error: "Erro ao atualizar!"});
    }
}

async function deleteMaintenance(req, res){
    try {
        const {id} = req.params;
        if(await maintenanceService.deleteMaintenance(id)){
            res.status(201).json({message: "Manutenção Deletada!"});
        } else {
            res.status(500).json({error: "Erro ao deletar!"})
        }
    } catch (err) {
        res.status(500).json({error: "Erro ao deletar!"})
    }
}

module.exports = {
    createMaintenance,
    showMaintenances,
    searchMaintenanceById,
    deleteMaintenance,
    updateMaintenance
}