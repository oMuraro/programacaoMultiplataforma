const serviceService = require('../services/serviceService');

async function createService(req, res){
    try {
        const {description, cost} = req.body;
        if(await serviceService.createService(description, cost)){
            res.status(201).json({message: "Serviço Cadastrado!"});
        } else {
            res.status(500).json({error: "Erro no Registro!"});
        }
    } catch (err) {
        res.status(500).json({error: "Erro no Registro!"});
    }
}

async function showServices(req, res){
    try {
        const elements = await serviceService.showServices();
        if(!elements){
            res.status(500).json({message: "Erro ao listar serviços!"});
        } else {
            res.json(elements);
        }
    } catch (err) {
        res.status(500).json({message: "Erro ao listar serviços!"});
    }
}

async function searchServiceById(req, res){
    try {
        const { id } = req.params;
        const elements = await serviceService.searchServiceById(id);
        if(!elements){
            res.status(500).json({message: "Erro ao procurar serviço!"});
        } else {
            res.json(elements);
        }
    } catch (err) {
        res.status(500).json({message: "Erro ao procurar serviço!"});
    }
}

async function updateService(req, res){
    try {
        const {id} = req.params;
        const {description, cost} = req.body;
        if(await serviceService.updateService(id, description, cost)){
            res.status(201).json({message: "Serviço Atualizado!"});
        } else {
            res.status(500).json({error: "Erro ao atualizar!"});
        }
    } catch (err) {
        res.status(500).json({error: "Erro ao atualizar!"});
    }
}

async function deleteService(req, res){
    try {
        const {id} = req.params;
        if(await serviceService.deleteService(id)){
            res.status(201).json({message: "Serviço Deletado!"});
        } else {
            res.status(500).json({error: "Erro ao deletar!"})
        }
    } catch (err) {
        res.status(500).json({error: "Erro ao deletar!"})
    }
}

module.exports = {
    createService,
    showServices,
    searchServiceById,
    deleteService,
    updateService
}