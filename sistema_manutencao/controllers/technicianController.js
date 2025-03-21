const technicianService = require('../services/technicianService');

async function createTechnician(req, res){
    try {
        const {name, contact} = req.body;
        if(await technicianService.createTechnician(name, contact)){
            res.status(201).json({message: "Técnico Cadastrado!"});
        } else {
            res.status(500).json({error: "Erro no Registro!"});
        }
    } catch (err) {
        res.status(500).json({error: "Erro no Registro!"});
    }
}

async function showTechnicians(req, res){
    try {
        const elements = await technicianService.showTechnicians();
        if(!elements){
            res.status(500).json({message: "Erro ao listar técnicos!"});
        } else {
            res.json(elements);
        }
    } catch (err) {
        res.status(500).json({message: "Erro ao listar técnicos!"});
        
    }
}

async function searchTechnicianById(req, res){
    try {
        const { id } = req.params;
        const elements = await technicianService.searchTechnicianById(id);
        if(!elements){
            res.status(500).json({message: "Erro ao procurar técnico!"});
        } else {
            res.json(elements);
        }
    } catch (err) {
        res.status(500).json({message: "Erro ao procurar técnico!"});
    }
}

async function updateTechnician(req, res){
    try {
        const {id} = req.params;
        const {name, contact} = req.body;
        if(await technicianService.updateTechnician(id, name, contact)){
            res.status(201).json({message: "Técnico Atualizado!"});
        } else {
            res.status(500).json({error: "Erro ao atualizar!"});
        }
    } catch (err) {
        res.status(500).json({error: "Erro ao atualizar!"});
    }
}

async function deleteTechnician(req, res){
    try {
        const {id} = req.params;
        if(await technicianService.deleteTechnician(id)){
            res.status(201).json({message: "Técnico Deletado!"});
        } else {
            res.status(500).json({error: "Erro ao deletar!"})
        }
    } catch (err) {
        res.status(500).json({error: "Erro ao deletar!"})
    }
}

module.exports = {
    createTechnician,
    showTechnicians,
    searchTechnicianById,
    deleteTechnician,
    updateTechnician
}