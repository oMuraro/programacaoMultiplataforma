const conexao = require('../db');

async function createService(description, cost){
    const sql = "INSERT INTO servicos (descricao, custo) VALUES (?, ?)";
    try {
        const [res] = await conexao.query(sql, [description, cost]);
        return true;
    } catch (err) {
        return false;        
    }
}

async function showServices(){
    const sql = "SELECT * FROM servicos";
    try {
        const [res] = await conexao.query(sql);
        return res;
    } catch (err) {
        return false;
    }
}

async function searchServiceById(id){
    const sql = "SELECT * FROM servicos WHERE id = ?";
    try {
        const [res] = await conexao.query(sql, [id]);
        return res;
    } catch (err) {
        return false;
    }
}

async function updateService(id, description, cost){
    const sql = "UPDATE servicos SET descricao = ?, custo = ? WHERE id = ?";
    try {
        const [res] = await conexao.query(sql, [description, cost, id]);
        return true;
    } catch (err) {
        return false;
    }
}

async function deleteService(id){
    const sql = "DELETE FROM servicos WHERE id = ?";
    try {
        const [res] = await conexao.query(sql, [id]);
        return true;
    } catch (err) {
        return false;
    }
}

module.exports = {
    createService,
    showServices,
    searchServiceById,
    deleteService,
    updateService
}