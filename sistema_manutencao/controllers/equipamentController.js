const equipamentService = require('../services/equipamentService');

async function createEquipament(req, res){
    try {
        const {name, description, serial_number} = req.body;
        if(await equipamentService.createEquipament(name, description, serial_number)){
            res.status(201).json({message: "Equipamento Cadastrado!"});
        } else {
            res.status(500).json({error: "Erro no Registro!"});
        }
    } catch (err) {
        res.status(500).json({error: "Erro no Registro!"});
    }
}

async function showEquipaments(req, res){
    try {
        const elements = await equipamentService.showEquipaments();
        if(!elements){
            res.status(500).json({message: "Erro ao listar equipamentos!"});
        } else {
            res.json(elements);
        }
    } catch (err) {
        res.status(500).json({message: "Erro ao listar equipamentos!"});
        
    }
}

async function searchEquipamentById(req, res){
    try {
        const { id } = req.params;
        const elements = await equipamentService.searchEquipamentById(id);
        if(!elements){
            res.status(500).json({message: "Erro ao procurar equipamento!"});
        } else {
            res.json(elements);
        }
    } catch (err) {
        res.status(500).json({message: "Erro ao procurar equipamento!"});
    }
}

async function updateEquipament(req, res){
    try {
        const {id} = req.params;
        const {name, description, serial_number} = req.body;
        if(await equipamentService.updateEquipament(id, name, description, serial_number)){
            res.status(201).json({message: "Equipamento Atualizado!"});
        } else {
            res.status(500).json({error: "Erro ao atualizar!"});
        }
    } catch (err) {
        res.status(500).json({error: "Erro ao atualizar!"});
    }
}

async function deleteEquipament(req, res){
    try {
        const {id} = req.params;
        if(await equipamentService.deleteEquipament(id)){
            res.status(201).json({message: "Equipamento Deletado!"});
        } else {
            res.status(500).json({error: "Erro ao deletar!"})
        }
    } catch (err) {
        res.status(500).json({error: "Erro ao deletar!"})
    }
}

module.exports = {
    createEquipament, 
    showEquipaments,
    searchEquipamentById,
    updateEquipament,
    deleteEquipament
}